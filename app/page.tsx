"use client";

import Header from "./components/header";
import TopBanner from "./components/top-banner";
import LandingPage from './components/landing-page';
import AboutUsPage from "./about/page";
import OurServicesPage from "./services/page";
import OurHealthPackagesPage from "./health-packages/page";
import OurArticlesPage from "./articles/page";
import ContactUs from "./contacts/page";
import PatientPortalPage from "./patient-portal/page";
import Footer from './components/footer';
import NavBar from "./components/navbar";
import { useState } from "react";
import { usePageContext } from "./context/page-context";

export default function Home(){

  const [navbarOpen, setNavbarOpen] = useState(false);

  const { currentPage, isPatientPortal } = usePageContext();

  function openNavbar(value: boolean){
    setNavbarOpen(value);
  }

  const renderPage = () => {
    if (isPatientPortal) {
      return <div><PatientPortalPage></PatientPortalPage></div>;
    }

    switch(currentPage) {
      case 'Home':
        return <LandingPage />;
      case 'About Us':
        return <div><AboutUsPage></AboutUsPage></div>;
      case 'Services':
        return <div><OurServicesPage></OurServicesPage></div>; 
      case 'Health Packages':
        return <div><OurHealthPackagesPage></OurHealthPackagesPage></div>;
      case 'Health Articles':
        return <div><OurArticlesPage></OurArticlesPage></div>;
      case 'Contacts':
        return <div><ContactUs></ContactUs></div>;
      case 'Patient Portal':
        return <div><PatientPortalPage></PatientPortalPage></div>;
      default:
        return <LandingPage />;
    }
  };

  return(
    <div className="min-h-dvh w-full flex flex-col overflow-x-hidden bg-[#EDF3F6] dark:bg-gray-900/60 transition-colors duration-300">

      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          navbarOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => openNavbar(false)}
      />

      <div
        className={`fixed top-0 left-0 h-dvh w-64 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          navbarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavBar navbarOpen={navbarOpen} openNavbar={openNavbar} />
      </div>

      <div className="flex flex-col">
        <Header openNavbar={openNavbar} navbarOpen={navbarOpen} />
        <TopBanner />
      </div>

      <div className="flex-1 flex flex-col">
        {renderPage()}
      </div>

      {!isPatientPortal && <Footer></Footer>}
    </div>
  );
}