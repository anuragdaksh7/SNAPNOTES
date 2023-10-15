import { useState } from "react"



export const LoginPage = () => {

    const inputStyle = "outline-none w-full h-8 text-lg text-gray-700 border-gray-300 ps-1  border-b-2 font-semibold mb-2 text-gray-600  bg-gray-200 mb-4";
    // console.log(location.pathname);
    // if (location.pathname === "/login"){
        
    // }
    const [vis, setVis] = useState("password");
    const handleSubmit = (event) => {
        
        event.preventDefault()
    }
    return (
        <div className="flex justify-center ">
            <div className="shadow-gray-200 mt-60 bg-gray-200 shadow-md border-black px-4 sm:px-8 py-4 rounded-xl">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <form >
                    <div>
                        <p className="text-gray-800 text-2xl font-bold mb-4">Sign in to SnapNotes</p>
                        <input className={inputStyle} type="email" placeholder="Email..." name="email"  />
                    </div>
                    
                    <div>
                        <span className="flex">
                        <input className={inputStyle} type={ vis } placeholder="Password..." name="password"  />
                        <div className="inline " onClick={ (e)=>{
                            (vis==="password")?setVis("text"):setVis("password")
                        } }><span className="flex select-none justify-center material-symbols-outlined cursor-pointer">{ (vis==="password")?"visibility":"visibility_off" }</span></div>
                        </span>
                    </div>
                    <button className="mt-2 w-full bg-gray-700 py-2 rounded-xl text-white font-bold" onClick={handleSubmit} type="submit">LogIn</button>
                    <p className="text-xs mt-2 font-extralight">New to SnapNotes? <a className="text-blue-700" href="/signup">SignUp</a></p>
                </form>
            </div>
        </div>
    )
}