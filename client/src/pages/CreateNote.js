import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const NoteConstruct = () => {
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();
        const dt = new Date();
        const data = {
            title: title,
            note: note,
            img: img,
            date: dt
        }
        axios.post(BASE_URL + "postit", data, { withCredentials: true })
            .then(response => {
                if (response.data === "Posted") {
                    navigate('/home');
                }
            }).catch((error) => {
                console.log(error)
            });

    }

    const cnvB64 = (event) => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setImg(reader.result);
        }
    }

    return (
        <div className="flex justify-center mt-40 text-sm sm:text-xl ">
            <form className="bg-white-400 rounded-xl border-2 border-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 px-6 py-4">
                <div>
                    <input className="w-full bg-transparent outline-none text-white my-2 underline-offset-4 underline" type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <textarea className="w-full bg-transparent outline-none text-white my-2 border-[1px] border-gray-700 text-md p-2" rows="4" type="text" placeholder="Note..." value={note} onChange={(e) => setNote(e.target.value)} />
                </div>
                <div className="">
                    <input className=" w-full my-2 text-lg " onChange={cnvB64} type="file" placeholder="Title..." />
                </div>
                <div>
                    <button onClick={handleSubmit} className="w-full bg-gray-500 my-2 py-1 rounded-xl " type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}