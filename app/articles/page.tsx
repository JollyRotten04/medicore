import HeroImage from "../components/hero-image";
import Image from "next/image";

const articles = [
    {
        picture: '/lounge.svg',
        name: "10 Simple Habits for a Healthier Life",
    },
    {
        picture: '/lounge.svg',
        name: "Why Annual Health Checkups Matter",
    },
    {
        picture: '/lounge.svg',
        name: "Understanding Your Vital Signs",
    },
    {
        picture: '/lounge.svg',
        name: "When Was Your Last Health Checkup?",
    },
    {
        picture: '/lounge.svg',
        name: "Small Lifestyle Changes That Can Improve Your Health",
    },
    {
        picture: '/lounge.svg',
        name: "How Much Sleep Do You Really Need?",
    },
    {
        picture: '/lounge.svg',
        name: "The Importance of Staying Hydrated",
    },
    {
        picture: '/lounge.svg',
        name: "Building a Balanced and Sustainable Diet",
    },
    {
        picture: '/lounge.svg',
        name: "Understanding Preventive Healthcare",
    },
    {
        picture: '/lounge.svg',
        name: "How to Prepare for Your Annual Physical Examination",
    },
    {
        picture: '/lounge.svg',
        name: "5 Ways to Protect Your Heart",
    }
];

export default function OurArticlesPage(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">
                <HeroImage></HeroImage>

                <div className="w-full bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60 sm:py-20">

                    <div className="w-full max-w-5xl mx-auto flex flex-col">

                        <p className="font-serif text-xl sm:text-2xl text-center text-[#11537B] dark:text-white">
                            Health Articles
                        </p>

                        <p className="text-sm font-light text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto mt-3">
                            Practical guidance for staying well, written by our care team.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                            {articles.map((article) => (
                                <div
                                    key={article.name}
                                    className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                                >
                                    <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 shrink-0">
                                        <Image
                                            className="object-cover"
                                            src={article.picture}
                                            alt={article.name}
                                            fill
                                        />
                                    </div>

                                    <div className="flex flex-col px-5 py-5">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                                            {article.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}