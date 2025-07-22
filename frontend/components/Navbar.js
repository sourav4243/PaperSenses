'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';
import Ham from '@/public/hamburger.svg';
import Sun from '@/public/sun.svg';
import Moon from '@/public/moon.svg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');

  const menuRef = useRef(null);

  const hamburgerMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // 👇 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full fixed z-1000">
      <div className="w-full h-15 backdrop-blur-sm z-1000 bg-accent/30 flex fixed px-2 justify-between md:justify-evenly">
        {/* Logo */}
        <div className="title flex gap-2 items-center">
          <Link href="/" onClick={() => setActiveTab(null)} className="flex gap-2 items-center">
            <Image src={Logo} alt="Logo" height={32} width={32} />
            <h1 className="bg-gradient-to-l from-blue-800 to-blue-600 text-xl sm:text-2xl font-bold bg-clip-text text-transparent">SmartExamAI</h1>
          </Link>
        </div>

        {/* Hamburger button */}
        <div className="flex items-center md:hidden">
          <button onClick={hamburgerMenu}>
            <Image src={Ham} alt="Menu" height={32} width={32} />
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2 items-center">
          <li>
            <Link href="/upload" onClick={() => setActiveTab('upload')} className={`${activeTab === 'upload' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-2 px-4 rounded' : 'py-2 px-4 rounded hover:bg-blue-600/10'}`}>Upload</Link>
          </li>
          <li>
            <Link href="/dashboard" onClick={() => setActiveTab('dashboard')} className={`${activeTab === 'dashboard' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-2 px-4 rounded' : 'py-2 px-4 rounded hover:bg-blue-600/10'}`}>Dashboard</Link>
          </li>
          <li>
            <Link href="/predictions" onClick={() => setActiveTab('predictions')} className={`${activeTab === 'predictions' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-2 px-4 rounded' : 'py-2 px-4 rounded hover:bg-blue-600/10'}`}>Predictions</Link>
          </li>
        </ul>

        {/* Theme and avatar */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button onClick={() => setTheme('light')}>
              <div className="border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm">
                <Image src={Sun} alt="Light mode" />
              </div>
            </button>
            <button onClick={() => setTheme('dark')}>
              <div className="border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm">
                <Image src={Moon} alt="Dark mode" className="dark:invert" />
              </div>
            </button>
          </div>
          <span className="border border-black rounded-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/150509277?s=400" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
          </span>
        </div>
      </div>

      {/* Hamburger menu */}
      <div
        ref={menuRef}
        className={`hamMenu absolute top-12 ${isMenuOpen ? 'right-0' : '-right-40'} w-35 border z-1000 h-46 md:hidden transition-[right] duration-500 p-3 rounded-xl backdrop-blur-xs shadow-xl ring-1 ring-black/10`}
      >
        <div className="px-2 mb-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/150509277?s=400" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>

        <ul className="flex flex-col justify-center text-muted-foreground gap-1">
          <li className="w-full flex justify-center">
            <Link href="/upload" onClick={() => { setActiveTab('upload'); setIsMenuOpen(false); }} className={`${activeTab === 'upload' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-0.5 rounded' : 'py-0.5 rounded hover:bg-blue-600/10'} w-full px-2`}>Upload</Link>
          </li>
          <li className="w-full flex justify-center">
            <Link href="/dashboard" onClick={() => { setActiveTab('dashboard'); setIsMenuOpen(false); }} className={`${activeTab === 'dashboard' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-0.5 rounded' : 'py-0.5 rounded hover:bg-blue-600/10'} w-full px-2`}>Dashboard</Link>
          </li>
          <li className="w-full flex justify-center">
            <Link href="/predictions" onClick={() => { setActiveTab('predictions'); setIsMenuOpen(false); }} className={`${activeTab === 'predictions' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-0.5 rounded' : 'py-0.5 rounded hover:bg-blue-600/10'} w-full px-2`}>Predictions</Link>
          </li>
        </ul>

        <div className="mt-2 px-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button onClick={() => setTheme('light')}>
              <div className="border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm">
                <Image src={Sun} alt="Light mode" className='dark:invert'/>
              </div>
            </button>
            <button onClick={() => setTheme('dark')}>
              <div className="border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm">
                <Image src={Moon} alt="Dark mode" className="dark:invert" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
