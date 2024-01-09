import { Register, Note } from "@/models/user.model";

export async function POST(request) {
    const data = await request.json();
    const email = data.email;
    try{
        const user = await Register.findOne({ email: email });
        const notes = user.notes;
        const Ar = Array();
        // console.log(notes);
        for (let i  = 0; i < notes.length; i++) {
            const note = await Note.findOne({ _id: notes[i] });
            Ar.push(note);
        }
        Ar.reverse();
        return Response.json(Ar);
        // return Response.json({"success": true})
    } catch(error) {
        return Response.json([]);
    }
}