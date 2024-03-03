"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";


interface StaffMember {
    id: number;
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    role: string;
}

export default function AllStaff() {
    const router = useRouter();

    const handleAddNewStaffClick = () => {
        router.push("./addNewStaff");
    };


    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        const fetchStaffList = async () => {
            try {
                const response = await fetch("/api/staff");
                if (response.ok) {
                    const data = await response.json();
                    setStaffList(data);
                } else {
                    console.error("Failed to fetch staff list");
                }
            } catch (error) {
                console.error("Error fetching staff list", error);
            }
        };

        fetchStaffList();
    }, []);

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "24px 20px",
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>{staffList.length}</Typography>
                    <Typography>Total number of staff</Typography>
                </Box>
                <Button onClick={handleAddNewStaffClick}>Add New Staff</Button>
            </Box>
            <Box
                sx={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    borderRadius: "10px 10px 0px 0px",
                    padding: "24px 20px",
                }}
            >
                <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>All Staff</Typography>
                <Typography>Showing 12 per page</Typography>
            </Box>
            <Box sx={{backgroundColor: 'white',padding: "24px 20px",borderRadius: '0px 0px 10px 10px'}}>
                <table>
                    <thead>
                    <tr style={{display: 'flex',flexDirection: 'row',gap: '70px'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody style={{display: 'flex',flexDirection: 'column',gap: '40px',marginTop: '40px'}}>
                    {staffList.map((staff: StaffMember) => (
                        <tr style={{display: 'flex',flexDirection: 'row',gap: '90px'}} key={staff.id}>
                            <td><Typography>{staff.id}</Typography></td>
                            <td><Typography>{staff.name}</Typography></td>
                                <td><Typography>{staff.lastName}</Typography></td>
                                    <td><Typography>{staff.gender}</Typography></td>
                                        <td><Typography>{staff.phoneNumber}</Typography></td>
                                            <td> <Typography>{staff.role}</Typography></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Box>
        </Box>
    );
}
