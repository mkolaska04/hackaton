'use client'
import { useState } from "react";
import {useRouter} from "next/navigation";
import Link from "next/dist/client/link";

export default function Navigation() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }


    return (
        <nav className="w-full p-4 bg-surface/50 shadow-md fixed top-0 left-0 z-50">
            <div className=" mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl font-sans">Idea2Impact    
                         {/* <div onClick={() => router.push('/var2')} className="inline text-white mx-2 text-sm hover:text-secondary font-code hover:cursor-pointer">wariant drugi HomePage</div> */}
                         </div>       
                <div className="hidden md:flex">
                    <div onClick={() => router.push('/')}  className="text-white mx-2 text-xl hover:text-secondary font-code hover:cursor-pointer">O Wydarzeniu</div>
                    {/* <div href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">Organizatorzy</div> */}
            
                    <Link href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">Zapisy</Link>
                    <div onClick={() => router.push('/regulamin')} className="text-white mx-2 text-xl hover:text-secondary font-code hover:cursor-pointer">Regulamin</div>
                </div>
                <div className="md:hidden flex items-center">

                    <button onClick={toggleDrawer}>{isDrawerOpen ? 'Close' : 'Menu'}</button>
                    <div className={`absolute top-16 right-0 bg-background/80 shadow-lg rounded-md p-4 flex flex-col ${isDrawerOpen ? 'block' : 'hidden'}`}>
                        <div onClick={() => router.push('/')} className="text-white mx-2 text-xl my-2 hover:text-secondary hover:cursor-pointer hover:cursor-pointer">O Wydarzeniu</div>
                        <div onClick={() => router.push('/')} className="text-white mx-2 text-xl my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Organizatorzy</div>
                        {/* <div onClick={() => router.push('/')} className="text-white mx-2 text-xl my-2 hover:text-secondary font-code hover:cursor-pointer">Zapisy</div> */}
                        <div onClick={() => router.push('/regulamin')} className="text-white mx-2 text-xl my-2 hover:text-secondary font-code hover:cursor-pointer hover:cursor-pointer">Regulamin</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}