export const LandingPage = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-2 sm:mx-0 w-full sm:w-2/3 bg-gray-900 p-8 mt-12 rounded-xl hover:bg-gray-800 hover:duration-300 duration-300 hover:scale-105 
            shadow-xl ">
                <div className="border-b-2 pb-4 border-white">
                    <h1 className="text-gray-200 font-bold text-xl sm:text-4xl text-center mb-4">Effortless Note-Taking, Simplified:</h1>
                    <h1 className="text-gray-200 text-lg sm:text-2xl text-center">Snap Notes - Your Ultimate Digital Notebook</h1>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-center text-gray-300 text-sm mb-4">Get all your notes synced across your all devices</p>
                    <a className="bg-blue-600 hover:bg-blue-700 duration-300 py-2 px-4 text-white rounded-lg text-center" href="/signup">Sign Up Now</a>
                    <p className="text-white mt-4">Already a user? <a className="text-blue-600" href="/login">Login</a></p>
                </div>
            </div>
        </div>
    )
}