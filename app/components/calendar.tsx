"use client";

import { useState, useMemo } from "react";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarDay {
    day: number;
    inCurrentMonth: boolean;
    isToday: boolean;
}

export default function Calendar(){

    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const calendarDays: CalendarDay[] = useMemo(() => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();

        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

        const days: CalendarDay[] = [];

        // Trailing days from previous month
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push({ day: daysInPrevMonth - i, inCurrentMonth: false, isToday: false });
        }

        // Days in current month
        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                currentYear === today.getFullYear() &&
                currentMonth === today.getMonth() &&
                day === today.getDate();
            days.push({ day, inCurrentMonth: true, isToday });
        }

        // Leading days from next month, padding to a full 6-row grid (42 cells)
        const remaining = 42 - days.length;
        for (let day = 1; day <= remaining; day++) {
            days.push({ day, inCurrentMonth: false, isToday: false });
        }

        return days;
    }, [currentYear, currentMonth]);

    function goToPrevMonth(){
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((m) => m - 1);
        }
        setSelectedDay(null);
    }

    function goToNextMonth(){
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((m) => m + 1);
        }
        setSelectedDay(null);
    }

    return(
        <div className="bg-blue-100 dark:bg-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl">

            {/* Month header with subtle nav arrows */}
            <div className="flex items-center justify-center gap-6 mb-6">
                <button
                    onClick={goToPrevMonth}
                    className="text-gray-400 hover:text-gray-700 transition-colors text-lg px-2"
                    aria-label="Previous month"
                >
                    ‹
                </button>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {monthNames[currentMonth]} {currentYear}
                </h2>
                <button
                    onClick={goToNextMonth}
                    className="text-gray-400 hover:text-gray-700 transition-colors text-lg px-2"
                    aria-label="Next month"
                >
                    ›
                </button>
            </div>

            {/* Day-of-week headers */}
            <div className="grid grid-cols-7 mb-2">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-white py-2">
                        {day}
                    </div> 
                ))}
            </div>

            {/* Date cells */}
            <div className="grid grid-cols-7 gap-y-3 gap-x-1">
                {calendarDays.map((d, i) => {
                    const isSelected = d.inCurrentMonth && selectedDay === d.day;
                    return (
                        <div key={i} className="flex items-center justify-center">
                            <button
                                onClick={() => d.inCurrentMonth && setSelectedDay(d.day)}
                                disabled={!d.inCurrentMonth}
                                className={`h-11 w-11 rounded-full flex items-center justify-center text-sm font-medium transition-all
                                    ${!d.inCurrentMonth
                                        ? "text-gray-500 cursor-default"
                                        : isSelected
                                            ? "bg-sky-500 text-white shadow-md"
                                            : "text-gray-900 bg-white shadow-sm hover:bg-[#2DB6C4] hover:text-white cursor-pointer"
                                    }
                                `}
                            >
                                {d.day}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}