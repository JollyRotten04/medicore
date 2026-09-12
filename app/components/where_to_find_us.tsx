import Map from '../../public/map.svg';
import Image from 'next/image';
import FadeIn from './fade-in';

const locationDetails = [
    {
        label: "Address",
        value: "123 Gerard Way, Example St., Sample City 123",
    },
    {
        label: "Office Hours",
        value: "Mondays – Saturdays, 7:00 AM – 6:00 PM",
    },
    {
        label: "Contact",
        value: "09987654321 / 09123456789",
    },
];

export default function WhereToFindUs() {
  return (
    <>
      <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">

        <FadeIn>
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

                <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                    Where To Find Us
                </p>

                <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mt-3">
                    Visit our medical center, conveniently located and easy to reach.
                </p>

                <div className="w-full mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">

                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-gray-100 dark:bg-gray-700">
                        <Image
                            src={Map}
                            fill
                            className="object-cover"
                            alt="Map showing St. Raphael Medical Center location"
                        />
                    </div>

                    <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-900">
                        {locationDetails.map((detail) => (
                            <div key={detail.label} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 px-5 py-4">
                                <p className="text-xs font-semibold text-[#46667a] dark:text-white sm:w-28 shrink-0">
                                    {detail.label}
                                </p>
                                <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="px-5 pb-5 pt-1">
                        <button className="w-full sm:w-auto bg-[#11537B] hover:bg-[#0d425f] transition-colors text-white text-sm font-semibold rounded-lg px-6 py-2.5">
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </FadeIn>
      </div>
    </>
  );
}