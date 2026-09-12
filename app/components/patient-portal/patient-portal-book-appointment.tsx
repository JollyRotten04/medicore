"use client";

import { useState } from "react";
import { Stethoscope, HeartPulse, Ear, Baby, Activity, Eye, Check } from "lucide-react";
import Calendar from "../calendar";
import TimeSlotPicker from "../time-select";

interface Specialty {
    id: string;
    label: string;
    icon: React.ElementType;
}

const specialties: Specialty[] = [
    { id: "primary-care", label: "Primary Care", icon: Stethoscope },
    { id: "mens-health", label: "Men's Health", icon: Activity },
    { id: "ent", label: "ENT", icon: Ear },
    { id: "pediatrics", label: "Pediatrics", icon: Baby },
    { id: "cardiology", label: "Cardiology", icon: HeartPulse },
    { id: "ophthalmology", label: "Ophthalmology", icon: Eye },
];

function StepLabel({ number, text }: { number: number; text: string }) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center h-5 w-5 rounded-full bg-sky-500 text-white text-[11px] font-semibold shrink-0">
                {number}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{text}</p>
        </div>
    );
}

export default function PatientPortalBookAppointment() {
    const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const canBook = selectedSpecialty && selectedDate && selectedTime;

    return (
        <div className="h-full w-full max-w-2xl mx-auto p-4 sm:p-6 flex flex-col gap-8">

            <div className="flex flex-col gap-1">
                <p className="text-xl text-slate-900 dark:text-white font-semibold">
                    Book an appointment
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Choose a specialty, then pick a date and time that works for you.
                </p>
            </div>

            <div>
                <StepLabel number={1} text="Choose a specialty" />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {specialties.map(({ id, label, icon: Icon }) => {
                        const isSelected = selectedSpecialty === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setSelectedSpecialty(id)}
                                className={`relative flex flex-col items-center justify-center gap-2 rounded-xl p-4 h-24 border transition-all cursor-pointer
                                    ${isSelected
                                        ? "border-sky-500 bg-sky-500 shadow-md"
                                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                                    }`}
                            >
                                {isSelected && (
                                    <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-white flex items-center justify-center">
                                        <Check className="h-2.5 w-2.5 text-sky-500" strokeWidth={3} />
                                    </span>
                                )}
                                <Icon
                                    className={`h-5 w-5 ${isSelected ? "text-white" : "text-slate-400 dark:text-slate-500"}`}
                                    strokeWidth={1.75}
                                />
                                <p className={`text-xs font-medium text-center ${isSelected ? "text-white" : "text-slate-700 dark:text-slate-300"}`}>
                                    {label}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <StepLabel number={2} text="Select a date" />
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-2">
                    <Calendar onSelect={(date: string) => setSelectedDate(date)} />
                </div>
            </div>

            <div>
                <StepLabel number={3} text="Select a time" />
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-2">
                    <TimeSlotPicker
                        startHour={8}
                        endHour={17}
                        bookedSlots={["09:30", "13:00", "14:30"]}
                        onSelect={(slot) => setSelectedTime(slot.value)}
                    />
                </div>
            </div>

            <button
                disabled={!canBook}
                className={`w-full sm:w-48 mx-auto mt-2 py-3 rounded-xl font-semibold text-sm transition-all
                    ${canBook
                        ? "bg-sky-500 text-white shadow-md hover:bg-sky-600 cursor-pointer"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                    }`}
            >
                {canBook ? "Confirm booking" : "Book appointment"}
            </button>
        </div>
    );
}