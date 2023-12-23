"use client"
import React, { useState } from 'react';
import Button from './button';
import Image from 'next/image';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Login clicked with:', { email, password, rememberMe });
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password clicked');
    };

    return (
        <div className='mt-20 flex flex-col items-center mb-[93px]'>
            <div className='w-[570px] h-[485px] border border-[#ABABAB]'>
                <div className='ml-[55px] mt-[37.5px] flex flex-col mr-[55px]'>
                    {/* Title */}
                    <div className='font-bold text-2xl'>
                        Login
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

                    
                    <div className='flex flex-row justify-between mt-8'>
                        {/* Remember me  */}
                        <div>
                            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                            <label className='pl-[9px]'>Remember Me</label>
                        </div>
                        {/* Forget Password  */}
                        <div>
                            <a href="#" onClick={handleForgotPassword} className="text-btn-color underline">Forgot Password?</a>
                        </div>
                    </div>

                    {/* Login Button  */}
                    <Button to="/" title="Login" onClick={handleLogin} classes="w-full py-[14px] mt-12 mb-4" />

                    <div className='text-center'>
                        Don't have an account? <a href="#" className="text-btn-color underline">Create one</a>
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
    );
};

export default Login;