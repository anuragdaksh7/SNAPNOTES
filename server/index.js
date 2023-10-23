require("dotenv").config();
const express = require('express');
const jwt = require("jsonwebtoken");
const CookieParser = require("cookie-parser");
const db = require("./databaseConnection.js");
const Register = require("./registers.js");
const notes = require("./notes.js");
var cors = require('cors')
const { createHash } = require('crypto');
const auth = require("./auth.js");
var multer = require('multer');


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
app.use(express.json({ limit: '10mb' }));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });


app.listen(process.env.PORT || 5000, ()=>{
    console.log('listening on port '+process.env.PORT);
})



app.get('/', (req, res) => {
    res.send("hello").status(200);
})



app.post("/login", async(req, res) => {
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
                withCredentials: true,
                httpOnly: false,
            },
            { domain: 'http://localhost:3000' }
        );
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
    try {
        
        
        const register = new Register({
            userName: req.body.username,
            email: req.body.email,
            password: hash(req.body.password),
        });
        const token = await register.generateAuthToken();
        res.cookie(
            "jwt",
            token, 
            {
                withCredentials: true,
                httpOnly: false,
            },
            { domain: 'http://localhost:3000' }
        );
        
        const registered = await register.save();
        res.send("done").status(201);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

app.get("/getUser",auth,(req, res) => {
    res.send(req.user.userName).status(200)
});

app.post('/postit', auth ,(req, res) => {
    var obj = {
        userName: req.user.userName,
        title: req.body.title,
        note: req.body.note,
        img: {
            data: req.body.img,
            contentType: 'image/png'
        },
        date: req.body.date
    }
    
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send("Posted");
        }
    });
    res.send("Posted");
});

app.get("/getSkeletons", auth, (req, res) => {
    const userName = req.user.userName;
    const note =  notes.find({ userName: userName });
    console.log(note);
    res.send(200);
})