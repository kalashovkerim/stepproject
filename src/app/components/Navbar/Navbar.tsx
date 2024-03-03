'use client';
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {navbarCont} from "@/app/components/Navbar/Navbar.sx";
import Image from "next/image";
import DownIcon from "@/app/components/Icons/DownIcon";
import { usePathname } from "next/navigation";



export const Navbar = () =>  {


    const pathname = usePathname();
    const pageName = pathname.split('/').pop();

    return (
        <Box sx={navbarCont}>
            <Box>
                <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}>{pageName}</Typography>
                <Typography>View, search for and add new staff</Typography>
            </Box>
            <Box sx={{display: 'flex',flexDirection: 'row',gap: '16px',alignItems: 'center'}}>
                <Image style={{borderRadius: '24px'}} src="/images/avatar.png" height={50} width={50} alt={'avatar'}/>
                <Box>
                    <Typography sx={{fontWeight: '400px'}}>Otor John</Typography>
                    <Typography>HR Office</Typography>
                </Box>
                <DownIcon/>
            </Box>
        </Box>
    );
}


export default Navbar;