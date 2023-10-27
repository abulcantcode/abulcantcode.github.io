import React from "react";
import NavLink from "./NavLink";
import { TNavLinks } from "./NavBar";

interface TMenuOverlay {
  links: TNavLinks;
}

const MenuOverlay = ({ links }: TMenuOverlay) => {
  return (
    <ul className='flex flex-col py-4 items-center md:hidden'>
      {links.map(({ title, path }, index) => (
        <li
          key={index}
          className='py-3 text-gray-500 hover:text-black font-semibold'
        >
          <NavLink href={path} title={title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
