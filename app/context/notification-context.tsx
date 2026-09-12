"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NotificationsContextType {
    notificationsOpen: boolean;
    setNotificationsOpen: (value: boolean) => void;
    toggleNotifications: () => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    function toggleNotifications() {
        setNotificationsOpen((prev) => !prev);
    }

    return (
        <NotificationsContext.Provider value={{ notificationsOpen, setNotificationsOpen, toggleNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationsContext);
    if (!context) {
        throw new Error("useNotifications must be used within a NotificationsProvider");
    }
    return context;
}