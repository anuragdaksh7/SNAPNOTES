require("dotenv").config();
const express = require('express');
const jwt = require("jsonwebtoken");
const CookieParser = require("cookie-parser");
const db = require("./databaseConnection.js");
const Register = require("./registers.js");
var cors = require('cors')
const { createHash } = require('crypto');
const auth = require("./auth.js");


function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}


const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true, // Allow cookies
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(CookieParser());



app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
})



app.get('/', (req, res) => {
    res.send("hello").status(200);
})



app.post("/login", async(req, res) => {
    // console.log(req .body);
    // console.log(req.body.email);
    try {
        
        const email = req.body.email;
        const password = hash(req.body.password);

        const userEmail = await Register.findOne({email: email});
        const token = await userEmail.generateAuthToken();
        // console.log("token: "+ token);

        res.cookie(
            "jwt",
            token,
            {
                // secure: true,
                // sameSite: 'none',
                // expires: new Date(Date.now()+30000),
                // httpOnly: true,
                // secure: true
                withCredentials: true,
                httpOnly: false,
            },
            { domain: 'http://localhost:3000' }
        );
        // console.log(`cookie: ${req.cookies.jwt}`);
        if (userEmail.password === password){
            res.send("done").status(201);
        } else {
            res.send("invalid creds");
        }

    } catch (error) {
        res.status(400).send(error);
    }
});



app.post("/signup", async (req, res) =>{
    // console.log(req.body)
    try {
        
        
        const register = new Register({
            userName: req.body.username,
            email: req.body.email,
            password: hash(req.body.password),
        });

        const token = await register.generateAuthToken();
        // console.log(token);
        res.cookie(
            "jwt",
            token, 
            {
                // expires: new Date(Date.now()+30000),
                // httpOnly: true
                withCredentials: true,
                httpOnly: false,
            },
            { domain: 'http://localhost:3000' }
        );
        // console.log(userCache);
        
        const registered = await register.save();
        res.send("done").status(201);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

app.get("/getUser",auth,(req, res) => {
    // console.log(req.cookies.jwt);
    console.log(req.user.userName);
    // res.cookie(
    //     "user",
    //     req.user.userName, 
    //     {
    //         // expires: new Date(Date.now()+30000),
    //         // httpOnly: true
    //         withCredentials: true,
    //         httpOnly: false,
    //     },
    //     { domain: 'http://localhost:3000' }
    // )
    res.send(req.user.userName).status(200)
});