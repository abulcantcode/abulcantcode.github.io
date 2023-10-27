"use client";
import React, { useState } from "react";
import Image from "next/image";
import DayNight from "./DayNight";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

export type TNavLinks = typeof navLinks;

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={classNames(
        "fixed top-0 left-0 right-0 z-10 bg-[#e6e6dd] bg-opacity-80 rounded-b-3xl overflow-hidden",
        "dark:bg-zinc-700 dark:bg-opacity-80",
        "md:max-w-[70%] md:mx-auto md:mt-6 md:rounded-full md:bg-opacity-90",
        "xl:max-w-[60%] xl:mx-auto xl:mt-8"
      )}
    >
      <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-3 md:px-10'>
        <div className='hidden md:block dark:invert'>
          <Image
            src='/images/abul.png'
            alt='logo-img'
            width={55}
            height={55}
            style={{ width: "auto" }}
          />
        </div>
        <div className='block md:hidden ml-6 dark:invert'>
          <Image
            src='/images/a.png'
            alt='logo-img'
            width={40}
            height={40}
            style={{ width: "auto" }}
          />
        </div>
        <div className='mobile-menu block md:hidden mx-auto'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='text-black dark:text-[#b3b3a5] flex items-center'
            >
              <Bars3Icon className='h-8 w-8' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='text-black dark:text-[#b3b3a5] flex items-center'
            >
              <XMarkIcon className='h-8 w-8' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto mx-auto' id='navbar'>
          <ul className='flex p-2 md:p-0 md:flex-row md:space-x-3 lg:space-x-10 xl:space-x-12 mt-0 items-center'>
            {navLinks.map(({ title, path }, index) => (
              <li
                key={index}
                className=' text-gray-500 hover:text-black dark:text-[#b3b3a5] dark:hover:text-[#e6e6dd] font-semibold'
              >
                <NavLink href={path} title={title} />
              </li>
            ))}
          </ul>
        </div>
        <div className='mr-7 md:mr-2'>
          <DayNight />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
