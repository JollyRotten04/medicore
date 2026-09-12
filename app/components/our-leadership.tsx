"use client";

import Carousel from "./carousel";
import FadeIn from "./fade-in";

const leaders = [
    {
        name: "Dr. Maria Isabel Santos",
        title: "Medical Director",
        description: "Dr. Santos oversees the clinical operations of St. Raphael Medical Center and is committed to maintaining the highest standards of patient care, medical excellence, and ethical practice. With over 20 years of experience in internal medicine and healthcare leadership, she ensures every patient receives compassionate and evidence-based care."
    },
    {
        name: "Dr. Michael Anthony Cruz",
        title: "Chief of Medical Services",
        description: "Dr. Cruz leads the clinic's multidisciplinary team of physicians and works closely with every department to deliver coordinated, high-quality healthcare. His focus is on improving patient outcomes through innovation and collaboration."
    },
    {
        name: "Angela Dela Cruz, RN",
        title: "Head Nurse",
        description: "Angela leads the nursing department, ensuring every patient receives attentive, compassionate, and professional care. She specializes in patient safety, clinical coordination, and quality improvement."
    },
    {
        name: "Carlos Mendoza",
        title: "Clinic Administrator",
        description: "Carlos manages the daily operations of the medical center, overseeing administration, patient services, and technology systems to ensure a seamless healthcare experience."
    }
];

export default function OurLeadership(){
    return(
        <>
            <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

                <FadeIn className="w-full max-w-2xl mx-auto flex flex-col">
                    <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                        Our Leadership
                    </p>

                    <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                        The people guiding every part of your care, from clinic floor to boardroom.
                    </p>

                    <div className="mt-10">
                        <Carousel
                            items={leaders}
                            renderItem={(leader) => (
                                <div className="flex flex-col items-center text-center max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 px-6 py-8">

                                    <div className="h-16 w-16 rounded-full bg-[#11537B] text-white flex items-center justify-center text-base font-semibold mb-4 shrink-0">
                                        {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                                    </div>

                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {leader.name}
                                    </p>

                                    <span className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase mt-1">
                                        {leader.title}
                                    </span>

                                    <div className="w-8 h-px bg-[#11537B]/20 dark:bg-white/20 my-4" />

                                    <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {leader.description}
                                    </p>
                                </div>
                            )}
                        />
                    </div>
                </FadeIn>
            </div>
        </>
    );
}