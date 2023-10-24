import axios from "axios";
import { useState } from "react";

export const Note = (params) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [expand, setExpand] = useState(false);
    const [deleted, setDelete] = useState(false);
    const [show, setShow] = useState(false);
    const [content, setContent] = useState([]);
    const [date, setDate] = useState("");
    // const [edit, setEdit]  = useState(false);

    const deleteElement = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const q = BASE_URL + "api/v1/deleteNote/" + String(id);
            axios
                .delete(q, { withCredentials: true })
                .then((response) => {
                    console.log(response.data);
                    setDelete(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const fetchContent = (id) => {
        if (!expand) {
            const q = BASE_URL + "api/v1/getNote/" + String(id);
            // console.log(q);
            axios
                .get(q, { withCredentials: true })
                .then((response) => {
                    // console.log(response.data[2]);
                    setContent(response.data);
                    const a = new Date(response.data[2]);
                    setDate(a.toLocaleString());
                })
                .catch((err) => {
                    console.log(err);
                });
            setShow(true);
        } else {
            setShow(false);
            // setContent({});
        }
    };

    return !deleted ? (
        <div className="px-4 mt-8 backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 duration-300 shadow-gray-700 shadow-sm bg-gray-600 rounded-lg py-2">
            <div className="items-center text-white text-xl w-full flex justify-between ">
                <p>{params.title}</p>
                <div>
                    {/* <span class="material-symbols-outlined font-md select-none hover:scale-125 duration-300 mx-1 "
                        onClick={(e)=>{
                            setExpand(true);
                            fetchContent(params.idd);

                        }}
                    >
                        edit
                    </span> */}
                    <span
                        className="material-symbols-outlined select-none hover:scale-125 duration-300 mx-1 "
                        onClick={(e) => {
                            setExpand(!expand);
                            fetchContent(params.idd);
                        }}
                    >
                        {expand ? "expand_less" : "expand_more"}
                    </span>
                    <span
                        className="material-symbols-outlined select-none hover:scale-125 duration-300 mx-1 "
                        onClick={(e) => {
                            deleteElement(params.idd);
                        }}
                    >
                        delete_forever
                    </span>
                </div>
            </div>
            <div>
                {
                    show ? (
                        <div className="w-full border-t-2 pt-2 mt-2 text-gray-300">
                            <div className="w-full flex">
                                <p className=" w-full text-white text-right">{date}</p>
                            </div>
                            <div className="block md:flex justify-between border-2">
                                <pre className="w-full border-2 p-2 overflow-auto bg-transparent" >{content[1]}</pre>
                                <img loading="lazy" className="h-auto md:h-80" src={content[0]} alt="" />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                    // (show)?console.log(content):null
                }
            </div>
        </div>
    ) : (
        <></>
    );
};
