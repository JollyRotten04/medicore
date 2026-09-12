import HeroImage from "../components/hero-image";
import ContactMediums from "../components/contact-mediums";

export default function ContactUs(){
    return(
        <>
            <div className="flex flex-col w-full shrink-0">
                <HeroImage></HeroImage>
                <ContactMediums></ContactMediums>
            </div>
        </>
    );
}