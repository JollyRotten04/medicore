import Image from "next/image";
import Logo from '../../public/logo.svg';

const milestones = [
    {
        period: "The Beginning",
        text: "St. Raphael Medical Center was founded on a simple belief: quality healthcare should be delivered with empathy, respect, and clinical excellence. Inspired by the healing spirit of St. Raphael, we set out to build a place where every patient feels cared for, not processed.",
    },
    {
        period: "Growing With Our Community",
        text: "As the years passed, we embraced advancements in medical technology, expanded our services, and built a multidisciplinary team of experienced physicians, nurses, and healthcare professionals, all working toward timely diagnoses and treatment tailored to each patient.",
    },
    {
        period: "Where We Are Today",
        text: "We proudly serve our community as a trusted healthcare partner, offering integrated services designed to promote wellness, prevent illness, and improve quality of life, with every patient still at the heart of everything we do.",
    },
];

export default function OurStory(){
    return(
        <>
            <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

                <div className="w-full max-w-2xl mx-auto flex flex-col">

                    <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                        Our Story
                    </p>

                    <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                        From a founding belief to a trusted community partner.
                    </p>

                    <div className="flex flex-col mt-12">
                        {milestones.map((milestone, idx) => (
                            <div key={milestone.period} className="flex gap-4 sm:gap-6">

                                {/* Timeline rail */}
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#11537B] dark:bg-white mt-1.5" />
                                    {idx !== milestones.length - 1 && (
                                        <div className="w-px flex-1 bg-[#11537B]/20 dark:bg-white/20 my-1" />
                                    )}
                                </div>

                                <div className={`flex flex-col ${idx !== milestones.length - 1 ? "pb-10" : ""}`}>
                                    <p className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                                        {milestone.period}
                                    </p>
                                    <p className="text-sm font-light text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                                        {milestone.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}