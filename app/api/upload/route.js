import { Register, Note } from "@/models/user.model";



export async function POST(request) {
    const data = await request.json();
    // console.log(data);
    const title = data.title;
    const content = data.content;
    const email = data.email;
    const note = new Note({
        title: title,
        content: content
    });
    await note.save();
    try {
        const user = await Register.findOne({ email: email });
        user.notes.push(note);
        await user.save();
    } catch (error) {
        const user = new Register({
            email: email,
            notes: [note]
        })
        await user.save();
    }

    return Response.json({"success": true})
}

