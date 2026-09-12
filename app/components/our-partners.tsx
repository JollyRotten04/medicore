import Carousel from "./carousel";

const partners = [
    {
        name: "Licensed Healthcare Facility",
        description: "Committed to maintaining high standards of patient safety, quality care, and professional medical practice."
    },
    {
        name: "Qualified Medical Professionals",
        description: "Our physicians and healthcare providers are experienced, licensed, and dedicated to delivering compassionate, evidence-based care."
    },
    {
        name: "Secure Patient Information",
        description: "Patient records are managed through secure digital systems that prioritize privacy and confidentiality."
    },
    {
        name: "Modern Medical Facilities",
        description: "Our clinic utilizes contemporary medical equipment and technology to support accurate diagnosis and effective treatment."
    },
    {
        name: "Patient-Centered Care",
        description: "Every patient receives personalized care tailored to their unique healthcare needs."
    },
    {
        name: "Continuous Quality Improvement",
        description: "We continuously evaluate and improve our services to provide the highest level of healthcare possible."
    }
];

export default function OurPartners(){
    return(
        <>
            <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

                <div className="w-full max-w-2xl mx-auto flex flex-col">

                    <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                        Why You Can Trust Us
                    </p>

                    <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                        Standards we hold ourselves to, every day, for every patient.
                    </p>

                    <div className="mt-10">
                        <Carousel
                            items={partners}
                            renderItem={(partner) => (
                                <div className="flex flex-col items-center text-center max-w-md mx-auto h-full max-h-[340px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 px-6 py-8 overflow-y-auto">

                                    <div className="h-12 w-12 rounded-full bg-[#11537B] text-white flex items-center justify-center shrink-0 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </div>

                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {partner.name}
                                    </p>

                                    <div className="w-8 h-px bg-[#11537B]/20 dark:bg-white/20 my-3 shrink-0" />

                                    <p className="text-xs font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {partner.description}
                                    </p>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}