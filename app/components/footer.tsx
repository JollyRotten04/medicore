import LogoWhite from '../../public/logoWhite.svg';
import PhoneWhite from '../../public/phoneWhite.svg';
import EmailWhite from '../../public/emailWhite.svg';
import FaxWhite from '../../public/faxWhite.svg';
import Facebook from '../../public/facebook.svg';
import Tiktok from '../../public/tiktok.svg';
import X from '../../public/x.svg';
import Youtube from '../../public/youtube.svg';
import Shield from '../../public/shield.svg';
import Doctor from '../../public/doctor.svg';
import Hands from '../../public/hands.svg';
import Monitor from '../../public/monitor.svg';
import Image from 'next/image';

export default function Footer(){
    return(
        <>
            <div className="px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12 bg-[#11537B] dark:bg-gray-900 w-full flex flex-col">

                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 py-4">

                    {/* Logo + tagline */}
                    <div className="flex flex-col gap-4 items-center justify-start lg:w-1/4 lg:items-start lg:text-left">

                        <Image src={LogoWhite} className='h-24 sm:h-28 lg:h-32 aspect-square' alt="St. Raphael Logo"></Image>

                        <p className="text-xs sm:text-sm font-semibold text-center lg:text-left text-white max-w-[220px]">
                            Compassionate Care. Trusted Healing. Every Step of the Way.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-1">

                        {/* Newsletter */}
                        <div className="flex flex-col gap-2">

                            <div className="flex flex-col items-start">
                                <p className="text-sm sm:text-base font-semibold text-white">
                                    Subscribe to our newsletter
                                </p>

                                <p className="text-xs font-light text-white mt-1">
                                    To receive the latest news in healthcare and various other topics
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:max-w-md">

                                <input
                                    type="email"
                                    placeholder='Enter your email here...'
                                    className='px-3 py-2 border border-black bg-white text-xs sm:text-sm w-full rounded-sm'
                                />

                                <button className='bg-white px-4 py-2 text-xs sm:text-sm font-semibold border border-black rounded-sm hover:bg-gray-100 transition-colors shrink-0'>
                                    Send
                                </button>
                            </div>
                        </div>

                        {/* Link columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">

                            <div className="flex flex-col">
                                <p className="text-white text-xs sm:text-sm font-semibold">Quick Links</p>

                                <div className="mt-2 flex flex-col gap-1.5">
                                    <p className="text-white text-xs">Home</p>
                                    <p className="text-white text-xs">About Us</p>
                                    <p className="text-white text-xs">Our Doctors</p>
                                    <p className="text-white text-xs">Health Packages</p>
                                    <p className="text-white text-xs">Blogs</p>
                                    <p className="text-white text-xs">FAQs</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-white text-xs sm:text-sm font-semibold">Our Services</p>

                                <div className="mt-2 flex flex-col gap-1.5">
                                    <p className="text-white text-xs">Primary Care</p>
                                    <p className="text-white text-xs">Pediatrics</p>
                                    <p className="text-white text-xs">{"Women's Health"}</p>
                                    <p className="text-white text-xs">Cardiology</p>
                                    <p className="text-white text-xs">Laboratory</p>
                                    <p className="text-white text-xs">Vaccinations</p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-white text-xs sm:text-sm font-semibold">Contact Us</p>

                                <div className="mt-2 flex flex-col gap-2">

                                    <div className="flex gap-2 items-start">
                                        <Image src={PhoneWhite} className='w-3 h-fit mt-0.5 shrink-0' alt="Phone White"></Image>
                                        <p className="text-white text-xs">09123456789 | 09987654321</p>
                                    </div>

                                    <div className="flex gap-2 items-start">
                                        <Image src={EmailWhite} className='w-3 h-fit mt-0.5 shrink-0' alt="Email White"></Image>
                                        <p className="text-white text-xs break-all">contactus@straphael.com</p>
                                    </div>

                                    <div className="flex gap-2 items-start">
                                        <Image src={FaxWhite} className='w-3 h-fit mt-0.5 shrink-0' alt="Fax White"></Image>
                                        <p className="text-white text-xs">(02) 1234 5678</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-white text-xs sm:text-sm font-semibold">Connect With Us</p>

                                <div className="mt-2 flex flex-col gap-1.5">

                                    <div className="flex gap-2 items-center">
                                        <Image src={Facebook} className='w-3 h-fit' alt="Facebook"></Image>
                                        <p className="text-white text-xs">Facebook</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Image src={Tiktok} className='w-3 h-fit' alt="Tiktok"></Image>
                                        <p className="text-white text-xs">Tiktok</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Image src={X} className='w-3 h-fit' alt="X"></Image>
                                        <p className="text-white text-xs">X</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Image src={Youtube} className='w-3 h-fit' alt="Youtube"></Image>
                                        <p className="text-white text-xs">Youtube</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accreditations */}
                        <div className="flex flex-col gap-2">

                            <p className="text-white text-xs">Accreditations:</p>

                            <div className="flex gap-3 sm:gap-4">
                                <Image src={Shield} className='w-5 sm:w-6 h-fit' alt="Shield"></Image>
                                <Image src={Doctor} className='w-5 sm:w-6 h-fit' alt="Doctor"></Image>
                                <Image src={Hands} className='w-5 sm:w-6 h-fit' alt="Hands"></Image>
                                <Image src={Monitor} className='w-5 sm:w-6 h-fit' alt="Monitor"></Image>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='border-white/30 mt-6'/>

                <p className="text-white text-center text-xs mt-4">© 2026 St. Raphael Medical Center</p>
            </div>
        </>
    );
}