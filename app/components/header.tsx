"use client";

import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Hamburger from '../../public/hamburger.svg';
import DarkMode from '../../public/darkMode.svg';
import Notifications from '../../public/notifications.svg';
import { useTheme } from '../context/theme-context';
import { usePageContext, ValidPages, ValidPatientPortalPages } from '../context/page-context';
import { useNotifications } from '../context/notification-context';
import { useState } from 'react';

interface ChildProps {
    openNavbar : (value: boolean) => void;
    navbarOpen : boolean;
}

const navLinks: ValidPages[] = [
    "Home", "About Us", "Services", "Health Packages", "Health Articles", "Contacts", "Patient Portal",
];

const navLinksPatient: ValidPatientPortalPages[] = [
    "Home", "Health Snapshot", "Active Care Plan", "Medication", "Health Articles", "Insurance", "Outside Documents",
];

export default function Header({openNavbar, navbarOpen} : ChildProps){

    const { darkMode, toggleDarkMode } = useTheme();
    const [ hasUnreadNotifications, setHasUnreadNotifications ] = useState(true);
    const { notificationsOpen, setNotificationsOpen } = useNotifications();
    const { currentPage, setCurrentPage, isPatientPortal, exitPatientPortal } = usePageContext();

    function openNotifications(){
        setHasUnreadNotifications(false);
        setNotificationsOpen(!notificationsOpen);
    }

    return(
        <>
            <div className="sticky top-0 z-100 w-full bg-white dark:bg-gray-900 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
                <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-4">

                    {/* Hamburger Icon — mobile/tablet only */}
                    <Image
                    src={Hamburger}
                    className={`h-4 sm:h-5 w-fit relative z-120 cursor-pointer transition-transform duration-300 ease-in-out dark:invert lg:hidden ${
                        navbarOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                    onClick={() => openNavbar(!navbarOpen)}
                    alt="Hamburger"></Image>

                    {/* Logo — desktop only, sits where the hamburger would be */}
                    <Image
                        src={Logo}
                        className="hidden lg:block h-8 w-fit dark:brightness-0 dark:invert"
                        alt="St. Raphael Logo"
                    />

                    {/* Inline nav links — desktop only */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
                        {(isPatientPortal ? navLinksPatient : navLinks).map((link) => (
                            <button
                                key={link}
                                onClick={() => setCurrentPage(link)}
                                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                                    currentPage === link
                                        ? 'text-[#11537B] dark:text-white font-semibold'
                                        : 'text-gray-600 hover:text-[#11537B] dark:text-gray-300 dark:hover:text-white'
                                }`}
                            >
                                {link}
                            </button>
                        ))}
                    </nav>

                    <div className={`flex items-center gap-4 sm:gap-6 shrink-0`}>

                    {isPatientPortal && (
                        <>
                            <div className="relative flex items-center">
                                <Image
                                    src={Notifications}
                                    className="h-4 sm:h-5 w-fit cursor-pointer transition-transform duration-300 ease-in-out dark:invert"
                                    alt="Notifications"
                                    onClick={openNotifications}
                                />
                                {hasUnreadNotifications && (
                                    <span className="absolute -top-1 -right-1 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" />
                                )}
                            </div>

                            {/* Exit portal — desktop only, since mobile uses the drawer's logout icon */}
                            <button
                                onClick={exitPatientPortal}
                                className="hidden lg:block text-xs font-semibold cursor-pointer text-[#46667a] hover:text-[#11537B] dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap"
                            >
                                Exit Portal
                            </button>
                        </>
                    )}

                        {/* Dark Mode Toggle */}
                        <Image
                        src={DarkMode}
                        className={`h-4 sm:h-5 w-fit cursor-pointer transition-transform duration-300 ease-in-out dark:invert ${
                            darkMode ? 'rotate-180' : 'rotate-0'
                        }`}
                        onClick={toggleDarkMode}
                        alt="Toggle Dark Mode"></Image>
                    </div>
                </div>
            </div>
        </>
    );
}