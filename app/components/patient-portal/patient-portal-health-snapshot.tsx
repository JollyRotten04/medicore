import { HeartPulse, Activity, Wind, ShieldAlert, Droplet, Ruler, Weight, Gauge, Pill } from "lucide-react";
import FadeIn from "../fade-in";

interface VitalCard {
  label: string;
  value: string;
  unit: string;
  status: string;
  statusTone: "teal" | "amber" | "neutral";
  icon: React.ElementType;
}

const vitals: VitalCard[] = [
  { label: "Blood pressure", value: "118/76", unit: "mmHg", status: "Normal", statusTone: "teal", icon: HeartPulse },
  { label: "Heart rate", value: "72", unit: "bpm", status: "Resting", statusTone: "teal", icon: Activity },
  { label: "Blood oxygen", value: "98", unit: "% SpO2", status: "Normal", statusTone: "teal", icon: Wind },
  { label: "Known allergies", value: "Penicillin", unit: "", status: "Flagged", statusTone: "amber", icon: ShieldAlert },
];

const statusStyles: Record<VitalCard["statusTone"], string> = {
  teal: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  neutral: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

const details = [
  { label: "Blood type", value: "B+", icon: Droplet },
  { label: "Height", value: "173 cm (5'8\")", icon: Ruler },
  { label: "Weight", value: "65 kg (143.3 lbs)", icon: Weight },
  { label: "Medications", value: "Amlodipine (5mg)", icon: Pill },
];

export default function PatientPortalHealth() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeIn>
        <section>
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
            Overview
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {vitals.map(({ label, value, unit, status, statusTone, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 transition-all"
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
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {value}
                  {unit && <span className="ml-1 text-sm font-normal text-slate-400 dark:text-slate-500">{unit}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
            Additional information
          </h2>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
            {details.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center justify-between px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500" strokeWidth={1.75} />
                  <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{value}</span>
              </div>
            ))}

            <div className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-3">
                <Gauge className="h-4 w-4 text-slate-400 dark:text-slate-500" strokeWidth={1.75} />
                <span className="text-sm text-slate-500 dark:text-slate-400">BMI</span>
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                21.7 <span className="ml-1 text-teal-600 dark:text-teal-400">Normal</span>
              </span>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}