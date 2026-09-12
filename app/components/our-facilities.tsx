"use client";

import Carousel from "./carousel";
import Image from "next/image";

const facilities = [
    {
        picture: '/lounge.svg',
        name: "Reception & Patient Lounge",
        description: "A welcoming and comfortable space designed to ensure a smooth registration process and a relaxing waiting experience. Our reception team is dedicated to assisting every patient with professionalism and care."
    },
    {
        picture: '/lounge.svg',
        name: "Consultation Room",
        description: "Private, fully equipped consultation rooms where our physicians provide personalized medical assessments, diagnoses, and treatment plans in a confidential and comfortable setting."
    },
    {
        picture: '/lounge.svg',
        name: "Diagnostics Laboratory",
        description: "Our modern laboratory performs a wide range of diagnostic tests using reliable equipment to deliver accurate and timely results that support effective medical care."
    },
    {
        picture: '/lounge.svg',
        name: "Diagnostics Imaging Center",
        description: "Equipped with advanced imaging technology, our facility offers digital X-rays, ultrasound examinations, and other diagnostic imaging services to assist physicians in accurate diagnosis and treatment planning."
    },
    {
        picture: '/lounge.svg',
        name: "Pharmacy",
        description: "Our in-house pharmacy provides convenient access to prescribed medications, over-the-counter healthcare products, and professional medication counseling from licensed pharmacists."
    }
];

export default function OurFacilities(){
    return(
        <>
            <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

                <div className="w-full max-w-2xl mx-auto flex flex-col">

                    <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                        Our Facilities
                    </p>

                    <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                        A closer look at the spaces where your care happens.
                    </p>

                    <div className="mt-10">
                        <Carousel
                            items={facilities}
                            renderItem={(facility) => (
                                <div className="flex flex-col max-w-md mx-auto h-full max-h-[420px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">

                                    <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 shrink-0">
                                        <Image
                                            className="object-cover"
                                            src={facility.picture}
                                            alt={facility.name}
                                            fill
                                        />
                                    </div>

                                    <div className="flex flex-col text-center px-6 py-6 overflow-y-auto">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {facility.name}
                                        </p>
                                        <div className="w-8 h-px bg-[#11537B]/20 dark:bg-white/20 my-3 mx-auto shrink-0" />
                                        <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {facility.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}