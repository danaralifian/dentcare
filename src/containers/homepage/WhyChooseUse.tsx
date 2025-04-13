import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function WhyChooseUse() {
    return (
        <section id='why-choose-us' className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-green-400 font-semibold mb-2 text-xl">Why Choose Us</h2>
                    <h3 className="text-2xl md:text-4xl font-semibold mb-8">Comprehensive Dental Services</h3>
                    <div className="space-y-6">
                        <Fade direction="up" cascade damping={0.2} triggerOnce>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Experienced Professionals:</h4>
                                    <p className="text-gray-600 text-sm">
                                        Our team consists of highly skilled and knowledgeable dental experts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">State-of-the-Art Technology:</h4>
                                    <p className="text-gray-600 text-sm">
                                        We invest in the latest dental technology to provide the best care possible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Compassionate Care:</h4>
                                    <p className="text-gray-600 text-sm">We treat every patient with empathy and understanding.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Patient Education:</h4>
                                    <p className="text-gray-600 text-sm">
                                        We believe in educating our patients about their oral health to make informed decisions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Convenient Hours:</h4>
                                    <p className="text-gray-600 text-sm">We offer flexible scheduling to accommodate your busy life.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="lg:flex justify-end">
                    <Fade triggerOnce>
                        <Image src={'/images/patient-smile.webp'} width={540} height={600} className="w-auto h-auto max-h-[600px]" alt="patient smile" />
                    </Fade>
                </div>
            </div>
        </section>
    )
}
