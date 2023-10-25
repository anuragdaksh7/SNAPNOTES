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
    origin: ["http://localhost:3000","https://snapnotes-nu.vercel.app"],
    credentials: true, // Allow cookies
};

const app = express();
app.use(express.json({ limit: '100mb' }));
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(CookieParser());

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

app.listen(process.env.PORT || 4345, ()=>{
    console.log('listening on port '+process.env.PORT);
});

app.get('/', (req, res) => {
    res.send("hello").status(200);
});

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
    // console.log(req.body)
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
    
    notes.create(obj)
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

app.get("/getSkeletons", auth,async (req, res) => {
    const userName = req.user.userName;
    const note = await notes.find({ userName: userName },{"_id":1, "title":1});
    // console.log(note[0].title);
    var arr = Array();
    for (const notee of note){
        const tmp = [notee._id, notee.title];
        arr.push(tmp);
    }
    arr = arr.reverse();
    res.json(arr);
});

app.get("/api/v1/getNote/:noteId", auth, async (req, res) =>{
    // console.log(req.params.noteId);
    const noteId = req.params.noteId;
    var note = await notes.find({ _id : noteId });
    var note = note[0];
    // console.log(note);
    const arr = [note.img.data, note.note, note.date];
    res.send(arr).status(200);
});

app.delete("/api/v1/deleteNote/:noteId", auth, async (req, res) =>{
    const noteId = req.params.noteId;
    var note = await notes.find({ _id : noteId });
    var note = note[0];
    // console.log(req.user.userName, note.userName);
    if (req.user.userName === note.userName){
        await notes.deleteOne({ _id : noteId });
        res.send("deleted!!");
    }
});