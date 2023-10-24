import axios from "axios";
import { useState } from "react"

export const Note = (params) => {
    const BASE_URL = "http://localhost:5000/";
    const [expand, setExpand] = useState(false);

    const fetchContent = (id)=>{
        if (!expand){
            const q = BASE_URL+"api/v1/getNote/"+String(id);
            console.log(q);
            axios.get(q, { withCredentials: true })
            .then((response)=>{
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    return <div className="px-4 items-center text-white text-xl w-full mt-8 flex justify-between backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 duration-300 shadow-gray-700 shadow-sm bg-gray-600 rounded-lg py-2">
        <p>{params.title}</p>
        <span className="material-symbols-outlined select-none hover:scale-125 duration-300" onClick={(e)=>{setExpand(!expand);fetchContent(params.idd)}}>
            {(expand)?"expand_less":"expand_more"}
        </span>
    </div>
}