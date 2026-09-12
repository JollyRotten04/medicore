import Image from 'next/image';
import WebsiteHeroImage from '../../public/websiteHeroImage.jpg';

export default function WebpageHome(){
    return(
        <>
            <div className="flex flex-col h-full w-full">

                <Image
                src={WebsiteHeroImage}
                className="object-fill"
                alt="Picture of the author"></Image>
            </div>
        </>
    );
}