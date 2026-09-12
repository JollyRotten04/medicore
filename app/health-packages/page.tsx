import HeroImage from "../components/hero-image";
import Carousel from "../components/carousel";
import Image from "next/image";

const healthPackages = [
    {
        picture: '/lounge.svg',
        name: "Executive Wellness Package",
        description: "A comprehensive annual checkup covering physical examination, blood work, cardiac screening, and a consultation to review your results with a physician."
    },
    {
        picture: '/lounge.svg',
        name: "Women's Health Package",
        description: "Preventive screenings tailored to women's health needs, including routine gynecological consultation, breast and cervical screening, and bone density assessment."
    },
    {
        picture: '/lounge.svg',
        name: "Men's Health Package",
        description: "A focused screening package covering cardiovascular risk factors, prostate health, and general wellness markers appropriate for men."
    },
    {
        picture: '/lounge.svg',
        name: "Cardiac Screening Package",
        description: "In-depth evaluation of heart health, including ECG, lipid profile, blood pressure monitoring, and a cardiology consultation."
    },
    {
        picture: '/lounge.svg',
        name: "Pre-Employment Package",
        description: "A standard medical clearance package covering physical examination, chest X-ray, drug screening, and basic laboratory tests."
    },
    {
        picture: '/lounge.svg',
        name: "Senior Wellness Package",
        description: "A screening package designed for older adults, covering chronic disease markers, bone health, vision and hearing checks, and fall-risk assessment."
    },
];

export default function OurHealthPackagesPage(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">
                <HeroImage></HeroImage>

                <div className="w-full bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60 sm:py-20">

                    <div className="w-full max-w-2xl mx-auto flex flex-col">

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                            Health Packages
                        </p>

                        <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                            Bundled checkups designed around your stage of life and health goals.
                        </p>

                        <div className="mt-10">
                            <Carousel
                                items={healthPackages}
                                renderItem={(healthPackage) => (
                                    <div className="flex flex-col max-w-md mx-auto h-full max-h-[420px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">

                                        <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 shrink-0">
                                            <Image
                                                className="object-cover"
                                                src={healthPackage.picture}
                                                alt={healthPackage.name}
                                                fill
                                            />
                                        </div>

                                        <div className="flex flex-col text-center px-6 py-6 overflow-y-auto">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {healthPackage.name}
                                            </p>
                                            <div className="w-8 h-px bg-[#11537B]/20 dark:bg-white/20 my-3 mx-auto shrink-0" />
                                            <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {healthPackage.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}