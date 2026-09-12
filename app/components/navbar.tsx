"use client";

import Image from "next/image";
import Logo from '../../public/logo.svg';
import Logout from '../../public/logoutIcon.svg';
import { useEffect, useState } from "react";
import { usePageContext, ValidPages, ValidPatientPortalPages } from "../context/page-context";

interface NavBarProps {
    navbarOpen: boolean;
    openNavbar: (value: boolean) => void;
}

const navLinks: ValidPages[] = [
    "Home", "About Us", "Services", "Health Packages", "Health Articles", "Contacts", "Patient Portal",
];

const navLinksPatient: ValidPatientPortalPages[] = [
    "Home", "Health Snapshot", "Active Care Plan", "Medication", "Health Articles", "Insurance", "Outside Documents",
];

export default function NavBar({ navbarOpen, openNavbar }: NavBarProps){

    const [showContent, setShowContent] = useState(false);
    const { currentPage, setCurrentPage, isPatientPortal, exitPatientPortal } = usePageContext();

    useEffect(() => {
        if (navbarOpen) {
            const timer = setTimeout(() => setShowContent(true), 200);
            return () => clearTimeout(timer);
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowContent(false);
        }
    }, [navbarOpen]);

    // Handles clicks on the main site nav (ValidPages)
    const handleNavigation = (destination: ValidPages) => {
        console.log("[NavBar] main nav click:", destination);
        setCurrentPage(destination);
        openNavbar(false);
    };

    // Handles clicks on the patient portal nav (ValidPatientPortalPages)
    const handlePatientPortalNavigation = (destination: ValidPatientPortalPages) => {
        console.log("[NavBar] patient portal nav click:", destination);
        setCurrentPage(destination);
        openNavbar(false);
    };

    return(
        <>
            <div className="fixed top-0 left-0 z-1000 h-screen w-screen pointer-events-none">

                <div
                    onClick={() => openNavbar(false)}
                    className={`absolute bg-stone-600 ${
                        navbarOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                ></div>

                <div
                    className={`fixed bg-white top-0 left-0 z-110 p-4 box-border h-full w-full flex flex-col pointer-events-auto transition-transform duration-300 dark:bg-gray-900 ease-in-out ${
                        navbarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >

                    <Image src={Logo} className="w-24 h-fit mx-auto dark:brightness-0 dark:invert mt-12" alt="Logo"></Image>

                    <div
                        className={`flex flex-col gap-2 mt-8 transition-all w-full duration-300 ease-out ${
                            showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                    >
                        {isPatientPortal ? 
                        
                        <>
                            {navLinksPatient.map((link) => (
                                <div
                                    key={link}
                                    onClick={() => handlePatientPortalNavigation(link)}
                                    className="px-3 py-2 -mx-3 rounded-lg cursor-pointer w-full transition-colors duration-150 active:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <p className="text-sm text-black dark:text-white">{link}</p>
                                </div>
                            ))}
                        </> 
                        
                        : 
                        
                        <>
                            {navLinks.map((link) => (
                                <div
                                    key={link}
                                    onClick={() => handleNavigation(link)}
                                    className="px-3 py-2 -mx-3 rounded-lg cursor-pointer w-full transition-colors duration-150 active:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <p className="text-sm text-black dark:text-white">{link}</p>
                                </div>
                            ))}
                        </>}
                    </div>

                    <div
                        onClick={isPatientPortal ? exitPatientPortal : undefined}
                        className="flex items-center gap-2 justify-start mt-auto cursor-pointer"
                    >
                        <Image src={Logout} className="w-4 h-fit dark:brightness-0 dark:invert" alt="Logout"></Image>
                    </div>
                </div>
            </div>
        </>
    );
}