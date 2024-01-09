"use client"
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function CreatePost(props) {
    const router = useRouter()

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            content: content,
            email: props.email
        }
        // console.log(data)
        const response = await axios.post("/api/upload",data);
        const d = response.data;
        // console.log(d);
        router.push('/home')

    }
    return (
        <div className="flex justify-center items-center mt-28">
            <form className="flex flex-col w-1/2 gap-2 bg-gray-800 rounded-xl px-12 pt-4 pb-8">
                <p className="text-white text-xl font-semibold">Create New Post</p>
                <input
                    type="text"
                    placeholder="Enter Title"
                    className="bg-gray-800 outline-none text-white border-l border-b rounded-bl-lg ps-2 py-1"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="Content"
                    className="bg-gray-800 outline-none text-white border-l border-b rounded-bl-lg ps-2 py-1"
                    rows={10}
                    value={content}
                    onChange={e=>setContent(e.target.value)}
                />
                <button className="bg-white py-2 rounded-md font-bold" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}