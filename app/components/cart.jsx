import Image from 'next/image';
import React from 'react';
import Button from './button';

// imageSources, prices, locations
const Cart = ({imagePath, title, price, btnPath}) => {
    return (
        <div className='hover:shadow-lg'>
            <Image src={imagePath} width={500} height={300} alt='Image1' />
            <div className='p-[22px] bg-cart-color'>
                <div className='text-[#16322E] font-poppins font-bold text-sm mt-[18px]'>{title}</div>


                <div className='flex font-poppins text-[#747474] mt-2 items-center'>
                    <Image src="/images/location.svg" width='14' height='20' />
                    <span className='ml-2'>Nasirabad H/S, Chattogram</span>
                </div>

                <div className='flex flex-row mt-2 justify-between'>
                    <div className='flex font-poppins text-[#747474] items-center mr-[43px]'>
                        <Image src="/images/bed.svg" width='24' height='24' />
                        <span className='ml-2'>3 Bedrooms</span>
                    </div>
                    <div className='flex font-poppins text-[#747474] items-center'>
                        <Image src="/images/bath.svg" width='24' height='24' />
                        <span className='ml-2'>2 Bathroom</span>
                    </div>
                </div>

                <div className='mt-8 mb-[22px] flex flex-row justify-between items-center'>
                    <div className='text-btn-color font-bold text-[34px]'>
                        ${price}
                    </div>
                    <div>
                        <Button to={btnPath} title="View Details" classes="px-[30px] h-[50px] py-[13px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;