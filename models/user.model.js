import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
    title: String,
    content: String
})

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note",
        }
    ]
})

export const Register = new mongoose.model("NoteUser", UserSchema);
export const Note = new mongoose.model("Note", PostSchema);