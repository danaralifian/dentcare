import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ContactUs() {
    return (
        <section id='contact-us' className="container">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0 items-center">
                    <div className="flex items-center max-h-[500px]">
                        <Image
                            src="/images/dentist-consult.webp"
                            alt="Dentist"
                            width={400}
                            height={400}
                            className="mx-auto w-full"
                        />
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-10 text-center">Free Consultation</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="I'm interested in*"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-400 text-white rounded-lg py-3 font-medium flex items-center justify-center"
                            >
                                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
