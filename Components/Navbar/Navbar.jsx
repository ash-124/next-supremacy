import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <p className=' text-3xl font-bold '>Next Supremacy</p>
            </div>
            <div>
                <ul className='flex gap-4 items-center'>
                    <li><Link href={'/'}>Home</Link> </li>
                    <li><Link href={'/about'}>About</Link> </li>
                    <li><Link href={'/blogs'}>Blogs</Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;