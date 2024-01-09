
import mongoose from "mongoose";


const URL = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);
mongoose.connect(URL, { 
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection succsessfull");
}).catch((e) => {
    console.log(e);
});
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String
})

const UserSchema = new Schema({
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
// console.log(mongoose.models)

export const Register = mongoose.models['NoteUser'] || mongoose.model("NoteUser", UserSchema);
export const Note = mongoose.models['Note'] || mongoose.model("Note", PostSchema);