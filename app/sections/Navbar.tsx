"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div>
            {/*Mobile & Tablet Navbar */}
            <div className=" fixed lg:hidden z-60 bg-[#AD6903]/31 w-full h-auto">
            <div className="w-full h-auto flex items-center justify-between pr-2">
                <Image src="/img/logo.jpeg" alt="" width={2481} height={1792} className="w-30 h-auto"/>
                <Menu 
                    className="text-white cursor-pointer" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center gap-y-1 ${
                    isMenuOpen ? "max-h-[500px] opacity-100 translate-y-0 p-2" : "max-h-0 opacity-0 -translate-y-2"
                }`}
            >
                <button className="w-full p-1 text-white text-base border border-white rounded-[10px]">
                    <span>Home</span>
                </button>
                <button className="w-full p-1 text-white text-base border border-white rounded-[10px]">
                    <span>About Us</span>
                </button>
                <button className="w-full p-1 text-white text-base border border-white rounded-[10px]">
                    <span>Products</span>
                </button>
                <button className="w-full p-1 text-white text-base border border-white rounded-[10px]">
                    <span>Initiatives</span>
                </button>
                <button className="w-full p-1 text-white text-base border border-white rounded-[10px]">
                    <span>Contact Us</span>
                </button>

                <div className="w-full h-auto flex flex-col items-center gap-y-1 mt-3">
                    <button className="w-full p-1 text-white text-base font-bold bg-[#A3B310]  rounded-[10px]">
                        <span>Sign Up</span>
                    </button>
                    <button className="w-full p-1 text-white text-base font-bold bg-[#A3B310]  rounded-[10px]">
                        <span>Log In</span>
                    </button>
                </div>
            </div>
        </div>

        {/*Desktop Navbar */}
        <div className="hidden lg:flex fixed z-60 bg-[#AD6903]/31 w-full h-auto">
        <div className="w-full h-auto flex items-center">
                <Image src="/img/logo.jpeg" alt="" width={2481} height={1792} className="w-30 h-auto"/>
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-end w-4xl xl:w-7xl gap-x-10">
                    <div className="flex items-center justify-between gap-10 xl:gap-20">
                        <button className="p-1 text-white text-base xl:text-2xl hover:text-[#A3B310] cursor-pointer transition-all duration-300 ease-in-out">
                            <span>Home</span>
                        </button>
                        <button className="p-1 text-white text-base xl:text-2xl hover:text-[#A3B310] cursor-pointer transition-all duration-300 ease-in-out">
                            <span>About Us</span>
                        </button>
                        <button className="p-1 text-white text-base xl:text-2xl hover:text-[#A3B310] cursor-pointer transition-all duration-300 ease-in-out">
                            <span>Products</span>
                        </button>
                        <button className="p-1 text-white text-base xl:text-2xl hover:text-[#A3B310] cursor-pointer transition-all duration-300 ease-in-out">
                            <span>Initiatives</span>
                        </button>
                        <button className="p-1 text-white text-base xl:text-2xl hover:text-[#A3B310] cursor-pointer transition-all duration-300 ease-in-out">
                            <span>Contact Us</span>
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-1/4 gap-2">
                        <button className="px-4 py-2 text-white text-base xl:text-xl font-bold bg-[#A3B310] hover:bg-white hover:text-[#A3B310] cursor-pointer rounded-[10px] transition-all duration-300 ease-in-out">
                            <span>Sign Up</span>
                        </button>
                        <button className="px-4 py-2 text-white text-base xl:text-xl font-bold bg-[#A3B310] hover:bg-white hover:text-[#A3B310] cursor-pointer rounded-[10px] transition-all duration-300 ease-in-out">
                            <span>Log In</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        

        </div>
        
    )
}