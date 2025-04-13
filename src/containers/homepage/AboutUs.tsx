import { ArrowDownRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function AboutUs() {
    return (
        <section id='about-us' className="container py-8">
            <div className='block md:hidden'>
                <h2 className="text-green-400 font-semibold mb-2 text-xl">About Us</h2>
                <h3 className="text-2xl md:text-4xl font-semibold mb-8">Patient-Centered Care</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Fade triggerOnce>
                    <Image src='/images/dentist-with-patient.webp' width={640} height={840} alt="dentist with patient" className="w-auto max-h-[711px]" />
                </Fade>
                <div>
                    <Fade direction="up" triggerOnce cascade damping={0.2}>
                        <div className='hidden md:block'>
                            <h2 className="text-green-400 font-semibold mb-2 text-xl">About Us</h2>
                            <h3 className="text-2xl md:text-4xl font-semibold mb-8">Patient-Centered Care</h3>
                        </div>
                        <p className="mb-12 text-sm md:text-base">
                            We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.
                        </p>
                        <h4 className="font-medium text-lg md:text-2xl mb-2">Our Mission</h4>
                        <p className="text-sm md:text-base">At Dentcare, our mission is to promote optimal oral health and create lasting, confident smiles.</p>
                        <Link href={'#'} className="flex gap-2 bg-green-500 shadow-green-400 shadow-md text-white px-4 py-2 rounded-full w-fit font-medium text-xl mt-14">
                            <span>Learn More</span>
                            <ArrowDownRight size={28} />
                        </Link>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
