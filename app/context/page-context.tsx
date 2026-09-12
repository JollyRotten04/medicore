"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type ValidPages = 'Home' | 'About Us' | 'Services' | 'Health Packages' | 'Health Articles' | 'Contacts' | 'Patient Portal';
export type ValidPatientPortalPages = 'Home' | 'Health Snapshot' | 'Active Care Plan' | 'Medication' | 'Health Articles' | 'Insurance' | 'Outside Documents';
export type AnyValidPage = ValidPages | ValidPatientPortalPages;

interface PageContextType {
    currentPage: AnyValidPage;
    setCurrentPage: (value: AnyValidPage) => void;
    isPatientPortal: boolean;
    exitPatientPortal: () => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: ReactNode }) {
    const [currentPage, setCurrentPageState] = useState<AnyValidPage>("Home");
    const [isPatientPortal, setIsPatientPortal] = useState(false);

    const setCurrentPage = (value: AnyValidPage) => {
        if (value === "Patient Portal") {
            setIsPatientPortal(true);
        }
        setCurrentPageState(value);
    };

    const exitPatientPortal = () => {
        setIsPatientPortal(false);
        setCurrentPageState("Home");
    };

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage, isPatientPortal, exitPatientPortal }}>
            {children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePageContext must be used within a PageProvider");
    }
    return context;
}