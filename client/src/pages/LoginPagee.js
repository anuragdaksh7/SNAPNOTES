import { useState } from "react"
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

const BASE = "https://snapnotes-fddw.onrender.com/";


export const LoginPage = () => {
    // console.log(process.env.REACT_APP_BASE_URL)
    const navigate = useNavigate();

    const inputStyle = "outline-none w-full h-8 text-lg text-gray-700 border-gray-300 ps-1  border-b-2 font-semibold mb-2 text-gray-600  bg-gray-200 mb-4";
    // console.log(location.pathname);
    // if (location.pathname === "/login"){
        
    // }

    const [vis, setVis] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);
    const tmp = "text-xs text-red-600 hidden";
    const tmp2 = "text-xs text-red-600 flex";
    const handleSubmit = (event) => {
        console.log(valid)
        event.preventDefault();
        const data = {
            email: email,
            password: password
        }
        axios.post(BASE+"login",data,{ withCredentials: true })
        .then(response => {
            if (response.data === "done"){
                // console.log(document.cookie)
                navigate('/home');
            }
            setValid(false);
        }).catch((error) => {
            // console.error('Error posting data', error);
            setValid(false);
          // Handle errors
        });

    }
    return (
        <div className="flex justify-center ">
            <div className="shadow-gray-200 mt-40 bg-gray-200 shadow-md border-black px-4 sm:px-8 py-4 rounded-xl">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <form >
                    <div>
                        <p className="text-gray-800 text-2xl font-bold mb-4">Sign in to SnapNotes</p>
                        <input className={inputStyle} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email..." name="email"  />
                    </div>
                    
                    <div>
                        <span className="flex">
                        <input className={inputStyle} value={password} onChange={(e)=>setPassword(e.target.value)} type={ vis } placeholder="Password..." name="password"  />
                        <div className="inline " onClick={ (e)=>{
                            (vis==="password")?setVis("text"):setVis("password")
                        } }><span className="flex select-none justify-center material-symbols-outlined cursor-pointer">{ (vis==="password")?"visibility":"visibility_off" }</span></div>
                        </span>
                    </div>
                    <button className="mt-2 w-full bg-gray-700 py-2 rounded-xl text-white font-bold" onClick={handleSubmit} type="submit">LogIn</button>
                    <p className="text-xs mt-2 font-extralight">New to SnapNotes? <a className="text-blue-700" href="/signup">SignUp</a></p>
                    <p className={(valid)?tmp:tmp2}>Invalid credentials</p>
                </form>
            </div>
        </div>
    )
}