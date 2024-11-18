import React, { useState } from 'react';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/home" className="hover:text-yellow-500 transition">Home</Link></li>
                    <li><Link href="/about-us" className="hover:text-yellow-500 transition">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-yellow-500 transition">Services</Link></li>
                    <li><Link href="/location" className="hover:text-yellow-500 transition">Location</Link></li>
                </ul>
              </div>
        </nav>
    );
}
