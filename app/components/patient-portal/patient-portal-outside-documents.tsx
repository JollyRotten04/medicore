"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FileText, Image as ImageIcon, File, X, Download, UploadCloud, Loader2, CheckCircle2 } from "lucide-react";
import FadeIn from "../fade-in";

interface OutsideDocument {
    id: string;
    name: string;
    category: string;
    uploadedDate: string;
    fileType: "PDF" | "JPG" | "PNG" | "DOCX" | "OTHER";
    fileSize: string;
}

const initialDocuments: OutsideDocument[] = [
    { id: "1", name: "Chest X-Ray Report", category: "Radiology", uploadedDate: "June 20, 2026", fileType: "PDF", fileSize: "2.4 MB" },
    { id: "2", name: "Blood Test Results - St. Luke's", category: "Laboratory", uploadedDate: "June 18, 2026", fileType: "PDF", fileSize: "540 KB" },
    { id: "3", name: "Previous Prescription", category: "Medication", uploadedDate: "June 10, 2026", fileType: "JPG", fileSize: "1.1 MB" },
    { id: "4", name: "Referral Letter - Dr. Santos", category: "Referral", uploadedDate: "May 28, 2026", fileType: "DOCX", fileSize: "88 KB" },
    { id: "5", name: "MRI Scan Summary", category: "Radiology", uploadedDate: "May 15, 2026", fileType: "PDF", fileSize: "3.7 MB" },
];

const categories = ["Radiology", "Laboratory", "Medication", "Referral", "Other"];

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

function fileTypeIcon(fileType: string) {
    switch (fileType) {
        case "JPG":
        case "PNG":
            return ImageIcon;
        case "DOCX":
            return File;
        default:
            return FileText;
    }
}

function extToFileType(filename: string): OutsideDocument["fileType"] {
    const ext = filename.split(".").pop()?.toUpperCase();
    if (ext === "PDF") return "PDF";
    if (ext === "JPG" || ext === "JPEG") return "JPG";
    if (ext === "PNG") return "PNG";
    if (ext === "DOCX" || ext === "DOC") return "DOCX";
    return "OTHER";
}

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatToday(): string {
    return new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

interface PendingFile {
    file: File;
    category: string;
}

function UploadModal({
    onClose,
    onUploaded,
}: {
    onClose: () => void;
    onUploaded: (doc: OutsideDocument) => void;
}) {
    const [pending, setPending] = useState<PendingFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
    const [progress, setProgress] = useState(0);
    const [doneIndexes, setDoneIndexes] = useState<Set<number>>(new Set());
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    function addFiles(files: FileList | null) {
        if (!files) return;
        const next = Array.from(files).map((file) => ({ file, category: "Other" }));
        setPending((prev) => [...prev, ...next]);
    }

    function updateCategory(index: number, category: string) {
        setPending((prev) => prev.map((p, i) => (i === index ? { ...p, category } : p)));
    }

    function removePending(index: number) {
        setPending((prev) => prev.filter((_, i) => i !== index));
    }

    const uploadOne = useCallback((index: number) => {
        setUploadingIndex(index);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return p + Math.random() * 25 + 10;
            });
        }, 150);

        // Simulated network delay — replace this whole function with a real
        // upload call (e.g. fetch to your API / storage bucket) when ready.
        setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
            setDoneIndexes((prev) => new Set(prev).add(index));
            setUploadingIndex(null);
        }, 1200);
    }, []);

    function handleUploadAll() {
        pending.forEach((p, i) => {
            if (!doneIndexes.has(i)) {
                setTimeout(() => uploadOne(i), i * 300);
            }
        });
    }

    function handleFinish() {
        pending.forEach((p, i) => {
            if (doneIndexes.has(i)) {
                onUploaded({
                    id: `${Date.now()}-${i}`,
                    name: p.file.name,
                    category: p.category,
                    uploadedDate: formatToday(),
                    fileType: extToFileType(p.file.name),
                    fileSize: formatFileSize(p.file.size),
                });
            }
        });
        onClose();
    }

    const allDone = pending.length > 0 && doneIndexes.size === pending.length;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Upload documents</p>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="h-7 w-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="p-5 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                    <div
                        onClick={() => inputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            addFiles(e.dataTransfer.files);
                        }}
                        className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 cursor-pointer transition-colors
                            ${isDragging
                                ? "border-sky-500 bg-sky-50 dark:bg-sky-500/10"
                                : "border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700"
                            }`}
                    >
                        <UploadCloud className="h-6 w-6 text-sky-500" strokeWidth={1.75} />
                        <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                            <span className="font-medium text-sky-600 dark:text-sky-400">Click to browse</span> or drag files here
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">PDF, JPG, PNG, or DOCX</p>
                        <input
                            ref={inputRef}
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.docx,.doc"
                            className="hidden"
                            onChange={(e) => addFiles(e.target.files)}
                        />
                    </div>

                    {pending.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {pending.map((p, i) => {
                                const Icon = fileTypeIcon(extToFileType(p.file.name));
                                const isUploading = uploadingIndex === i;
                                const isDone = doneIndexes.has(i);
                                return (
                                    <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 dark:border-slate-800 p-3">
                                        <Icon className="h-4 w-4 text-slate-400 shrink-0" strokeWidth={1.75} />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-medium text-slate-900 dark:text-white truncate">{p.file.name}</p>
                                            {isUploading ? (
                                                <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                                                    <div
                                                        className="h-full bg-sky-500 transition-all duration-150"
                                                        style={{ width: `${Math.min(progress, 100)}%` }}
                                                    />
                                                </div>
                                            ) : (
                                                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                                                    {formatFileSize(p.file.size)}
                                                </p>
                                            )}
                                        </div>

                                        {isDone ? (
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                                        ) : isUploading ? (
                                            <Loader2 className="h-4 w-4 text-sky-500 shrink-0 animate-spin" />
                                        ) : (
                                            <>
                                                <select
                                                    value={p.category}
                                                    onChange={(e) => updateCategory(i, e.target.value)}
                                                    className="text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md px-1.5 py-1 shrink-0"
                                                >
                                                    {categories.map((c) => (
                                                        <option key={c} value={c}>{c}</option>
                                                    ))}
                                                </select>
                                                <button
                                                    onClick={() => removePending(i)}
                                                    aria-label="Remove file"
                                                    className="h-6 w-6 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 shrink-0 cursor-pointer"
                                                >
                                                    <X className="h-3.5 w-3.5" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                        onClick={onClose}
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    {allDone ? (
                        <button
                            onClick={handleFinish}
                            className="text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                        >
                            Done
                        </button>
                    ) : (
                        <button
                            onClick={handleUploadAll}
                            disabled={pending.length === 0 || uploadingIndex !== null}
                            className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                                pending.length === 0 || uploadingIndex !== null
                                    ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                                    : "text-white bg-sky-500 hover:bg-sky-600 cursor-pointer"
                            }`}
                        >
                            Upload {pending.length > 0 ? `(${pending.length})` : ""}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function DocumentViewerModal({ doc, onClose }: { doc: OutsideDocument; onClose: () => void }) {
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    const Icon = fileTypeIcon(doc.fileType);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{doc.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {doc.category} &middot; {doc.uploadedDate}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 py-12 bg-slate-50 dark:bg-slate-950">
                    <div className="h-16 w-16 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center">
                        <Icon className="h-7 w-7 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
                    </div>
                    <span className={`text-[0.65rem] font-semibold px-2 py-1 rounded-full ${fileTypeBadgeClasses(doc.fileType)}`}>
                        {doc.fileType} &middot; {doc.fileSize}
                    </span>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        Preview not available in this view
                    </p>
                </div>

                <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                        onClick={onClose}
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                        Close
                    </button>
                    <button className="flex items-center gap-1.5 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                        <Download className="h-3.5 w-3.5" />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function PatientPortalOutsideDocuments() {
    const [documents, setDocuments] = useState<OutsideDocument[]>(initialDocuments);
    const [activeDoc, setActiveDoc] = useState<OutsideDocument | null>(null);
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    function handleUploaded(doc: OutsideDocument) {
        setDocuments((prev) => [doc, ...prev]);
    }

    return (
        <>
            <FadeIn>
                <div className="flex flex-col">

                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-black dark:text-white font-bold">Outside Documents</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                            Medical records and files from outside providers
                        </p>
                    </div>

                    <button
                        onClick={() => setIsUploadOpen(true)}
                        className="bg-[#11537B] hover:bg-[#0d425f] w-full text-white font-semibold text-sm p-2 px-4 rounded-lg text-center mt-6 cursor-pointer transition-colors"
                    >
                        Upload Document
                    </button>

                    <div className="flex flex-col gap-2 mt-6 mb-4">

                        {documents.length > 0 ? (
                            <div className="flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                                {documents.map((doc, idx) => (
                                    <div
                                        key={doc.id}
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
                                            <button
                                                onClick={() => setActiveDoc(doc)}
                                                className="text-xs text-sky-600 dark:text-sky-400 font-medium hover:underline cursor-pointer"
                                            >
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
            </FadeIn>

            {activeDoc && (
                <DocumentViewerModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
            )}

            {isUploadOpen && (
                <UploadModal onClose={() => setIsUploadOpen(false)} onUploaded={handleUploaded} />
            )}
        </>
    );
}