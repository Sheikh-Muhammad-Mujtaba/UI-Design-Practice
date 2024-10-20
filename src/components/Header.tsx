import React from 'react'
import Image from "next/image";


function Header() {
  return (
    <div className='w-[100%] h-[102px] '>
        <Image src={"/images/header-logo.png"} alt='logo' width={70} height={43.71}  className='absolute w-[70px] h-[43.71px] left-[135px] top-[29.14px]' />
<div className='absolute w-[40%]  left-[38.12%] top-[44.69px]'>
<ol className="flex justify-between font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase text-[#333333] ">
    <li className='border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1'>
    Main
    </li>
    <li className='border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1'>
    GALLERY
    </li>
    <li className='border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1'>
    PROJECTS
    </li>
    <li className='border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1'>
    CERTIFICATIONS
    </li>
    <li className='border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1'>
    COntacts
    </li>
</ol>
</div>
    </div>
  )
}

export default Header
