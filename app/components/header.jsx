"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import Button from './button';
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import Link from 'next/link';


const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "About",
        path: "/about"
    },
    {
        id: 3,
        title: "Service",
        path: "/service"
    },
    {
        id: 4,
        title: "Concerns",
        path: "/concerns"
    },
    {
        id: 5,
        title: "Event",
        path: "/event"
    },
    {
        id: 6,
        title: "Contact",
        path: "/contact"
    },
]
const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='border-b'>
            <div className='container flex items-center justify-between pt-8 pb-[22px]'>
                <Image src='/logo.svg' height={150} width={80} alt='house-logo' />
                {
                    !toggle ? <IoMdMenu onClick={() => setToggle(!toggle)} className='text-[28px] md:hidden block cursor-pointer' /> :
                        <GrClose onClick={() => setToggle(!toggle)} className='text-[20px] md:hidden block cursor-pointer' />

                }
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-white md:static md:z-auto left-0 w-full md:w-auto md:pl-0 
                lg:gap-x-10 gap-x-5 l-0 pl-9 ${toggle ? 'flex items-center flex-col gap-4 top-20 z-10' : 'hidden'}`}>
                {/* <ul className={`absolute md:flex lg:gap-x-10 gap-x-5 l-0 pl-9 transition-all duration-500 ease-in ${toggle ? 'block' : 'hidden'}`}> */}
                    {navItems?.map((item) => (
                        <li key={item.id} className='text-16 font-medium'><Link href={item?.path}>{item?.title}</Link></li>
                    ))}
                    <li><Button to="/login" title="Login" classes="font-montserrat px-[29px] rounded-lg py-3" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;