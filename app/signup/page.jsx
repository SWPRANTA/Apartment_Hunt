"use client"
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import LoginLayout from '../components/layout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../components/button';

const Signup = () => {
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        console.log('Signup clicked with:', fName, lName, email, password, confirmPassword );
    };


    return (
        <LoginLayout>
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className='mt-20 flex flex-col items-center mb-[93px]'>
                    <div className='w-[570px] h-auto border border-[#ABABAB]'>
                        <div className='ml-[55px] mt-[37.5px] flex flex-col mr-[55px]'>
                            {/* Title */}
                            <div className='font-bold text-2xl'>
                                Signup
                            </div>
                            {/* Firstname */}
                            <div className='mt-12'>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border-[#C5C5C5] border-b p-2 w-full"
                                    value={fName}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>

                            {/* Last Name  */}
                            <div className='mt-12'>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border-[#C5C5C5] border-b p-2 w-full"
                                    value={lName}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>

                            {/* Username or email */}
                            <div className='mt-12'>
                                <input
                                    type="text"
                                    placeholder="Username or Email"
                                    className="border-[#C5C5C5] border-b p-2 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password */}
                            <div className='mt-12'>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="border-[#C5C5C5] border-b p-2 w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className='mt-12'>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="border-[#C5C5C5] border-b p-2 w-full"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            {/* Signup Button  */}
                            <Button to="#" title="Signup" onClick={handleSignup} classes="w-full py-[14px] mt-12 mb-4" />

                            <div className='text-center mb-6'>
                                Already have an account? <a href="/login" className="text-btn-color underline">Login</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-461 mt-6 flex items-center justify-center">
                        <div className="border-t border-black w-[200px]"></div>
                        <p className="mx-4">Or</p>
                        <div className="border-t border-black w-[200px]"></div>
                    </div>

                    <div className='flex flex-col w-[461px]'>
                        <div className='mt-5 rounded-full border-[#C7C7C7] border-2 flex items-center px-2 h-[51px] w-full'>
                            <Image src="/images/facebook1.svg" width={37} height={37} alt='Login with facebook' className='flex-2' />
                            <p className='flex-1 text-center'>Login with Facebook</p>
                        </div>

                        <div className='mt-2 rounded-full border-[#C7C7C7] border-2 flex items-center px-2 h-[51px] w-full'>
                            <Image src="/images/google.svg" width={37} height={37} alt='Login with facebook' className='flex-2' />
                            <p className='flex-1 text-center'>Login with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </LoginLayout>

    );
};

export default Signup;