"use client";

import { useState, useMemo } from "react";

interface TimeSlot {
    label: string;   // "8:00 AM"
    value: string;   // "08:00" — 24hr, useful for backend/API calls
    available: boolean;
}

interface TimeSlotPickerProps {
    startHour?: number;      // 24hr format, e.g. 8 for 8 AM
    endHour?: number;        // 24hr format, e.g. 17 for 5 PM
    bookedSlots?: string[];  // e.g. ["09:30", "13:00"] — values already taken
    onSelect?: (slot: TimeSlot) => void;
}

export default function TimeSlotPicker({
    startHour = 8,
    endHour = 17,
    bookedSlots = [],
    onSelect,
}: TimeSlotPickerProps) {

    const [selected, setSelected] = useState<string | null>(null);

    const slots: TimeSlot[] = useMemo(() => {
        const result: TimeSlot[] = [];

        for (let hour = startHour; hour < endHour; hour++) {
            for (const minute of [0, 30]) {
                const value = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

                const period = hour >= 12 ? "PM" : "AM";
                const displayHour = hour % 12 === 0 ? 12 : hour % 12;
                const label = `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;

                result.push({
                    label,
                    value,
                    available: !bookedSlots.includes(value),
                });
            }
        }

        return result;
    }, [startHour, endHour, bookedSlots]);

    function handleSelect(slot: TimeSlot){
        if (!slot.available) return;
        setSelected(slot.value);
        onSelect?.(slot);
    }

    return (
        <div className="bg-blue-100 dark:bg-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl">

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {slots.map((slot) => {
                    const isSelected = selected === slot.value;

                    return (
                        <button
                            key={slot.value}
                            onClick={() => handleSelect(slot)}
                            disabled={!slot.available}
                            className={`py-2.5 rounded-lg text-sm font-medium transition-all
                                ${!slot.available
                                    ? "bg-gray-100 text-gray-300 cursor-not-allowed line-through cursor-pointer"
                                    : isSelected
                                        ? "bg-sky-500 text-white shadow-md"
                                        : "bg-white text-gray-900 shadow-sm hover:bg-[#2DB6C4] hover:text-white cursor-pointer"
                                }
                            `}
                        >
                            {slot.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}