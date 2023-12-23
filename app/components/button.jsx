import Link from 'next/link';
import React from 'react';

const Button = ({to, title, classes}) => {
    const buttonClasses = `border border-gray-500 bg-btn-color text-center text-white hover:bg-white hover:text-btn-color ${classes}`;
    return (
        <div className={buttonClasses}>
            <Link href={to} className=''>{title}</Link>
        </div>
    );
};

export default Button;