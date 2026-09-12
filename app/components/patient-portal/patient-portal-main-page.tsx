import Image from "next/image";
import CalendarIcon from '../../../public/calendarIcon.svg';
import ClockIcon from '../../../public/clockIcon.svg';
import Location from '../../../public/location.svg';
import Carousel from '../carousel';
import { usePageContext } from "../../context/page-context";
import PatientPortalHome from '../patient-portal/patient-portal-home';
import PatientPortalHealthSnapshot from "./patient-portal-health-snapshot";
import PatientPortalActiveCarePlan from "./patient-portal-active-care-plan";
import PatientPortalMedication from "./patient-portal-medication";
import PatientPortalHealthArticles from "./patient-portal-health-articles";
import PatientPortalInsurance from "./patient-portal-insurance";
import PatientPortalOutsideDocuments from "./patient-portal-outside-documents";
import PatientPortalBookAppointment from "./patient-portal-book-appointment";

interface Appointment {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    location: string;
}

const appointments: Appointment[] = [
    {
        doctorName: "Dr. Wang Wong",
        specialty: "General Medicine",
        date: "June 25, 2026",
        time: "10:00 AM",
        location: "St. Raphael Medical Center",
    },
    {
        doctorName: "Dr. Wang Wong",
        specialty: "General Medicine",
        date: "June 25, 2026",
        time: "10:00 AM",
        location: "St. Raphael Medical Center",
    },
    {
        doctorName: "Dr. Wang Wong",
        specialty: "General Medicine",
        date: "June 25, 2026",
        time: "10:00 AM",
        location: "St. Raphael Medical Center",
    },
    {
        doctorName: "Dr. Wang Wong",
        specialty: "General Medicine",
        date: "June 25, 2026",
        time: "10:00 AM",
        location: "St. Raphael Medical Center",
    },
    {
        doctorName: "Dr. Wang Wong",
        specialty: "General Medicine",
        date: "June 25, 2026",
        time: "10:00 AM",
        location: "St. Raphael Medical Center",
    },
    // add more appointments here as needed
];

export default function PatientPortalMainPage(){

    const { currentPage, setCurrentPage } = usePageContext();

    const renderPage = () => {
        switch(currentPage) {
          case 'Home':
            return <PatientPortalHome />;
          case 'Health Snapshot':
            return <div><PatientPortalHealthSnapshot></PatientPortalHealthSnapshot></div>;
          case 'Active Care Plan':
            return <div><PatientPortalActiveCarePlan></PatientPortalActiveCarePlan></div>; 
          case 'Medication':
            return <div><PatientPortalMedication></PatientPortalMedication></div>;
          case 'Health Articles':
            return <div><PatientPortalHealthArticles></PatientPortalHealthArticles></div>;
          case 'Insurance':
            return <div><PatientPortalInsurance></PatientPortalInsurance></div>;
          case 'Outside Documents':
            return <div><PatientPortalOutsideDocuments></PatientPortalOutsideDocuments></div>;
          case 'Patient Portal':
            return <div><PatientPortalBookAppointment></PatientPortalBookAppointment></div>;
          default:
            return <PatientPortalHome />;
        }
    };

    return(
        <>
            <div className="w-full bg-[#EDF3F6] dark:bg-gray-900/60 px-4 py-8 sm:py-10">

                <div className="max-w-xl mx-auto w-full flex flex-col gap-6">

                    <div className="flex flex-col">
                        <p className="font-serif text-xl sm:text-2xl text-[#11537B] dark:text-white">
                            Good Day, Goku!
                        </p>
                        <p className="text-sm font-light text-gray-600 dark:text-gray-300 mt-1">
                            {"Hope you're doing well today."}
                        </p>
                    </div>

                    <div className="flex flex-col w-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">

                        <span className="text-xs font-semibold tracking-widest text-[#46667a] dark:text-gray-400 uppercase">
                            Appointments
                        </span>

                        {appointments.length > 0 ? 
                        <>
                            <div className="flex flex-col gap-4 mt-3">

                                <Carousel
                                    items={appointments}
                                    renderItem={(appointment) => (
                                        <div className="flex gap-4 w-full">

                                            <div className="h-14 w-14 aspect-square bg-[#11537B] rounded-full shrink-0"></div>

                                            <div className="flex flex-col">

                                                <p className="text-sm text-gray-900 dark:text-white font-semibold">{appointment.doctorName}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">{appointment.specialty}</p>

                                                <div className="flex flex-col gap-1.5 mt-3">

                                                    <div className="flex gap-2 items-center">
                                                        <Image
                                                            src={CalendarIcon}
                                                            className='h-3.5 w-fit aspect-square dark:invert dark:brightness-0'
                                                            alt="Calendar Icon"
                                                        />
                                                        <p className="text-xs text-gray-600 dark:text-gray-300 font-light">{appointment.date}</p>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <Image
                                                            src={ClockIcon}
                                                            className='h-3.5 w-fit aspect-square dark:invert dark:brightness-0'
                                                            alt="Clock Icon"
                                                        />
                                                        <p className="text-xs text-gray-600 dark:text-gray-300 font-light">{appointment.time}</p>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <Image
                                                            src={Location}
                                                            className='h-3.5 w-fit aspect-square dark:invert dark:brightness-0'
                                                            alt="Location Icon"
                                                        />
                                                        <p className="text-xs text-gray-600 dark:text-gray-300 font-light">{appointment.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                />

                                <button className="bg-[#11537B] hover:bg-[#0d425f] cursor-pointer transition-colors w-full text-white font-semibold text-sm p-2.5 rounded-lg text-center mt-1">
                                    Contact Dr. Wong
                                </button>
                            </div>
                        </>
                        
                        :
                        
                        <>
                            <div className="flex flex-col justify-center items-center text-center gap-3 py-6">

                                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">No pending appointments</p>

                                <button
                                    onClick={() => setCurrentPage("Patient Portal")}
                                    className="bg-[#11537B] hover:bg-[#0d425f] cursor-pointer transition-colors text-white font-semibold text-xs px-4 py-2 rounded-lg text-center"
                                >
                                    Book An Appointment
                                </button>
                            </div>
                        </>}
                    </div>

                    {renderPage()}

                </div>
            </div>
        </>
    );
}