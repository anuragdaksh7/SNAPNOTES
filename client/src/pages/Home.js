import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Note } from "../component/NoteCard";



export const Home = () => {
    const BASE_URL = "http://localhost:5000/";
    const navigate = useNavigate()

    const [userName, setUserName] = useState("");

    axios.get(BASE_URL+"getUser",{ withCredentials: true })
    .then(response => {
        // console.log(response.data);
        setUserName(response.data.toUpperCase());
    }).catch((error) => {
        navigate('/login');
        // Handle errors
    });
    // console.log(userName)
    return <>
        <div className="mx-4   p-2 mt-4">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="flex justify-between items-baseline border-b-2 rounded-lg px-4  pb-4 ">
                <div className="flex items-baseline hover:scale-105 duration-200 hover:bg-blue-400 bg-blue-500 mt-8 px-4 py-2 text-4xl text-white rounded-lg"><p className="text-2xl mr-2">Hi</p> {userName}!</div>
                <div className="flex items-baseline ml-4">
                    <button className="bg-blue-500 px-4 py-2 text-2xl text-gray-300 rounded-lg hover:bg-blue-700 duration-200 hover:scale-105">Take a note?</button>
                </div>
            </div>
            <div>
                <Note title="something" idd="" />
                <Note title="something" idd="" />
                <Note title="something" idd="" />
                <Note title="something" idd="" />
            </div>
        </div>
    </>
}