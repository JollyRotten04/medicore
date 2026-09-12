import Carousel from "../../components/carousel";
import FadeIn from "../fade-in";

const carePlans = [
    {
        title: "Hypertension Management",
        doctor: "Dr. Grock Mendez",
        startDate: "June 12, 2026",
        progress: 45, // percentage 0-100
    },
    {
        title: "Diabetes Management",
        doctor: "Dr. Grock Mendez",
        startDate: "June 12, 2026",
        progress: 70,
    },
    {
        title: "Weight Management",
        doctor: "Dr. Grock Mendez",
        startDate: "June 12, 2026",
        progress: 20,
    },
    {
        title: "Sex Education",
        doctor: "Dr. Grock Mendez",
        startDate: "June 12, 2026",
        progress: 60,
    },
    {
        title: "Psychological Help",
        doctor: "Dr. Grock Mendez",
        startDate: "June 12, 2026",
        progress: 50,
    },
];

export default function PatientPortalActiveCarePlan() {
  return (
    <>
      <FadeIn>
        <div className="w-full px-4 py-8 sm:py-10">

          <div className="max-w-xl mx-auto w-full flex flex-col gap-6">

            <div className="flex flex-col">
              <p className="font-serif text-xl sm:text-2xl text-[#11537B] dark:text-white">
                Active Care Plan
              </p>
              <p className="text-sm font-light text-gray-600 dark:text-gray-300 mt-1">
                Track your ongoing treatment plans and progress.
              </p>
            </div>

            <Carousel
              items={carePlans}
              renderItem={(plan) => (
                <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 max-w-xl w-full">

                  <p className="text-sm text-gray-900 dark:text-white font-semibold text-center mb-3">
                    {plan.title}
                  </p>

                  <div className="flex flex-col w-full gap-0.5">
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-light text-start">
                      {plan.doctor}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-light text-start">
                      Started: {plan.startDate}
                    </p>
                    <span className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase text-start mt-2">
                      Progress
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 mt-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#11537B] transition-all duration-500 ease-out"
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex-1" />

                  <div className="border-t border-gray-100 dark:border-gray-700 mt-4 pt-3">
                    <button className="text-xs text-[#11537B] dark:text-blue-400 font-semibold hover:underline">
                      View Care Plan
                    </button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </FadeIn>
    </>
  );
}