import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }) => {
    return (
        <div>
            <nav className='my-5 flex items-center justify-center'>
                <ul className='flex gap-4 items-center'>
                    <li><Link href={'/about/next-supremacy'}>About Site</Link> </li>
                    <li><Link href={'/about/developer'}>About Us</Link> </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default AboutLayout;