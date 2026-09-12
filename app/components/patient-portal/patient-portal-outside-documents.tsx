import { useState } from "react";

interface OutsideDocument {
    name: string;
    category: string;
    uploadedDate: string;
    fileType: "PDF" | "JPG" | "PNG" | "DOCX";
    fileSize: string;
}

const outsideDocuments: OutsideDocument[] = [
    { name: "Chest X-Ray Report", category: "Radiology", uploadedDate: "June 20, 2026", fileType: "PDF", fileSize: "2.4 MB" },
    { name: "Blood Test Results - St. Luke's", category: "Laboratory", uploadedDate: "June 18, 2026", fileType: "PDF", fileSize: "540 KB" },
    { name: "Previous Prescription", category: "Medication", uploadedDate: "June 10, 2026", fileType: "JPG", fileSize: "1.1 MB" },
    { name: "Referral Letter - Dr. Santos", category: "Referral", uploadedDate: "May 28, 2026", fileType: "DOCX", fileSize: "88 KB" },
    { name: "MRI Scan Summary", category: "Radiology", uploadedDate: "May 15, 2026", fileType: "PDF", fileSize: "3.7 MB" },
];

function fileTypeBadgeClasses(fileType: string) {
    switch (fileType) {
        case "PDF":
            return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
        case "DOCX":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
        case "JPG":
        case "PNG":
            return "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
}

export default function PatientPortalOutsideDocuments() {

    const [documents] = useState<OutsideDocument[]>(outsideDocuments);

    return (
        <>
            <div className="flex flex-col">

                <div className="flex flex-col gap-1">
                    <p className="text-lg text-black dark:text-white font-bold">Outside Documents</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                        Medical records and files from outside providers
                    </p>
                </div>

                <button className="bg-[#46667a] dark:bg-sky-500/25 w-full text-white font-semibold text-sm p-2 px-4 rounded-lg text-center mt-6 cursor-pointer">
                    Upload Document
                </button>

                <div className="flex flex-col gap-2 mt-6 mb-4">

                    {documents.length > 0 ? (
                        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                            {documents.map((doc, idx) => (
                                <div
                                    key={`${doc.name}-${doc.uploadedDate}`}
                                    className={`flex items-center justify-between bg-white dark:bg-gray-900 px-3 py-3 gap-3 ${
                                        idx !== documents.length - 1
                                            ? "border-b border-gray-100 dark:border-gray-800"
                                            : ""
                                    }`}
                                >
                                    <div className="flex flex-col min-w-0">
                                        <p className="text-sm text-black dark:text-white font-semibold truncate">{doc.name}</p>
                                        <p className="text-xs text-black dark:text-white font-light mt-0.5">
                                            {doc.category} &middot; {doc.uploadedDate} &middot; {doc.fileSize}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className={`text-[0.65rem] font-semibold px-2 py-1 rounded-full ${fileTypeBadgeClasses(doc.fileType)}`}>
                                            {doc.fileType}
                                        </span>
                                        <button className="text-xs text-blue-900 dark:text-blue-400 font-medium hover:underline cursor-pointer">
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center h-full w-full text-center gap-4 py-8">
                            <p className="text-xs text-black dark:text-white font-light">No documents uploaded yet</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}