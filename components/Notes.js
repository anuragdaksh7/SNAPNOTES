"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";
function SkeletonNote () {
    return (
        <div className=" select-none my-2 flex justify-center px-12">
            <div className="bg-gray-800 w-full rounded-lg duration-300">
                <div>
                    <div className=" animate-pulse w-40 py-1 mx-6 mt-4 mb-1 rounded-full bg-[#787878]"></div>
                    <div className="flex">
                        <div className=" animate-pulse w-60 py-1 ml-6  mt-3 rounded-full bg-[#474747]"></div>
                        <div className=" animate-pulse w-80 py-1 mx-6  mt-3 rounded-full bg-[#474747]"></div>
                    </div>
                    <div className="flex">
                        <div className=" animate-pulse w-20 py-1 ml-6 mb-4  mt-2 rounded-full bg-[#474747]"></div>
                        <div className=" animate-pulse w-60 py-1 mx-6 mb-4  mt-2 rounded-full bg-[#474747]"></div>
                    </div>
                    {/* <div className=" animate-pulse w-[30rem] py-1 mx-6 mb-4 mt-2 rounded-full bg-[#474747]"></div> */}
                    {/* <p className="text-md font-light text-gray-300 px-6 pb-4">{props.content}</p> */}
                </div>
            </div>
        </div>
    )
}

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
    const [animationParent] = useAutoAnimate();
    const [notes,setNotes] = useState([]);
    const [loading,setLoading] = useState(false);
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
        setLoading(true);
    }, [])
    return (
        <div className="mt-6 pb-4">
            <h1 className="px-12 my-4 text-white font-bold text-2xl">Notes</h1>
            <div  ref={animationParent}>
            {
                (loading)?(
                    notes.map((note) => (
                    <Note key={note._id} title={note.title} content={note.content} />
                ))):(
                    // <>
                    //     <SkeletonNote />
                    //     <SkeletonNote />
                    //     <SkeletonNote />
                    //     <SkeletonNote />
                    //     <SkeletonNote />
                    // </>
                    [1,2,3,4,5].map((val, index) => (
                        <SkeletonNote key={index} />
                    ) )
                )
            }
            </div>
        </div>
    )
}