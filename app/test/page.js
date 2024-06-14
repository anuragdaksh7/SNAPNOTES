import Link from 'next/link'
import { currentUser } from '@clerk/nextjs';
import HeadComp from '@/components/HeadComp';

export default async function Home() {
    const user = await currentUser();
    if (!user) {
        return (
            <div>
                <div className="flex justify-center">
                    <div className="mx-2 sm:mx-0 w-full sm:w-2/3 backdrop-blur-md bg-gradient-to-b from-[#00000011] to-[#ffffff11] p-8 mt-12 rounded-xl  text-black hover:duration-300 duration-300 hover:scale-105 
            shadow-xl ">
                        <div className="border-b-2 pb-4 border-white">
                            <h1 className="text-gray-800 font-bold text-xl sm:text-4xl text-center mb-4">Effortless Note-Taking, Simplified:</h1>
                            <h1 className="text-gray-800 text-lg sm:text-2xl text-center">Snap Notes - Your Ultimate Digital Notebook</h1>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-center text-gray-600 text-sm mb-4">Get all your notes synced across your all devices</p>
                            <Link className="bg-blue-600 hover:bg-blue-700 duration-300 py-2 px-4 text-white rounded-lg text-center" href="/sign-up">Sign Up Now</Link>
                            <p className="text-black mt-4">Already a user? <Link className="text-blue-600" href="/sign-in">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="flex justify-center">
                    <div className="mx-2 sm:mx-0 w-full sm:w-2/3 backdrop-blur-md bg-gradient-to-b from-[#00000011] to-[#ffffff11] p-8 mt-12 rounded-xl text-black hover:duration-300 duration-300 hover:scale-105 shadow-xl">
                        <div className="border-b-2 pb-4 border-white">
                            <h1 className="text-gray-800 font-bold text-xl sm:text-4xl text-center mb-4">Effortless Note-Taking, Simplified:</h1>
                            <h1 className="text-gray-800 text-lg sm:text-2xl text-center">Snap Notes - Your Ultimate Digital Notebook</h1>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-center text-gray-600 text-sm mb-4">Get all your notes synced across your all devices</p>
                            <Link className="bg-blue-600 hover:bg-blue-700 duration-300 py-2 px-4 text-white rounded-lg text-center" href="/home">Dashboard</Link>
                            {/* <p className="text-white mt-4">Already a user? <Link className="text-blue-600" href="/sign-in">Login</Link></p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
