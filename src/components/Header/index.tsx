"use client"
import MENUS from '@/constants/menus'
import { cn, scrollTo, scrollToTop } from '@/lib/utils'
import { Button } from '@heroui/button'
import { ArrowDownRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        scrollTo()

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleClickMenu = (href: string, event: React.MouseEvent<HTMLLIElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        history.pushState(null, '', href)
        scrollTo(href, event)
        setIsOpen(false)
    }

    const handleToTop = () => {
        history.pushState(null, '', '/')
        scrollToTop()
        setIsOpen(false)
    }

    return (
        <header className={cn('sticky top-0 min-h-[64px] flex items-center bg-white z-20 transition-shadow duration-300 ease-in-out', { 'shadow-md': isScrolled })}>
            {/* Navbar */}
            <div className='container flex items-center justify-between'>
                <Image src='/logo.png' alt='logo varian plus' className='w-auto h-6 md:h-8 cursor-pointer' width={200} height={100} onClick={handleToTop} />
                <nav className='hidden md:block'>
                    <ul className='flex space-x-6 items-center list-none'>
                        {MENUS.filter((f) => f.href !== '#contact-us').map((menu, index) => <li key={index} className='font-bold cursor-pointer' onClick={(event) => handleClickMenu(menu.href, event)}>{menu.name}</li>)}
                    </ul>
                </nav>
                <Link href={'#contact-us'} onClick={(event) => handleClickMenu('#contact-us', event)} className='font-semibold border border-green-500 px-4 py-2 rounded-full hidden md:flex space-x-2 '>
                    <span>Contact Us</span>
                    <ArrowDownRight />
                </Link>
                <div className='cursor-pointer block md:hidden' onClick={() => setIsOpen(true)}>
                    <Menu />
                </div>
            </div>
            {/* Drawer */}
            <div
                className={cn('fixed top-0 right-0 h-full w-full inset-0 bg-black/50 z-20 shadow-lg opacity-0 pointer-events-none duration-300', {
                    'opacity-100 pointer-events-auto': isOpen
                })}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={cn('w-full h-full max-w-xs bg-white right-0 absolute p-4 py-5 transition-transform transform duration-300 ease-in-out', {
                        'translate-x-0': isOpen,
                        'translate-x-full': !isOpen
                    })}
                    onClick={(e) => e.stopPropagation()}>
                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <Image src='/logo.png' alt='logo varian plus' className='w-auto h-6 md:h-8' width={200} height={100} onClick={handleToTop} />
                            <Button variant={'light'} title='button close' onClick={() => setIsOpen(false)} size={'md'}>
                                <X />
                            </Button>
                        </div>
                        <hr />
                        <ul className='space-y-2 list-none mt-8'>
                            {MENUS.map((menu, index) => <li key={index} className='p-2 rounded-md cursor-pointer font-semibold' onClick={(event) => handleClickMenu(menu.href, event)}>{menu.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}