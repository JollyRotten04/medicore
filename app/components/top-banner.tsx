import Image from 'next/image';
import Schedule from '../../public/schedule.svg';
import Phone from '../../public/phone.svg';
import Email from '../../public/email.svg';

export default function TopBanner(){
    return(
        <>
            <div className="bg-black dark:bg-white p-2 w-full flex justify-center gap-2 lg:gap-24">

                <div className="flex items-center gap-1">

                    <Image
                    src={Schedule}
                    className="h-3 lg:h-4 w-fit invert brightness-0 dark:invert-0 dark:brightness-100"
                    alt="Picture of the author"></Image>

                    <p className="text-white dark:text-black text-[0.55rem] lg:text-sm">Mon - Sat 7:00 AM - 6:00 PM</p>
                </div>

                <div className="flex items-center gap-1">

                    <Image
                    src={Email}
                    className="h-2 lg:h-4 w-fit invert brightness-0 dark:invert-0 dark:brightness-100"
                    alt="Picture of the author"></Image>

                    <p className="text-white dark:text-black text-[0.55rem] lg:text-sm">contactus@straphael.com</p>
                </div>

                <div className="flex items-center gap-1">

                    <Image
                    src={Phone}
                    className="h-3 lg:h-4 w-fit invert brightness-0 dark:invert-0 dark:brightness-100"
                    alt="Picture of the author"></Image>

                    <p className="text-white dark:text-black text-[0.55rem] lg:text-sm">09123456789 | 09987654321</p>
                </div>
            </div>
        </>
    );
}