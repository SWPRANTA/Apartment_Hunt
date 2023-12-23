import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='pb-16 bg-[#275A53] mt-[47px]'>
            <div className='container grid md:grid-cols-4 sm:grid-cols-2 sm:place-content-center xsm:grid-cols-1 xsm:place-content-center'>
                {/* Address part */}
                <div className='flex flex-row pt-[77px] sm:text-left items-start xsm:text-center'>
                    <Image src="/images/location2.svg" width={24} height={24} alt="our-location" className='pr-[3px]' />
                    <div className='font-poppins font-medium text-white w-[346px] h-[96px]'>
                        <p>H#340 (4th Floor), Road #24,</p>
                        <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                        <p>Phone: 018XXXXXXXX</p>
                        <p>E-mail: info@company.com</p>
                    </div>
                </div>

                {/* Company part */}
                <div className='flex flex-col pt-[58px] md:ml-[100px] text-white font-poppins mr-16 sm:text-left xsm:text-center'>
                    <p className='font-semibold text-xl mb-[14px]'>Company</p>
                    <Link href="/">About</Link>
                    <Link href="/">Site Map</Link>
                    <Link href="/">Support Center</Link>
                    <Link href="/">Terms Conditions</Link>
                    <Link href="/">Submit Listing</Link>
                </div>

                {/* Quick links part */}
                <div className='flex flex-col pt-[58px] text-white font-poppins mr-16 sm:text-left xsm:text-center'>
                    <p className='font-semibold text-xl mb-[14px]'>Quick Links</p>
                    <Link href="/">Quick Links</Link>
                    <Link href="/">Rentals</Link>
                    <Link href="/">Sales</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Terms Conditions</Link>
                    <Link href="/">Our blog</Link>
                </div>

                {/* about us part */}
                <div className='flex flex-col pt-[58px] text-white font-poppins sm:text-left xsm:text-center'>
                    <p className='font-semibold text-xl mb-[14px]'>About us</p>
                    <p className='w-[246px]'>We are the top real estate
                        agency in Sydney, with agents
                        available to answer any
                        question 24/7.</p>
                    <p className='flex flex-row mt-9'>
                        <Image src="/images/facebook.svg" width={22.65} height={22.65} alt='Our facebook page' />
                        <Image src="/images/instagram.svg" width={22.65} height={22.65} alt='Our instagram handle' className='ml-[30px]' />
                        <Image src="/images/linkdin.svg" width={22.65} height={22.65} alt='Our linkdin profile' className='ml-[30px]' />
                        <Image src="/images/youtube.svg" width={26.43} height={18.88} alt='Our youtube channel' className='ml-[30px]' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;