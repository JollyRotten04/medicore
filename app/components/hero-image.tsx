"use client";

import Image from "next/image";
import WebsiteHeroImage from '../../public/websiteHeroImage.jpg';
import { usePageContext } from "../context/page-context";

export default function HeroImage(){

    const { setCurrentPage } = usePageContext();

    function goToBookAppointment(){
        setCurrentPage("Patient Portal");
    }

    return(
        <>
            <div className="relative w-full h-[60vh] min-h-[320px] sm:h-[70vh] sm:min-h-[420px] lg:h-[85vh] lg:min-h-[560px] xl:max-h-[820px] overflow-hidden">
                <Image
                    src={WebsiteHeroImage}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    alt="Picture of the author"
                />

                {/* Mobile/tablet: flat dark overlay, text centered over the whole image */}
                <div className="absolute inset-0 bg-gray-500/50 lg:hidden" />

                {/* Desktop: directional gradient from left, text reads out of it */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B2338]/80 via-[#0B2338]/35 to-transparent" />

                {/* Mobile/tablet layout: centered */}
                <div className="flex lg:hidden absolute z-10 flex-col justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 sm:px-10 md:px-16">
                    <p className="text-white font-semibold text-center text-xl sm:text-3xl md:text-4xl leading-tight max-w-3xl">
                        YOUR HEALTH, OUR HIGHEST PRIORITY
                    </p>
                    <p className="text-white font-light text-center text-xs sm:text-sm md:text-base mt-2 sm:mt-3 max-w-md">
                        Trusted healthcare for you and your family.
                    </p>
                    <button
                        onClick={goToBookAppointment}
                        className="bg-[#46667a] hover:bg-[#3a5566] transition-colors text-white font-semibold text-[0.65rem] sm:text-xs md:text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-lg mt-4 sm:mt-6 text-center"
                    >
                        Book An Appointment
                    </button>
                </div>

                {/* Desktop layout: left-aligned, resting in the gradient */}
                <div className="hidden lg:flex absolute z-10 flex-col justify-center items-start h-full left-0 top-0 max-w-xl xl:max-w-2xl px-12 xl:px-20">
                    <p className="text-white font-semibold text-left text-4xl xl:text-5xl leading-tight">
                        Your health, our highest priority
                    </p>
                    <p className="text-white/90 font-light text-left text-base xl:text-lg mt-4 max-w-md">
                        Trusted healthcare for you and your family.
                    </p>
                    <button
                        onClick={goToBookAppointment}
                        className="bg-[#46667a] hover:bg-[#3a5566] cursor-pointer transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg mt-8 text-left"
                    >
                        Book An Appointment
                    </button>
                </div>
            </div>
        </>
    );
}