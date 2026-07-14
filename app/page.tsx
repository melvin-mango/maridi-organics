import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Image from 'next/image'
export default function Home() {
  return (
    <div className="bg-white w-full h-auto">
      <Navbar/>
      <Hero/>
    </div>
  );
}
