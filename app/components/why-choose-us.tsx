import Image from "next/image";
import Logo from '../../public/logo.svg';
import FadeIn from "./fade-in";

const pillars = [
    {
        label: "Personalized Care",
        description: "Every treatment plan starts with understanding your unique needs, not a one-size-fits-all protocol.",
    },
    {
        label: "Modern Technology",
        description: "Advanced diagnostic and treatment equipment, paired with physicians who know how to use it well.",
    },
    {
        label: "Genuine Compassion",
        description: "A team that listens first and treats second, so you always feel like a person, not a case number.",
    },
];

export default function WhyChooseUs(){
    return(
        <>
            <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

                <FadeIn>
                    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

                        <Image
                            src={Logo}
                            className="h-fit w-20 sm:w-24 dark:brightness-0 dark:invert"
                            alt="St. Raphael Logo"
                        />

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white mt-5">
                            Why Choose Us
                        </p>

                        <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mt-3">
                            Exceptional healthcare goes beyond treating illness. It starts with
                            understanding what each patient actually needs.
                        </p>

                        <div className="w-10 h-px bg-[#11537B]/30 dark:bg-white/20 my-8" />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 w-full">
                            {pillars.map((pillar) => (
                                <div key={pillar.label} className="flex flex-col items-center text-center px-2">
                                    <p className="text-sm font-semibold text-[#46667a] dark:text-white">
                                        {pillar.label}
                                    </p>
                                    <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                                        {pillar.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </>
    );
}