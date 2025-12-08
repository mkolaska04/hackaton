'use client'
import { useState } from "react";

export default function Navigation() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }


    return (
        <nav className="w-full p-4 bg-background/50 shadow-md fixed top-0 left-0 z-50">
            <div className=" mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl font-sans">Idea2Impact</div>
                <div className="hidden md:flex">
                    <a href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">O Wydarzeniu</a>
                    <a href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">Organizatorzy</a>
                    <a href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">Zapisy</a>
                    <a href="#" className="text-white mx-2 text-xl hover:text-secondary font-code">Regulamin</a>
                </div>
                <div className="md:hidden flex items-center">

                    <button onClick={toggleDrawer}>{isDrawerOpen ? 'Close' : 'Menu'}</button>
                    <div className={`absolute top-16 right-0 bg-background/80 shadow-lg rounded-md p-4 flex flex-col ${isDrawerOpen ? 'block' : 'hidden'}`}>
                        <a href="#" className="text-white mx-2 text-xl my-2 hover:text-secondary">O Wydarzeniu</a>
                        <a href="#" className="text-white mx-2 text-xl my-2 hover:text-secondary font-code">Organizatorzy</a>
                        <a href="#" className="text-white mx-2 text-xl my-2 hover:text-secondary font-code">Zapisy</a>
                        <a href="#" className="text-white mx-2 text-xl my-2 hover:text-secondary font-code">Regulamin</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}