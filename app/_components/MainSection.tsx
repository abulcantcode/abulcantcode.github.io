"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const MainSection = () => {
  return (
    <section className=''>
      <div className='mt-24 md:mt-36 flex justify-center'>
        <h1 className='text-green-900 dark:text-orange-400 mb-4 font-extrabold text-center'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r dark:from-orange-400 dark:to-[#acae9e] from-green-950 to-[#acae9e] text-3xl lg:text-5xl'>
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <div className='text-5xl lg:text-7xl px-auto'>
            <TypeAnimation
              sequence={[
                "A Computer Science Graduate",
                2000,
                "A Software Developer",
                2000,
                "Abul",
                2000,
              ]}
              wrapper='span'
              speed={50}
              repeat={0}
            />
          </div>
        </h1>
      </div>
      <div className='flex justify-center mt-4 mx-16'>
        <div className='rounded-2xl overflow-hidden'>
          <Image
            src='/images/abul.jpg'
            alt='hero-img'
            width={300}
            height={300}
            style={{ width: "auto" }}
          />
        </div>
      </div>
      <div className='flex justify-center mt-6 md:mt-12 mx-16 text-center mb-12'>
        <p className='max-w-screen-lg text-black dark:text-white font-semibold text-lg'>
          I am a highly motivated and results-driven Computer Science graduate.
          My educational journey has equipped me with a strong foundation in
          software development. I have a genuine passion for tackling complex
          problems and continuously expanding my knowledge. My coding journey,
          which began at the age of thirteen, has allowed me to master multiple
          languages, enabling me to adapt seamlessly to various programming
          environments.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
