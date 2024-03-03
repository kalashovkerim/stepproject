"use client";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";

export default function AddNewStaff() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div>
            <a style={{color: '#14ADD6'}} onClick={handleGoBack}>Back</a>
        </div>
    );
}
