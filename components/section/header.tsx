import Link from "next/link"

export default function Header(){
    return(
        <header className="w-full pt-5 pb-5 flex items-center gap-10 justify-end border-b border-gray-200">
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Experience ]</Link>
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Compétences ]</Link>
            <Link className="hover:underline underline-offset-6 transition-all duration-200" href={''}>[ Contact ]</Link>
        </header>
    )
}