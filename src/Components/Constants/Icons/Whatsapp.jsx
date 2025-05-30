"use client";
import React from 'react'
import { useTheme } from "@mui/material";

const Whatsapp = () => {
    const theme = useTheme();

    return (
        <>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="49" height="49" rx="8" fill="url(#paint0_linear_0_1)"/>
                <path d="M14.7704 18.6756C14.9371 17.3577 16.6499 15.5665 18.0092 15.7652L18.007 15.763C19.3299 16.0144 20.3771 18.2913 20.9676 19.3151C21.386 20.0579 21.1143 20.8106 20.7241 21.1281C20.1976 21.5525 19.3744 22.1379 19.5471 22.7258C19.8542 23.7708 23.5 27.4167 25.2932 28.4531C25.9719 28.8454 26.4641 27.8107 26.8844 27.2806C27.1897 26.8729 27.943 26.6292 28.6841 27.0317C29.791 27.6763 30.8337 28.4254 31.7979 29.2688C32.2795 29.6713 32.3925 30.2661 32.0588 30.8948C31.4711 32.0021 29.7713 33.4623 28.5374 33.1656C26.3823 32.6474 17.6667 29.2687 14.8672 19.4804C14.7097 19.0174 14.7493 18.8423 14.7704 18.6756Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.5 39.8124C21.7156 39.8124 20.7283 39.5088 19.125 38.9711L15.7596 40.6538C13.8203 41.6234 13.0673 41.1393 13.0673 38.9711V35.2692C9.92686 32.3408 8.35577 29.1326 8.35577 24.4999C8.35577 15.6404 14.6405 9.35571 23.5 9.35571C32.3595 9.35571 38.6442 15.6404 38.6442 24.4999C38.6442 33.3594 32.3595 39.8124 23.5 39.8124ZM14.75 34.1691L13.8224 33.3042C11.3825 31.0292 10.375 28.4857 10.375 24.4999C10.375 17.2512 16.2513 11.3749 23.5 11.3749C30.7488 11.3749 36.625 17.2512 36.625 24.4999C36.625 31.7487 30.7488 37.6249 23.5 37.6249C22.0625 37.6249 21.3884 37.4951 20.0524 37.0471L18.904 36.662L14.75 38.7389V34.1691Z" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="24.5" y1="0" x2="24.5" y2="49" gradientUnits="userSpaceOnUse">
                        <stop stopColor={`${theme.palette.primary.main}`} />
                        <stop offset="1" stopColor={`${theme.palette.secondary.main}`} />
                    </linearGradient>
                </defs>
            </svg>


        </>
    )
}

export default Whatsapp
