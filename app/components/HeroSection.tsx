"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'



const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700'>
                        Hello, I&apos;m{""}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'A Computer Science Graduate',
                            2000,
                            'A Software Developer',
                            2000,
                            'Abul',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                    />
                </h1>
                <p className='text-[#ddd] text-base sm:text-lg lg:text-xl mb-6'>JFUI H UH HIU H UH UH U HI H IH IUH YUGSDF HUFI HIH</p>
                <div className=''>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-300 via-orange-600 to-orange-900 hover:bg-slate-200'>Hire Me</button> 
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-slate-400 hover:bg-slate-50 hover:text-white text-slate-300 mt-3'>
                        <span className='block bg-slate-900 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-red-950 w-500 h-400 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]'>
                    <Image src="/images/coder.webp" alt="hero-img" width={300} height={300} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection