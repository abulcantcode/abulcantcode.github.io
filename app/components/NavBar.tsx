"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export type TNavLinks = typeof navLinks;


const navLinks = [
    {
        title: "About",
        path: "#about"
    }, 
    {
        title: "Projects",
        path: "#projects"
    }, 
    {
        title: "Contact",
        path: "#contact"
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-80'>
            <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-3 md:px-10'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='text-white flex items-center px-3 py-2 border rounded border-white'>
                                <Bars3Icon className="h-5 w-5" />
                                
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='text-white flex items-center px-3 py-2 border rounded border-white'>
                                <XMarkIcon className="h-5 w-5" /> 
                                
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map(({title, path}, index) => (
                            <li key={index} className=' text-gray-400 hover:text-white'>
                                <NavLink href={path} title={title}/>
                            </li>  
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar