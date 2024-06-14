import HeadComp from "@/components/HeadComp";
import Notes from "@/components/Notes";
import { currentUser } from '@clerk/nextjs';
import Link from "next/link";

export default async function home() {
    const user = await currentUser();
    // console.log(user.emailAddresses[0].emailAddress);
    return (
        <div>
            {/* <p>Hi {user.firstName}</p> */}
            <div className="flex items-center justify-between px-12 mt-8">
                <p
                    className=" bg-blue-500 px-6 py-4 rounded-lg text-xl font-bold text-gray-100 select-none"
                >Hi {user.firstName}</p>
                <Link
                    href="/create-note"
                    className=" bg-blue-500 px-6 py-4 rounded-lg text-xl font-bold text-gray-100 select-none"
                >Create Note</Link>
            </div>
            <Notes email = {user.emailAddresses[0].emailAddress}/>
        </div>
    )
}