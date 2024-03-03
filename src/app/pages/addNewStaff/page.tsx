"use client";
import { useRouter } from "next/navigation";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function AddNewStaff() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };


    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        role: '',
    });

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleAddStaff = async () => {
        try {
            console.log('FormData:', formData);
            const response = await fetch('/api/staff', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/success');
            } else {
                console.error('Failed to add staff');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{display: 'flex',flexDirection:'column',gap: '48px'}}>
            <a style={{color: '#14ADD6'}} onClick={handleGoBack}>Back</a>
            <Grid container rowSpacing={4}>
                <Grid item xs={6}>
                    <TextField sx={{width: '290px'}}  id="name"
                               label="Name"
                               variant="outlined"
                               onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={{width: '290px'}}  id="lastName"
                               label="lastName"
                               variant="outlined"
                               onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={{width: '290px'}}  id="phoneNumber"
                               label="phoneNumber"
                               variant="outlined"
                               onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={{width: '290px'}} id="role"
                               label="role"
                               variant="outlined"
                               onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={{width: '290px'}} id="gender"
                               label="gender"
                               variant="outlined"
                               onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Button onClick={handleAddStaff}>Add Staff</Button>
        </div>
    );
}
