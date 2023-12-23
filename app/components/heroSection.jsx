import Image from 'next/image';
import React from 'react';
import Button from './button';

const HeroSection = ({ isSearchBox, title }) => {
    return (
        <div id="heroSection" className="relative w-full max-w-full">
            <Image src="/house_background.png" layout="responsive" width={1441} height={554} alt="hero_background" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white xl:text-[48px] md:text-[30px] xsm:text-[14px] font-bold font-monserrat">
                {title}
            </div>
            {
                isSearchBox?
                <div className="absolute top-2/3 left-1/2 flex flex-col items-center justify-center text-center transform -translate-x-1/2 -translate-y-1/2 lg:flex-row md:flex-col">
                    <input
                        type="text"
                        placeholder="Search...."
                        className="p-2 m-2 rounded-md lg:w-[536px] lg:h-[50px] md:w-[500px]"
                    />
                    <Button
                        to="/"
                        title="Find Now"
                        classes="w-full lg:w-auto lg:px-4 h-[50px] rounded-md py-[14px] mt-2 lg:mt-0"
                    />
                </div> : <></>
            }


        </div>
    );
};

export default HeroSection;