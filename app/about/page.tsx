import HeroImage from "../components/hero-image";
import OurStory from "../components/our-story";
import OurLeadership from "../components/our-leadership";
import OurFacilities from "../components/our-facilities";
import OurPartners from "../components/our-partners";
import FadeIn from "../components/fade-in";

export default function AboutUsPage(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">
                <HeroImage></HeroImage>

                {/* Vision & Mission */}
                <div className="w-full bg-[#EDF3F6] dark:bg-gray-900/60 ">
                    <FadeIn className="max-w-4xl mx-auto flex flex-col px-6 py-14 sm:py-20">

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                            What Drives Us
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 mt-10">

                            <div className="flex flex-col items-center text-center px-2">
                                <span className="text-[0.65rem] font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                                    Our Vision
                                </span>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300 leading-relaxed mt-3 max-w-sm">
                                    To be a trusted leader in compassionate, patient-centered
                                    healthcare, recognized for clinical excellence, innovation,
                                    and our unwavering commitment to improving the health and
                                    well-being of every community we serve.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center px-2 sm:border-l sm:border-[#11537B]/15 dark:sm:border-white/10">
                                <span className="text-[0.65rem] font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                                    Our Mission
                                </span>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300 leading-relaxed mt-3 max-w-sm">
                                    We provide accessible, high-quality, and comprehensive
                                    healthcare through skilled medical professionals, modern
                                    technology, and compassionate service, promoting wellness
                                    and restoring health in a safe, welcoming environment.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <OurStory></OurStory>

            <OurLeadership></OurLeadership>

            <OurFacilities></OurFacilities>

            <OurPartners></OurPartners>
        </>
    );
}