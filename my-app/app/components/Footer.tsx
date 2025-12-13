'use client'
import {useRouter} from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="w-full p-4 bg-surface/50 shadow-md mt-auto">
            <div className="container mx-auto text-center text-white">
                <div className="flex flex-wrap  justify-center items-center mb-4 md:gap-4">
                   <div onClick={() => router.push('/')} className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer">O Wydarzeniu</div>
                        <div onClick={() => router.push('/')} className="text-white mx-2 text-md my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Organizatorzy</div>
                        <div onClick={() => router.push('/regulamin')} className="text-white mx-2 text-md my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Regulamin</div>
                </div>
                <hr className="text-primary"/>
                <br />
                &copy; {new Date().getFullYear()} Idea2Impact. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}