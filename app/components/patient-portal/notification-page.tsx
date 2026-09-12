import { useNotifications } from "../../context/notification-context";

interface Notification {
    type: "completed" | "set" | "ordered";
    title: string;
    message: string;
}

const notifications: Notification[] = [
    {
        type: "completed",
        title: "Appointment Completed",
        message: "Your appointment with Dr. Jackie Dafoe has been completed on July 28, 2026 at 2:00 PM",
    },
    {
        type: "set",
        title: "Appointment Set",
        message: "Your appointment with Dr. Jackie Dafoe has been set on July 28, 2026 at 2:00 PM",
    },
    {
        type: "ordered",
        title: "Medicine Ordered",
        message: "You successfully bought 12 pieces of Amlodipine (5mg). Check the status of your delivery here.",
    },
];

function dotColor(type: Notification["type"]) {
    switch (type) {
        case "completed":
            return "bg-green-400";
        case "set":
            return "bg-pink-400";
        case "ordered":
            return "bg-blue-400";
    }
}

export default function NotificationPage(){

    const { setNotificationsOpen } = useNotifications();

    return(
        <>
            <div className="w-full bg-[#EDF3F6] dark:bg-gray-900/60 min-h-full px-4 sm:px-6 py-6 sm:py-10">

                <div className="max-w-xl mx-auto w-full flex flex-col gap-4 sm:gap-6">

                    <button
                        onClick={() => setNotificationsOpen(false)}
                        className="bg-[#11537B] hover:bg-[#0d425f] cursor-pointer transition-colors w-fit text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-lg text-center"
                    >
                        Back
                    </button>

                    <div className="flex flex-col">
                        <p className="font-serif text-lg sm:text-2xl text-[#11537B] dark:text-white">
                            Notifications
                        </p>
                    </div>

                    {/* Notifications Container */}
                    <div className="flex flex-col gap-3 sm:gap-4">

                        {notifications.map((notification, idx) => (
                            <div
                                key={idx}
                                className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white dark:bg-gray-800 shadow-sm rounded-2xl border border-gray-100 dark:border-gray-700"
                            >
                                <div className={`h-10 w-10 sm:h-12 sm:w-12 aspect-square rounded-full shrink-0 ${dotColor(notification.type)}`}></div>

                                <div className="flex flex-col min-w-0">
                                    <p className="text-xs sm:text-sm text-gray-900 dark:text-white font-semibold">
                                        {notification.title}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light mt-0.5 leading-relaxed">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col mt-2">
                            <hr className="border-t border-gray-200 dark:border-gray-700" />
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold text-center mt-3">
                                End of results
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}