"use client"
import { useEffect, useState } from "react";
import axios from "axios";

function Note (props) {
    // console.log(props)
    return (
        <div className=" select-none my-2 flex justify-center px-12">
            <div className="bg-gray-800 w-full rounded-lg hover:bg-gray-700 hover:scale-105 duration-300">
                <div>
                    <h1 className="text-xl font-bold text-gray-200 px-6 pt-4 ">{props.title}</h1>
                    <p className="text-md font-light text-gray-300 px-6 pb-4">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default function Notes (props) {
    const [notes,setNotes] = useState([]);
    const onload = async () => {
        const data = {
            email: props.email
        }
        const response = await axios.post("/api/downloads",data);
        const d = response.data;
        // console.log(d);
        setNotes(d);
        // console.log(notes);
    }
    useEffect(() => {
        onload();
    }, [])
    return (
        <div className="mt-6 pb-4">
            <h1 className="px-12 my-4 text-white font-bold text-2xl">Notes</h1>
            {notes.map((note) => (
                <Note key={note._id} title={note.title} content={note.content} />
            ))}
        </div>
    )
}