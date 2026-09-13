import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import ReceptionDesk from "../../../public/reception-desk.png";
import FadeIn from "../fade-in";

const articles = [
    {
        slug: "reception-desk-greeting-1",
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        category: "Patient Care",
        readTime: "4 min read",
        image: ReceptionDesk,
    },
    {
        slug: "reception-desk-greeting-2",
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        category: "Patient Care",
        readTime: "4 min read",
        image: ReceptionDesk,
    },
    {
        slug: "reception-desk-greeting-3",
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        category: "Patient Care",
        readTime: "4 min read",
        image: ReceptionDesk,
    },
];

export default function PatientPortalHealthArticles() {
    return (
        <FadeIn>
            <div className="flex flex-col h-full">
                <p className="text-lg text-slate-900 dark:text-white font-bold">Health Articles</p>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-normal mb-5">
                    Tips and insights to help you stay informed about your care
                </p>

                <div className="flex flex-col gap-4 overflow-y-auto">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/patient-portal/articles/${article.slug}`}
                            className="group flex flex-col text-left rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer"
                        >
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col gap-2 p-4">
                                <span className="w-fit text-[0.65rem] font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-2 py-1 rounded-full">
                                    {article.category}
                                </span>

                                <p className="text-sm text-slate-900 dark:text-white font-semibold leading-snug line-clamp-2">
                                    {article.title}
                                </p>

                                <div className="flex items-center justify-between mt-1">
                                    <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                                        <Clock className="h-3 w-3" strokeWidth={1.75} />
                                        {article.readTime}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs font-medium text-sky-600 dark:text-sky-400">
                                        Read more
                                        <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}