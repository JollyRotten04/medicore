import HeroImage from "../components/hero-image";
import Carousel from "../components/carousel";
import Image from "next/image";

const services = [
    {
        picture: '/lounge.svg',
        name: "Primary Care",
        description: "Comprehensive first-contact healthcare for routine medical concerns, preventive care, health screenings, and ongoing management of common conditions."
    },
    {
        picture: '/lounge.svg',
        name: "Pediatrics",
        description: "Comprehensive medical care for infants, children, and adolescents, including routine checkups, illness management, growth monitoring, and developmental assessments."
    },
    {
        picture: '/lounge.svg',
        name: "Women's Health",
        description: "Comprehensive healthcare addressing women's health needs throughout different stages of life, including preventive screenings and routine consultations."
    },
    {
        picture: '/lounge.svg',
        name: "Men's Health",
        description: "Preventive and general healthcare tailored to the health needs of men across different stages of life."
    },
    {
        picture: '/lounge.svg',
        name: "Cardiology",
        description: "Evaluation, diagnosis, and management of cardiovascular conditions and risk factors by qualified medical professionals."
    },
    {
        picture: '/lounge.svg',
        name: "Dermatology",
        description: "Diagnosis and treatment of common skin, hair, and nail conditions across different age groups."
    },
    {
        picture: '/lounge.svg',
        name: "Ear, Nose & Throat (ENT)",
        description: "Evaluation and management of conditions affecting the ears, nose, throat, and related structures."
    },
    {
        picture: '/lounge.svg',
        name: "Ophthalmology",
        description: "Routine evaluation of vision and eye health to identify common visual and ocular conditions."
    },
    {
        picture: '/lounge.svg',
        name: "Orthopedics",
        description: "Evaluation and treatment planning for conditions affecting bones, joints, muscles, ligaments, and other parts of the musculoskeletal system."
    },
    {
        picture: '/lounge.svg',
        name: "Laboratory & Diagnostics",
        description: "Diagnostic laboratory testing that provides physicians with important information to support diagnosis, treatment, and health monitoring."
    },
    {
        picture: '/lounge.svg',
        name: "Immunization & Preventive Care",
        description: "Vaccination services and preventive guidance appropriate for adults based on individual health needs."
    }
];

export default function OurServicesPage(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">
                <HeroImage></HeroImage>

                <div className="w-full bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60 sm:py-20">

                    <div className="w-full max-w-2xl mx-auto flex flex-col">

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                            Our Services
                        </p>

                        <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                            A full range of care, from routine checkups to specialized treatment.
                        </p>

                        <div className="mt-10">
                            <Carousel
                                items={services}
                                renderItem={(service) => (
                                    <div className="flex flex-col max-w-md mx-auto h-full max-h-[420px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">

                                        <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 shrink-0">
                                            <Image
                                                className="object-cover"
                                                src={service.picture}
                                                alt={service.name}
                                                fill
                                            />
                                        </div>

                                        <div className="flex flex-col text-center px-6 py-6 overflow-y-auto">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {service.name}
                                            </p>
                                            <div className="w-8 h-px bg-[#11537B]/20 dark:bg-white/20 my-3 mx-auto shrink-0" />
                                            <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {service.description}
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