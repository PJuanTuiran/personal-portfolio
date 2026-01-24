import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Proyects from "@/sections/Proyects";
import Skills from "@/sections/Skills";



export default function Home() {
  return (
    <div className="relative  dark:text-white h-full  font-sans ">
      <BackgroundRippleEffect />
     
      <Header/>
      <main className="w-[95%] max-w-[1200px]  mx-auto  py-32 ">
        <Skills />
        <Proyects />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
