import Image from "next/image";
export default function Hero () {
    return(
        <div className="w-full h-screen">
            <div className="absolute w-full h-full">
                <Image src="/img/hero.jpg" alt="" width={1920} height={1280} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}  