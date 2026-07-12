import Image from "next/image";
export default function Hero () {
    return(
        <div className="w-full h-screen">
            <div className="absolute z-10 w-full h-full border border-amber-200 sm:flex">
                <div className="hidden sm:flex w-full"></div>
                <div className="w-full h-full flex flex-col items-start justify-start text-white p-4 pt-34 lg:pt-52 xl:pl-40 xl:pt-40  2xl:pt-96">
                    <p className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl">Empowering Farmers, Sustaining Nature</p>
                    <p className="lg:text-xl xl:text-2xl 2xl:text-4xl">Promoting sustainable agriculture and organic farming in Maridi.</p>
                </div>
            </div>
            <div className="absolute z-20  bottom-0 p-5 text-black bg-white w-full" style={{
            clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 100%)"
            }}>
                <p className="font-bold text-xl mb-1">About Us</p>
                <p>Maridi Organics is dedicated to promoting sustainable 
                agriculture and organic farming to improve food security, 
                protect the environment, and uplift local communities. Our initiative, started by the Africano Mande Foundation, empowers farmers through training, organic seed distribution, and eco-friendly practices like composting and crop rotation.</p>
            </div>
            <div className="absolute z-0 w-full h-full">
                <Image src="/img/hero.jpg" alt="" width={1920} height={1280} className="w-full h-full object-cover"/>
            </div>
            
            
        </div>
    )
}  