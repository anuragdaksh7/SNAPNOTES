require("dotenv").config();
const jwt = require("jsonwebtoken");
const Register = require("./registers.js");

const auth = async (req, res, next) => {
    try {
        // console.log("dfsoijfj")
        const token = req.cookies.jwt;
        // console.log(token)
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyUser);
        const user = await Register.findOne({_id:verifyUser._id})
        req.user = user;
        req.token = token;
        // console.log(user);
        next();
    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;