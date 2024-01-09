import { UserButton } from "@clerk/nextjs";


export default async function HeadComp() {
    return (
        // <div>
        //     
        // </div>
        <nav className="rounded-b-md bg-gray-100 w-full py-2 pb-4 flex justify-between px-4 items-baseline ">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <a href="/"><p className=" text-2xl">SnapNotes</p></a>
            <div className="flex justify-between items-center">
                <a className="mx-2" href="https://github.com/anuragdaksh7/SNAPNOTES"><i className="fa fa-github"></i></a>
                <a className="mx-2" href="/about"><p className="text-gray-900 hover:text-blue-800 duration-300">About</p></a>
                <UserButton className="mx-2 mr-0" afterSignOutUrl="/" />
            </div>
            {/* <a href="/aboutZ"><p className="">About</p></a> */}
        </nav>
    )
}