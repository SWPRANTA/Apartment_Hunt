'use client'
import Image from 'next/image';
import Button from './button';

export default function Demo() {
  return (
    <div className="relative w-full max-w-full">
      {/* Large and Medium Screen Design */}
      <div className="hidden sm:block">
        <div>
          <img
            src="/house_background.png"
            alt="hero_background"
            className="w-full h-auto sm:h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center xl:text-[48px] md:text-[30px] xsm:text-[14px] font-bold font-montserrat">
          FIND YOUR HOUSE RENT
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-4">
          <input
            type="text"
            placeholder="Search...."
            className="p-2 rounded-md w-full sm:w-1/4 md:w-3/4 lg:w-2/3 xl:w-[536px] h-[50px]"
          />
          <button className='bg-[#275A53] text-[#FFFFFF] font-medium font-averia sm:w-[163px] md:w-[163px] h-[50px] py-[14px] px-[46px] rounded md:mb-[30px] md:mt-2 sm:mt-3 sm:mb-3 md:ml-2 lg:w-[163px] xl:w-[163px]'>
            Find Now
          </button>
        </div>
      </div>

      {/* Small Screen Design */}
      <div className="sm:hidden mb-[30px]">
        <div className="relative w-full h-[446px]">
          <img
            src="/house_background.png"
            alt="hero_background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center xl:text-[48px] md:text-[30px] xsm:text-[14px] font-bold font-montserrat flex flex-col items-center">
          <div>FIND YOUR HOUSE RENT</div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search...."
              className="p-2 rounded-md w-full sm:w-1/4 md:w-3/4 lg:w-2/3 xl:w-[536px] h-[50px]"
            />
            <button className="bg-[#275A53] text-[#FFFFFF] font-medium rounded font-averia w-full h-[50px] mt-2">
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}