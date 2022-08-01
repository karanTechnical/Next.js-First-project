import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <nav className='menu-bar'>
      <ul>
        <li><Link href='/home'>Home</Link></li>
      </ul>
      <ul>
        <li><Link href='/about'>About</Link></li>
      </ul>
      <ul>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
      <ul>
        <li><Link href='/blog'>Blog</Link></li>
      </ul>
      </nav>
    </>
  );
}

export default Navbar;
