const express = require('express')
const mysql = require('mysql2')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const AWS = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3')

// App
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser())

// Environment
dotenv.config();

// Bcrypt
const salt = 10

// * MySQL and MongoDB connections
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
mongoose.connect(process.env.MDB_CONNECTION)

// * AWS configuration, uploading, and viewing 
require('aws-sdk/lib/maintenance_mode_message').suppress = true; // Removes annoying warning.
AWS.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const s3 = new AWS.S3();
const myBucket = process.env.AWS_BUCKET_NAME;

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: myBucket,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })
});

// ? SINGLE file upload to s3
app.post("/upload", upload.single("myPic"), (req, res) => {
    console.log(req.file);
    res.send("Successfully uploaded")
})


// Models
const TestingModel = require('./models/testing')

// app.get('/testing', (req, res) => {
//     TestingModel.find({}).then(function(test) {
//         res.json(test)
//     }).catch(function(err) {
//         res.json(err)
//     })
// })

// app.post('/createTesting', async (req, res) => {
//     const test = req.body;
//     const newTest = new TestingModel(test);
//     await newTest.save();
//     res.json(test);
// })

const verifyUser = (req, res, next) => {
    // Read cookie
    const token = req.cookies.token;

    if(!token) {
        return res.json({Error: "You are not authenticated."});
    } else {
        // Verify equivalent JWT token
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if(err) {
                return res.json({Error: "Token is not OK."});
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}
app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success", name: req.name});
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (username, email, password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error in hashing password."});

        const values = [req.body.name, req.body.email, hash];
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Error inserting data into the server."});
            return res.json({Status: "Success"});
        })
    })
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login error in server."});

        if(data.length > 0) {
            // Compare input password to hashed password
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Password comparison error."});
                
                if(response) {
                    // Generate JWT token
                    const name = data[0].username;
                    const token = jwt.sign({name}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"});
                } else {
                    return res.json({Error: "Incorrect password!"});
                }
            })
        } else {
            return res.json({Error: "No such email exists."});
        }
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: "Success"});
})

app.listen(8081, () => {
    console.log("Listening.");
})