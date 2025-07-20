'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import Link from 'next/link'
import Ham from '@/public/hamburger.svg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from 'next-themes';
import Moon from '@/public/moon.svg'
import Sun from '@/public/sun.svg'

import {useState} from 'react'



const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const hamburgerMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    const [activeTab, setActiveTab] = useState("upload")

    return (
        <div className="w-full fixed z-1000">
            <div className='w-full h-15 backdrop-blur-sm z-1000 bg-accent/30 flex fixed px-2 justify-between md:justify-evenly'>
                <div className="title flex gap-2 items-center">
                    <Image src={Logo} alt='Logo' loading='eager' height={32} width={32} />
                    <h1 className='bg-gradient-to-l from-blue-800 to-blue-600 text-xl sm:text-2xl font-bold bg-clip-text text-transparent'>SmartExamAI</h1>
                </div>
                <div className='flex items-center md:hidden'>
                    <button onClick={hamburgerMenu}>
                        <Image src={Ham} alt='Menu' loading='lazy' height={32} width={32} />
                    </button>
                </div>

                <ul className='hidden md:flex gap-2 items-center'>
                    <li><Link href="/upload" onClick={() => setActiveTab('upload')} className={`${activeTab === 'upload' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Upload</Link></li>
                    <li><Link href="/dashboard" onClick={() => setActiveTab('dashboard')} className={`${activeTab === 'dashboard' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Dashboard</Link></li>
                    <li><Link href="/predictions" onClick={() => setActiveTab('predictions')} className={`${activeTab === 'predictions' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Predictions</Link></li>
                </ul>

                <div className="hidden md:flex items-center gap-2">
                    <div className='flex items-center gap-1'>
                        <button onClick={() => setTheme('light')}>
                            <div className='border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm'>
                                <Image src={Sun} alt='Light mode' className='transition-all hover:rotate-180 dark:invert' />
                            </div>
                        </button>
                        <button onClick={() => setTheme('dark')}>
                            <div className='border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm'>
                                <Image src={Moon} alt='Dark mode' className='dark:invert' />
                            </div>
                        </button>
                    </div>

                    <span className='border border-black rounded-full'>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/150509277?s=400&u=51aa45d84d306449ca8b899a761eeccd4fb15819&v=4" height="40px" width="40px"/>
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                    </span>
                </div>
            </div>


            {/* Hamburger menu */}
            <div className={`hamMenu absolute top-10 ${isMenuOpen ? 'right-0' : '-right-40'} w-35 border z-1000 h-46 md:hidden transition-[right] duration-500 p-3 rounded-xl backdrop-blur-xs shadow-xl ring-1 ring-black/10`}>
                <div className='px-2 mb-2'>
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/150509277?s=400&u=51aa45d84d306449ca8b899a761eeccd4fb15819&v=4" />
                        <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                </div>

                <ul className='flex flex-col gap-2 justify-center text-muted-foreground'>
                    <li><Link href="/upload" onClick={() => setActiveTab('upload')} className={`${activeTab === 'upload' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Upload</Link></li>
                    <li><Link href="/dashboard" onClick={() => setActiveTab('dashboard')} className={`${activeTab === 'dashboard' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Dashboard</Link></li>
                    <li><Link href="/predictions" onClick={() => setActiveTab('predictions')} className={`${activeTab === 'predictions' ? 'bg-gradient-to-l from-blue-800 to-blue-600 text-white py-1 px-4 rounded hover:bg-gradient-to-r transition-all duration-1000' : 'py-1 px-4 rounded hover:bg-gradient-to-r transition-all'}`}>Predictions</Link></li>
                </ul>
                <div className="mt-2 px-2 flex items-center gap-2">
                    <div className='flex items-center gap-1'>   
                        <button onClick={() => setTheme('light')}>
                            <div className='border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm '>
                                <Image src={Sun} alt='Light mode' className='transition-all hover:rotate-180 dark:invert active:rotate-180' />
                            </div>
                        </button>
                        <button onClick={() => setTheme('dark')}>
                            <div className='border border-gray-500/40 opacity-70 hover:opacity-100 rounded-sm'>
                                <Image src={Moon} alt='Dark mode' className=' dark:invert' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
