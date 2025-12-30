'use client'
import {useRouter} from "next/navigation";
import Link from "next/dist/client/link";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="w-full p-4 bg-surface shadow-md mt-8">
            <div className="container mx-auto text-center text-white">
                <div className="flex flex-wrap  justify-center items-center mb-4 md:gap-4">
                   <div onClick={() => router.push('/')} className="text-white mx-2 text-md my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer">O Wydarzeniu</div>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScCTLeXWdAGKHNl0AYy7nWMa6E9Syt_DUJN2kPy_9hn0nZ3fQ/viewform?usp=sharing&ouid=110319299113867414103" className="text-white mx-2 text-md my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Zapisy</Link>
                        <div onClick={() => router.push('/zasady')} className="text-white mx-2 text-md my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Zasady</div>
                </div>
                <hr className="text-primary"/>
                <br />
                &copy; {new Date().getFullYear()} Idea2Impact. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}