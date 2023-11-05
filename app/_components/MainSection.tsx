"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

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
        <div className='rounded-full overflow-hidden grayscale'>
          <Image
            src='/images/abul.jpg'
            alt='me-img'
            width={300}
            height={300}
            style={{ width: "auto" }}
          />
        </div>
      </div>
      <div className='flex justify-center mt-8 mx-16'>
        <a
          href='mailto: abulchwdhury@gmail.com'
          className='flex items-center border-2 rounded-full p-4 text-green-700 dark:text-orange-400 font-semibold border-green-800 dark:border-orange-400'
        >
          <EnvelopeIcon className='h-6 w-6 mr-2' /> Contact Me
        </a>
      </div>
      <div className='flex justify-center mt-6 md:mt-12 mx-16 text-center mb-12'>
        <div className='flex flex-col'>
          <p className='max-w-screen-lg text-black dark:text-white font-semibold text-lg'>
            I&apos;m a Computer Science graduate with a passion for technology
            and a love for cars. I find joy in working on cars, solving problems
            under the hood, and ensuring they run smoothly. When I&apos;m not
            tinkering with engines, you&apos;ll often find me glued to football
            matches, enjoying the thrill of the game.
          </p>
          <br />
          <p className='max-w-screen-lg text-black dark:text-white font-semibold text-lg'>
            My journey in the world of coding started when I was just thirteen,
            and it has been an exciting ride ever since. I thrive on tackling
            challenging problems, continuously expanding my knowledge, and
            mastering various programming languages. This love for
            problem-solving and my genuine enthusiasm for software development
            drive me to excel in every project I undertake.
          </p>
          <br />
          <p className='max-w-screen-lg text-black dark:text-white font-semibold text-lg'>
            I&apos;m not just a computer enthusiast; I&apos;m a highly motivated
            and results-driven individual, ready to make a difference in the
            tech world!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
