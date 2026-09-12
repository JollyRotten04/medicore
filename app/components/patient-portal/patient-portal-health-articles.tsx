import Image from "next/image";
import ReceptionDesk from '../../../public/reception-desk.png';

const articles = [
    {
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        image: ReceptionDesk,
    },
    {
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        image: ReceptionDesk,
    },
    {
        title: "The Best Reception Desk Experience: How to Properly Greet Distressed Patients to Calm Them",
        image: ReceptionDesk,
    },
];

export default function PatientPortalHealthArticles() {
    return (
        <>
            <div className="flex flex-col h-full">
                <p className="text-lg text-black dark:text-white font-bold">Health Articles</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-normal mb-4">
                    Schedule for your medicine intake throughout the day
                </p>

                <div className="flex flex-col gap-6 overflow-y-auto">
                    {articles.map((article, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-sm text-black dark:text-white font-semibold text-center mt-3">
                                {article.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}