import Link from "next/link";
import { resolve } from "path";
export const metadata = {
    title: "About Us"
}
export default async function About() {
    await new Promise ((resolve) => {
        setTimeout(resolve, 5000);
    })
    return(
        <div className="text-blue-800 text-md font-Arial">
            <h1> This Is My About Page </h1>
        </div>
    )
}