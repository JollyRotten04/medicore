"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PatientLogo from '../../public/patientLogo.svg';
import FacebookIcon from '../../public/facebookIcon.svg';
import GoogleIcon from'../../public/googleIcon.svg';

export default function PatientLoadingLogin(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <div className="flex flex-col h-full w-full justify-center items-center px-6">

                {/* Logo — shifts up as the spinner collapses beneath it */}
                <Image
                    src={PatientLogo}
                    className={`h-36 aspect-square transition-all duration-700 ease-in-out ${
                        loading ? "mb-8" : "mb-4"
                    }`}
                    alt="Patient Logo"
                />

                {/* Spinner + label — collapses and fades out after 5s */}
                <div
                    className={`flex flex-col items-center gap-4 overflow-hidden transition-all duration-700 ease-in-out ${
                        loading ? "max-h-40 opacity-100" : "max-h-0 opacity-0 mb-0"
                    }`}
                >
                    <div className="relative h-10 w-10">
                        <div
                            className="absolute inset-0 rounded-full border-4 border-transparent"
                            style={{
                                borderTopColor: "#2DB6C4",
                                borderRightColor: "#2DB6C4",
                                animation: "spin 0.8s linear infinite",
                            }}
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-[#2DB6C4]/20" />
                    </div>

                    <p className="text-[#2DB6C4] font-semibold text-lg tracking-wide">
                        Loading
                    </p>
                </div>

                {/* Login / Signup form — fades and slides in once loading finishes */}
                <div
                    className={`flex flex-col gap-4 w-full max-w-xs transition-all duration-700 ease-in-out ${
                        loading
                            ? "opacity-0 translate-y-4 max-h-0 pointer-events-none delay-0"
                            : "opacity-100 translate-y-0 max-h-[600px] delay-200"
                    }`}
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email here..."
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2DB6C4]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold">Password:</label>
                        <input
                            type="password"
                            placeholder="••••••••••••"
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2DB6C4]"
                        />
                    </div>

                    <div className="flex flex-col text-center items-center">
                        <p className="text-sm text-black dark:text-white font-semibold">or sign up with</p>

                        <div className="flex w-fit gap-12 mt-4">

                            <Image
                                src={FacebookIcon}
                                className='h-8 w-fit aspect-square transition-all duration-700 ease-in-out'
                                alt="Patient Logo"
                            />

                            <Image
                                src={GoogleIcon}
                                className='h-8 w-fit aspect-square transition-all duration-700 ease-in-out'
                                alt="Patient Logo"
                            />
                        </div>

                        <p className="text-sm text-black dark:text-white font-semibold underline mt-12">{"Don't have an account yet? Sign up now!"}</p>
                    </div>



                    <button className="bg-[#2DB6C4] hover:bg-[#259aa6] transition-colors text-white font-semibold rounded-md py-2 mt-2">
                        Log In
                    </button>

                    {/* <p className="text-xs text-center mt-2 text-gray-500">
                        Don&apos;t have an account?{" "}
                        <span className="underline cursor-pointer text-[#2DB6C4]">Sign up</span>
                    </p> */}
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}