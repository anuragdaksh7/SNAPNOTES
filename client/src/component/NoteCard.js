import { useState } from "react"

export const Note = (params) => {
    const [expand, setExpand] = useState(false);
    return <div className="px-4 text-white text-xl w-full mt-8 flex justify-between backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 hover:scale-105 duration-300 shadow-gray-700 shadow-sm bg-gray-600 rounded-lg py-2">
        <p>{params.title}</p>
        <span class="material-symbols-outlined select-none" onClick={(e)=>setExpand(!expand)}>
            {(expand)?"expand_less":"expand_more"}
        </span>
    </div>
}