"use client";
import React from 'react'
import { useTheme } from "@mui/material";

const Location = () => {
    const theme = useTheme();
    return (
        <>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="49" height="49" rx="8" fill="url(#paint0_linear_83_6)"/>
                <path d="M24.5 37.625C29.6042 32.375 34.7084 27.6739 34.7084 21.875C34.7084 16.076 30.1379 11.375 24.5 11.375C18.8621 11.375 14.2917 16.076 14.2917 21.875C14.2917 27.6739 19.3959 32.375 24.5 37.625Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.5 24.5C26.1109 24.5 27.4166 23.1942 27.4166 21.5833C27.4166 19.9725 26.1109 18.6666 24.5 18.6666C22.8891 18.6666 21.5833 19.9725 21.5833 21.5833C21.5833 23.1942 22.8891 24.5 24.5 24.5Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                    <linearGradient id="paint0_linear_83_6" x1="24.5" y1="0" x2="24.5" y2="49" gradientUnits="userSpaceOnUse">
                        <stop stopColor={`${theme.palette.primary.main}`} />
                        <stop offset="1" stopColor={`${theme.palette.secondary.main}`}/>
                    </linearGradient>
                </defs>
            </svg>

        </>
    )
}

export default Location
