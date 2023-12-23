import Image from 'next/image';
import React from 'react';

const Service = ({imagePath, title, subTitle}) => {
    return (
        <div className='flex flex-col items-center max-w-[290px] text-center'>
            <Image src={imagePath} width={80} height={80} alt='Image1' />
            <div className='mt-[34px] font-poppins text-[#16322E] text-xl font-semibold'>{title}</div>
            <div className='mt-2 font-poppins text-[#606268]'>{subTitle}</div>
        </div>
    );
};

export default Service;