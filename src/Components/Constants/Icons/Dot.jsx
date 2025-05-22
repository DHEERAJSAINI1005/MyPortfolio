"use client";
import { useTheme } from "@mui/material";
export default function Dot(props) {
    const theme = useTheme();
    return (
        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <ellipse cx="3.5" cy="3.5" rx="3.5" ry="3.5" fill={`${theme.palette.primary.main}`}/>
        </svg>
    )
}