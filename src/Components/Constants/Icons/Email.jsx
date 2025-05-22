"use client";
import React from 'react'
import { useTheme } from "@mui/material";

const Email = () => {
    const theme = useTheme();
    
    return (
        <>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="49" height="49" rx="8" fill="url(#paint0_linear_169_2)"/>
                <path d="M14.3221 32.1879L20.9329 24.255M35.4764 32.1879L28.8657 24.255M13 18.9664L22.5525 25.3347C23.4006 25.9001 23.8247 26.1829 24.283 26.2927C24.6881 26.3899 25.1104 26.3899 25.5155 26.2927C25.9739 26.1829 26.3979 25.9001 27.2461 25.3347L36.7986 18.9664M17.2309 33.51H32.5677C34.0487 33.51 34.7892 33.51 35.3548 33.2218C35.8523 32.9683 36.2569 32.5637 36.5104 32.0662C36.7986 31.5006 36.7986 30.7601 36.7986 29.2791V19.2309C36.7986 17.7499 36.7986 17.0094 36.5104 16.4438C36.2569 15.9462 35.8523 15.5417 35.3548 15.2882C34.7892 15 34.0487 15 32.5677 15H17.2309C15.7499 15 15.0094 15 14.4438 15.2882C13.9462 15.5417 13.5417 15.9462 13.2882 16.4438C13 17.0094 13 17.7499 13 19.2309V29.2791C13 30.7601 13 31.5006 13.2882 32.0662C13.5417 32.5637 13.9462 32.9683 14.4438 33.2218C15.0094 33.51 15.7499 33.51 17.2309 33.51Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                    <linearGradient id="paint0_linear_169_2" x1="24.5" y1="0" x2="24.5" y2="49" gradientUnits="userSpaceOnUse">
                        <stop stopColor={`${theme.palette.primary.main}`}/>
                        <stop offset="1" stopColor={`${theme.palette.secondary.main}`}/>
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}

export default Email
