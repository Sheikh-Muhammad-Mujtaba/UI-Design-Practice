"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='absolute right-0 w-full  h-[10%] lg:h-[102px] px-4 flex items-center justify-between '>
      {/* Logo */}
      <Image
        src={"/images/header-logo.png"}
        alt='logo'
        width={70}
        height={43.71}
        className='absolute w-[30px] lg:w-[70px] h-[25px] lg:h-[43.71px] left-[5%] lg:left-[135px] top-[15px] lg:top-[29.14px]'
      />

      {/* Desktop Navigation */}
      <nav className='absolute w-fit right-[5%] xl:left-[549px] sm:top-[10px] lg:top-[30px] max-xl:top-[44.69px] hidden md:flex'>
        <ul className="flex font-['Roboto'] text-[12px] uppercase text-[#333333] gap-[30px] lg:gap-[55px]">
          <li className='w-[68px] border-t-2 border-b-2 text-center border-transparent hover:border-[#333333] p-[3.89px]'>
            <Link href={'#'}>Main</Link>
          </li>
          <li className='w-[65px] border-t-2 border-b-2 text-center border-transparent hover:border-[#333333] p-[3.89px]'>
            <Link href={'#'}>Gallery</Link>
          </li>
          <li className='w-[76px] border-t-2 border-b-2 text-center border-transparent hover:border-[#333333] p-[3.89px]'>
            <Link href={'#'}>Projects</Link>
          </li>
          <li className='w-[123px] border-t-2 border-b-2 text-center border-transparent hover:border-[#333333] p-[3.89px]'>
            <Link href={'#'}>Certifications</Link>
          </li>
          <li className='w-[79px] border-t-2 border-b-2 text-center border-transparent hover:border-[#333333] p-[3.89px]'>
            <Link href={'#'}>Contacts</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#333333] focus:outline-none absolute right-[5%]"
        aria-label="Toggle menu"
      >
        {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-[50px] md:top-[102px] left-0 w-full bg-[#66656533] shadow-lg md:hidden ">
          <ul className="flex flex-col items-center py-4 space-y-3 font-['Roboto'] text-[12px] uppercase text-[#333333]">
            <li>
              <Link href={'#'} onClick={toggleMenu}>Main</Link>
            </li>
            <li>
              <Link href={'#'} onClick={toggleMenu}>Gallery</Link>
            </li>
            <li>
              <Link href={'#'} onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link href={'#'} onClick={toggleMenu}>Certifications</Link>
            </li>
            <li>
              <Link href={'#'} onClick={toggleMenu}>Contacts</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
