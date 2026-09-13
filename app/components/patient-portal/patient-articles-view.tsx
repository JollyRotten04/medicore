"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ReceptionDesk from "../../../public/reception-desk.png";
import FadeIn from "../fade-in";

interface Article {
    title: string;
    category: string;
    readTime: string;
    publishedDate: string;
    image: typeof ReceptionDesk;
    body: string[];
}

// Placeholder data — replace with the article fetched by slug/id once routing is wired up.
const article: Article = {
    title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
    category: "Patient Care",
    readTime: "4 min read",
    publishedDate: "September 8, 2026",
    image: ReceptionDesk,
    body: [
        "A patient's first interaction at the front desk sets the tone for their entire visit. For someone arriving anxious, in pain, or overwhelmed, a calm and attentive greeting can make the difference between a stressful encounter and a reassuring one.",
        "Start by making eye contact and acknowledging the patient immediately, even if you're mid-task. A brief 'I'll be right with you' goes a long way toward reducing the feeling of being ignored during a vulnerable moment.",
        "Keep your tone steady and unhurried. Distressed patients often mirror the emotional state of the people around them — a calm, measured voice can help de-escalate anxiety before any words are even processed.",
        "Finally, give clear next steps. Uncertainty is one of the biggest drivers of anxiety in a medical setting, so telling a patient exactly what happens next, and roughly how long it will take, helps restore their sense of control.",
    ],
};

export default function PatientArticlesView() {
    return (
        <div className="max-w-2xl mx-auto">
            <Link
                href="/patient-portal/articles"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-6"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to articles
            </Link>

            <FadeIn>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    <span className="w-fit text-[0.65rem] font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-2 py-1 rounded-full">
                        {article.category}
                    </span>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                            {article.publishedDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                            {article.readTime}
                        </span>
                    </div>
                </div>

                <div className="w-10 h-px bg-slate-200 dark:bg-slate-700 my-6" />

                <div className="flex flex-col gap-4">
                    {article.body.map((paragraph, idx) => (
                        <p key={idx} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}