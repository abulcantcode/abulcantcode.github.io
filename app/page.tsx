import Image from 'next/image'
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900">
      <NavBar/>
      <div className='container mx-auto md:mt-12 md:pt-12 mt-10 pt-10 px-12 '>
        <HeroSection/>
        <AboutSection/>
      </div>
    </main>
  )
}
