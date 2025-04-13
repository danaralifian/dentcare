import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const SERVICES = [
    {
        name: "Teeth Whitening",
        description: "We offer flexible appointment scheduling and free to accommodate your busy life",
        image: "/images/dentist-whitening.webp",
        bgColor: "bg-yellow-100"
    },
    {
        name: "Dental Implant",
        description: "Surgical placement of artificial tooth roots",
        image: "/images/female-dentist-with-tools.webp",
        bgColor: "bg-green-200"
    },
    {
        name: "Teeth Fillings",
        description: "Restorative procedures to repair cavities and damaged teeth",
        image: "/images/dentist-sergeon.webp",
        bgColor: "bg-green-100"
    },
    {
        name: "Oral Surgery",
        description: "Surgical procedures, including extractios and dental implants",
        image: "/images/dentist-happy.webp",
        bgColor: "bg-green-200"
    },
    {
        name: "Crown and Bridges",
        description: "Restoration options for damaged or missing teeth",
        image: "/images/dentist-excited.webp",
        bgColor: "bg-green-100"
    },
    {
        name: "Periodontal Care",
        description: "Services for gum health, including scalling and root planing",
        image: "/images/nurse.webp",
        bgColor: "bg-yellow-100"
    },
]

export default function Services() {
    return (
        <section id='services' className="container">
            <h2 className="text-center text-green-400 font-semibold mb-2 text-xl">Satisfy Solution</h2>
            <h3 className="text-2xl md:text-4xl text-center font-semibold mb-8">The Best Dental Treatment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <Fade direction="up" cascade damping={0.2} triggerOnce>
                    {SERVICES.map((service, index) => {
                        return (
                            <div key={index} className={`${service.bgColor} p-6 rounded-lg overflow-auto relative h-[250px] md:h-[300px]`}>
                                <div className="w-[70%]">
                                    <h4 className="text-2xl md:text-3xl font-medium">{service.name}</h4>
                                    <p className="relative z-10 text-sm md:text-base">{service.description}</p>
                                </div>
                                <Image src={service.image} width={227} height={254} alt="service image" className="absolute right-0 bottom-0 h-[227px] w-auto" />
                            </div>
                        )
                    })}
                </Fade>
            </div>
        </section>
    )
}
