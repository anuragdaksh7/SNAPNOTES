require('dotenv').config();
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    note: {
        type: String,
        required: true,
        unique: true
    },
    img: {
		data: String,
		contentType: String
	},
    date: {
        type: String,
        required: true
    }
})

const Images = mongoose.model('Image', imageSchema);

module.exports = Images;