"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AnimatedText from '@/components/AnimatedText';

export default function DropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const homeworks = Array.from({ length: 20 }, (_, i) => `Homework${i + 1}`);

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-purple-text transition-colors animate-fade-down animate-delay-[900ms] animate-out"
            >
                <AnimatedText text='HomeWorks' />
            </button>
            {isDropdownOpen && (
                <div className="absolute top-full -left-1/2 mt-2 w-auto text-nowrap bg-purple-900 shadow-lg py-3 px-4 z-50 animate-fade-up animate-out rounded-b-lg">
                    {homeworks.map((homework, index) => (
                        <Link
                            key={index}
                            href={`/homeworks/${homework}`}
                            className="block px-4 py-2 text-sm text-white hover:bg-purple-500 z-50"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            {homework}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
