"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="fixed z-60 bg-[#AD6903]/31 w-full h-auto">
            <div className="w-full h-auto flex items-center justify-between pr-2">
                <Image src="/img/logo.jpeg" alt="" width={2481} height={1792} className="w-30 h-auto"/>
                <Menu 
                    className="text-white cursor-pointer" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            {isMenuOpen && (
                <div className="w-full h-auto p-2 flex flex-col items-center gap-y-1">
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
            )}
        </div>
    )
}