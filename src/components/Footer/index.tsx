"use client"
import MENUS from '@/constants/menus'
import { scrollTo, scrollToTop } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {

    const handleClickMenu = (href: string, event: React.MouseEvent<HTMLLIElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        history.pushState(null, '', href)
        scrollTo(href, event)
    }

    const handleToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        history.pushState(null, '', '/')
        scrollToTop()
    }

    return (
        <footer className="bg-gray-50 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <Image src={'/logo.png'} width={200} height={100} alt="logo" />
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>
                                Dentcare is a well-known name in dental and oral care in Indonesia. The journey of this institution started in 1990
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Pages</h3>
                        <div className="space-y-2 text-sm text-gray-600 flex flex-col">
                            <Link
                                href={'#'}
                                onClick={handleToTop}>
                                Home
                            </Link>
                            {MENUS.map((menu, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={menu.href}
                                        onClick={(event) => handleClickMenu(menu.href, event)}>
                                        {menu.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Address</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>Semarang, Indonesia</p>
                            <p>Opening Hours</p>
                            <p>Mon - Fri: 9am - 6pm</p>
                        </div>

                        <h3 className="text-lg font-bold mt-6 mb-4">Inquiries</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>Phone: (123) 456-7890</p>
                            <p>info@dentcare.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                        <p className="text-sm text-gray-600 mb-4">Stay updated with our Latest News</p>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300"
                            />
                            <button className="bg-green-400 text-white px-4 py-2 rounded-r-lg">→</button>
                        </div>

                        <div className="flex space-x-4 mt-6">
                            <a href="https://x.com/" className="text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com" className="text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com" className="text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com" className="text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
