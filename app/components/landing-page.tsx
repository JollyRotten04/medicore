import HeroImage from "../components/hero-image";
import FadeIn from "../components/fade-in";
import WhatOthersSayAboutUs from "../components/what_others_say_about_us";
import WhyChooseUs from "../components/why-choose-us";
import WhereToFindUs from "../components/where_to_find_us";

export default function LandingPage(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">

                <HeroImage></HeroImage>

                {/* Mission statement */}
                <div className="w-full bg-[#EDF3F6] dark:bg-gray-900/60">
                    <FadeIn className="max-w-2xl mx-auto flex flex-col items-center px-6 py-14 sm:py-20">

                        <span className="font-serif text-6xl sm:text-7xl leading-none text-[#11537B]/25 dark:text-white/20 select-none">
                            &ldquo;
                        </span>

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white mt-2 leading-snug">
                            Compassionate care, trusted healing, every step of the way.
                        </p>

                        <div className="w-10 h-px bg-[#11537B]/30 dark:bg-white/20 my-6" />

                        <p className="text-sm sm:text-base font-light text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                            At St. Raphael Medical Center, we deliver comprehensive, patient-centered
                            healthcare through experienced medical professionals, modern facilities,
                            advanced medical technology, and compassionate service, because your health
                            deserves nothing less.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <WhatOthersSayAboutUs />
            <WhyChooseUs />
            <WhereToFindUs />
        </>
    );
}