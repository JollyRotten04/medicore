"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;      // ms, for staggering multiple children
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node); // only fade in once
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                ${className}`}
        >
            {children}
        </div>
    );
}