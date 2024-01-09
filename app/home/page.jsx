import HeadComp from "@/components/HeadComp";
import { currentUser } from '@clerk/nextjs';

export default async function home() {
    const user = await currentUser();
    return (
        <div>
            <HeadComp />
            <p>Hi {user.firstName}</p>
        </div>
    )
}