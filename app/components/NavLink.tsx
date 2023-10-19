import Link from "next/link";

interface TNavLink{
    href: string,
    title: string
}

const NavLink = ({href, title}:TNavLink) => {
 return (
    <Link href={href} className='block py-2 pl-3 pr-4'>
        {title}
    </Link>
 );
};

export default NavLink;