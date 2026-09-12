import Image from "next/image";
import Schedule from "../../public/schedule.svg";
import Phone from '../../public/phone.svg';

export default function ContactMediums(){
    return(
        <>
            <div className="w-full dark:bg-gray-900/60 px-4 py-14 sm:py-20">

                <div className="max-w-2xl mx-auto w-full flex flex-col">

                    <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                        Get In Touch With Us
                    </p>

                    <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                        Have a question or need to schedule a visit? Send us a message and we&apos;ll get back to you.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-10">

                        <div className="flex flex-col items-center text-center gap-2">
                            <span className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                                Office Hours
                            </span>
                            <div className="flex gap-1.5 items-start">
                                <Image src={Schedule} alt="Schedule" className="w-3 sm:w-3.5 h-fit mt-0.5 shrink-0 dark:invert dark:brightness-0"></Image>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">Mondays – Saturdays, 7:00 AM – 6:00 PM</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-2 sm:border-l sm:border-[#11537B]/15 dark:sm:border-white/10">
                            <span className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                                Contact Number
                            </span>
                            <div className="flex gap-1.5 items-start">
                                <Image src={Phone} alt="Phone Number" className="w-3 sm:w-3.5 h-fit mt-0.5 shrink-0 dark:invert dark:brightness-0"></Image>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">09987654321 | 09123456789</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 mt-10">

                        <div className="flex flex-col gap-5">

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email here..."
                                    className="text-sm border border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md py-2.5 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#11537B] transition-shadow"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Enter your email's subject here..."
                                    className="text-sm border border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md py-2.5 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#11537B] transition-shadow"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">Message</label>
                                <textarea
                                    placeholder="Enter your message here..."
                                    rows={5}
                                    className="text-sm border border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md py-2.5 px-3 w-full resize-y focus:outline-none focus:ring-2 focus:ring-[#11537B] transition-shadow"
                                />
                            </div>
                        </div>

                        <button className="text-sm sm:text-base text-white font-semibold text-center w-full sm:w-auto sm:min-w-[160px] px-6 py-2.5 sm:py-3 bg-[#11537B] hover:bg-[#0d425f] rounded-lg transition-colors mt-6">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>  
        </>
    );
}