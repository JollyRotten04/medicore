import { CalendarClock, FlaskConical, CircleDollarSign, Pill, ChevronRight, FileText, MessageSquare, Video, RefreshCcw } from "lucide-react";
import FadeIn from "../fade-in";

interface OverviewCard {
  label: string;
  value: string;
  status: string;
  statusTone: "teal" | "amber" | "neutral";
  icon: React.ElementType;
}

const overviewCards: OverviewCard[] = [
  { label: "Next appointment", value: "Tue, Oct 3 · 10:30 AM", status: "Confirmed", statusTone: "teal", icon: CalendarClock },
  { label: "Lab results", value: "Basic Metabolic Panel", status: "New", statusTone: "teal", icon: FlaskConical },
  { label: "Balance due", value: "$142.00", status: "Due Oct 15", statusTone: "amber", icon: CircleDollarSign },
  { label: "Active prescription", value: "Lisinopril 10mg", status: "2 refills left", statusTone: "neutral", icon: Pill },
];

const quickActions = [
  { label: "Book appointment", icon: CalendarClock },
  { label: "Message provider", icon: MessageSquare },
  { label: "View documents", icon: FileText },
  { label: "Request refill", icon: RefreshCcw },
  { label: "Start video visit", icon: Video },
  { label: "Pay balance", icon: CircleDollarSign },
];

const statusStyles: Record<OverviewCard["statusTone"], string> = {
  teal: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  neutral: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

export default function PatientPortalHome() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      <FadeIn>
      <section>
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
          Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {overviewCards.map(({ label, value, status, statusTone, icon: Icon }) => (
            <button
              key={label}
              className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" strokeWidth={1.75} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[statusTone]}`}>
                  {status}
                </span>
              </div>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{label}</p>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-base font-semibold text-slate-900 dark:text-white">{value}</p>
                <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
          Quick actions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {quickActions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex flex-col cursor-pointer items-center justify-center gap-2 h-28 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 hover:bg-teal-50/50 dark:hover:bg-teal-500/5 transition-all"
            >
              <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300" strokeWidth={1.75} />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center px-2">
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>
      </FadeIn>
    </div>
  );
}