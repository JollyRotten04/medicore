import PatientPortalMainPage from "../components/patient-portal/patient-portal-main-page";

import NotificationPage from "../components/patient-portal/notification-page";
import { useNotifications } from "../context/notification-context";

export default function PatientPortalPage(){

    const { notificationsOpen } = useNotifications();
    return(
        <>
            <div className="flex flex-col h-dvh w-full shrink-0 overflow-x-hidden dark:bg-gray-900/60">

                {/* Render if loading */}
                {/* <PatientLoadingLogin></PatientLoadingLogin> */}
                {/* <PatientPortalMainPage></PatientPortalMainPage> */}
                {notificationsOpen ? 
                <>
                    <NotificationPage></NotificationPage>
                </>
                
                :
                
                <>
                    <PatientPortalMainPage></PatientPortalMainPage>
                    {/* <PatientPortalBookAppointment></PatientPortalBookAppointment> */}
                </>}
            </div>
        </>
    );
}