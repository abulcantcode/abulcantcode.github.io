import Link from "next/link";

interface TNavLink {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: TNavLink) => {
  return (
    <Link href={href} className='block pl-2 pr-3'>
      {title}
    </Link>
  );
};

export default NavLink;
