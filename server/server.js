const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')

// used with bcrypt
const salt = 10

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

dotenv.config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.get('/', (req, res) => {
    return res.json("From server side.")
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (username, email, password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error in hashing password."})

        const values = [req.body.name, req.body.email, hash]   
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Error inserting data into the server."})
            return res.json({Status: "Success"})
        })
    })
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?'
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login error in server."})

        if(data.length > 0) {
            // Compare input password to hashed password
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Password comparison error."})
                
                if(response) {
                    return res.json({Status: "Success"})
                } else {
                    return res.json({Error: "Incorrect password!"})
                }
            })
        } else {
            return res.json({Error: "No such email exists."})
        }
    })
})

app.listen(8081, () => {
    console.log("Listening.")
})