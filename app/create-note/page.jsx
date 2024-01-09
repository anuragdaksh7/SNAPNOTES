import HeadComp from "@/components/HeadComp";
import CreatePost from "@/components/forms/CreatePost";
import { currentUser } from "@clerk/nextjs";
import { Redirect } from "next";

export default async function Page() {
    const user = await currentUser();
    if(!user ) return null;
    return (
        <div>
            <HeadComp />
            <CreatePost email={user.emailAddresses[0].emailAddress} />
        </div>
    )
}
