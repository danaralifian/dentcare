import {
    ArrowDownRight,
    BriefcaseMedical,
    Headset,
    Star,
    Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const BENEFITS = [
    {
        name: "Free Consultation",
        description:
            "We offer flexible appointment scheduling and free to accommodate your busy life",
        icon: <Headset size={85} className="text-blue-300" />,
    },
    {
        name: "Expert Dentists",
        description:
            "Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry",
        icon: <Stethoscope size={85} className="text-red-400" />,
    },
    {
        name: "High User Rating",
        description:
            "We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized",
        icon: <Star size={85} className="text-green-400" />,
    },
    {
        name: "Best Equipment",
        description:
            "Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible",
        icon: <BriefcaseMedical size={85} className="text-orange-300" />,
    },
];

export default function HeroBanner() {
    return (
        <section>
            <div className="container flex flex-col lg:flex-row gap-6 items-start">
                <div className="mt-4 md:mt-28">
                    <Fade direction="up" triggerOnce cascade damping={0.2}>
                        <h1 className="font-bold text-4xl md:text-5xl">
                            Your Smile, Our Passion
                        </h1>
                        <h2 className="font-medium text-base md:text-xl mt-4">
                            At DentCare, we believe every smile tells a story. Our mission is
                            to provide personalized, high-quality dental care that keeps your
                            teeth healthy and your confidence glowing.
                        </h2>
                        <Link
                            className="bg-green-500 px-6 py-2 rounded-full text-xl text-white font-medium space-x-2 flex w-fit mt-10"
                            href={"#"}
                        >
                            <span>Booking Now</span>
                            <ArrowDownRight size={28} />
                        </Link>
                    </Fade>
                </div>
                <Image
                    src="/images/couple-smile.webp"
                    alt="hero"
                    width={500}
                    height={500}
                    className="w-[600px]"
                />
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 -mt-6">
                <Fade direction="up" triggerOnce cascade damping={0.2}>
                    {BENEFITS.map((benefit, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white h-full p-6 rounded-lg shadow-[0px_0px_13px_0px_rgba(0,_0,_0,_0.1)]"
                            >
                                <div className="justify-center mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{benefit.name}</h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        );
                    })}
                </Fade>
            </div>
        </section>
    );
}
