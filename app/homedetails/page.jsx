"use client";
import React, { useState } from 'react';
import HeroSection from '../components/heroSection';
import Image from 'next/image';

const HomeDetails = () => {

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <HeroSection isSearchBox={false} title="Apartment" />

            <div className='container mt-12 flex flex-row'>
                <div className='mr-7'>
                    <Image src="/images/image1.png" width={770} height={376} alt='House Picture 1' />
                </div>

                <div className='w-[370px] h-[505px] bg-[#F4F4F4] px-5 pt-12'>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border-[#C5C5C5] border-b p-2 w-full"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border-[#C5C5C5] border-b p-2 w-full mt-4"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border-[#C5C5C5] border-b p-2 w-full mt-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Message"
                        className="border-[#C5C5C5] border-b p-2 w-full mt-4 h-[155px] text-justify"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;