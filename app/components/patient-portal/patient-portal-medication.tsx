"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import FadeIn from "../fade-in";

interface Medication {
    id: string;
    name: string;
    dosage: string;
    time: string;
    taken: boolean;
}

const initialSchedule: { label: string; items: Medication[] }[] = [
    {
        label: "Morning",
        items: [
            { id: "morning-amlodipine", name: "Amlodipine", dosage: "5mg", time: "8:00 AM", taken: false },
            { id: "morning-lisinopril", name: "Lisinopril", dosage: "", time: "8:00 AM", taken: false },
        ],
    },
    {
        label: "Afternoon",
        items: [
            { id: "afternoon-amlodipine", name: "Amlodipine", dosage: "5mg", time: "3:00 PM", taken: false },
            { id: "afternoon-lisinopril", name: "Lisinopril", dosage: "", time: "3:00 PM", taken: false },
        ],
    },
    {
        label: "Evening",
        items: [
            { id: "evening-amlodipine", name: "Amlodipine", dosage: "5mg", time: "10:00 PM", taken: false },
            { id: "evening-lisinopril", name: "Lisinopril", dosage: "", time: "10:00 PM", taken: false },
        ],
    },
];

export default function PatientPortalMedication() {
    const [schedule, setSchedule] = useState(initialSchedule);

    function toggleTaken(sectionLabel: string, id: string) {
        setSchedule((prev) =>
            prev.map((section) =>
                section.label !== sectionLabel
                    ? section
                    : {
                          ...section,
                          items: section.items.map((med) =>
                              med.id === id ? { ...med, taken: !med.taken } : med
                          ),
                      }
            )
        );
    }

    return (
        <FadeIn>
            <div className="flex flex-col">

                <div className="flex flex-col gap-1">
                    <p className="text-lg text-slate-900 dark:text-white font-bold">Medication</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                        Schedule for your medicine intake throughout the day
                    </p>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    {schedule.map((section) => (
                        <div key={section.label} className="flex flex-col gap-2">

                            <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">{section.label}</p>

                            <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                                {section.items.map((med, idx) => (
                                    <div
                                        key={med.id}
                                        className={`flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-3 transition-colors ${
                                            idx !== section.items.length - 1
                                                ? "border-b border-gray-100 dark:border-gray-800"
                                                : ""
                                        }`}
                                    >
                                        <p className={`text-sm font-semibold transition-colors ${
                                            med.taken
                                                ? "text-slate-400 dark:text-slate-500 line-through decoration-slate-300 dark:decoration-slate-600"
                                                : "text-slate-900 dark:text-white"
                                        }`}>
                                            {med.name}
                                            {med.dosage && <span className="font-semibold"> ({med.dosage})</span>}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <p className="text-xs text-slate-500 dark:text-gray-400 font-normal">{med.time}</p>
                                            <button
                                                onClick={() => toggleTaken(section.label, med.id)}
                                                aria-pressed={med.taken}
                                                className={`flex items-center gap-1.5 text-xs font-medium rounded-md px-3 py-1.5 cursor-pointer transition-colors ${
                                                    med.taken
                                                        ? "bg-sky-50 text-sky-600 border border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30 hover:bg-sky-100 dark:hover:bg-sky-500/20"
                                                        : "bg-[#11537B] text-white hover:bg-[#0d3f5f]"
                                                }`}
                                            >
                                                {med.taken && <Check className="h-3 w-3" strokeWidth={2.5} />}
                                                {med.taken ? "Taken" : "Mark taken"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}