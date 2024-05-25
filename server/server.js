const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv');

const app = express()
app.use(cors())

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.get('/', (re, res) => {
    return res.json("From server side.")
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("Listening.")
})