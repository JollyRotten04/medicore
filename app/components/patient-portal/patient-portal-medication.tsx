export default function PatientPortalMedication() {

    const morning = [
        { name: "Amlodipine", dosage: "5mg", time: "8:00 AM", taken: false },
        { name: "Lisinopril", dosage: "", time: "8:00 AM", taken: false },
    ];

    const afternoon = [
        { name: "Amlodipine", dosage: "5mg", time: "3:00 PM", taken: false },
        { name: "Lisinopril", dosage: "", time: "3:00 PM", taken: false },
    ];

    const evening = [
        { name: "Amlodipine", dosage: "5mg", time: "10:00 PM", taken: false },
        { name: "Lisinopril", dosage: "", time: "10:00 PM", taken: false },
    ];

    const schedule = [
        { label: "Morning", items: morning },
        { label: "Afternoon", items: afternoon },
        { label: "Evening", items: evening },
    ];

    return (
        <>
            <div className="flex flex-col">

                <div className="flex flex-col gap-1">
                    <p className="text-lg text-black dark:text-white font-bold">Medication</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">Schedule for your medicine intake throughout the day</p>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    {schedule.map((section) => (
                        <div key={section.label} className="flex flex-col gap-2">

                            <p className="text-xs text-black dark:text-white font-normal">{section.label}</p>

                            <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                                {section.items.map((med, idx) => (
                                    <div
                                        key={`${section.label}-${med.name}-${med.time}`}
                                        className={`flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-3 ${
                                            idx !== section.items.length - 1
                                                ? "border-b border-gray-100 dark:border-gray-800"
                                                : ""
                                        }`}
                                    >
                                        <p className="text-sm text-black dark:text-white font-semibold">
                                            {med.name}
                                            {med.dosage && (
                                                <span className="font-semibold"> ({med.dosage})</span>
                                            )}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <p className="text-xs text-black dark:text-white font-normal">{med.time}</p>
                                            <button className="text-xs text-white font-medium bg-blue-900 cursor-pointer rounded-md px-3 py-1.5 hover:bg-blue-800 transition-colors">
                                                Taken
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}