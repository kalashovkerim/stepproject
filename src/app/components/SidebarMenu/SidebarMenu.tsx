import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {sideBarCont} from "@/app/components/SidebarMenu/SidebarMenu.sx";
import LogoIcon from "@/app/components/Icons/LogoIcon";

export const SidebarMenu = () =>  {

    const menus = [
        {
            title: 'Dashboard',
        },
        {
            title: 'Staff',
        },
        {
            title: 'Payment Voucher',
        },
        {
            title: 'Payroll',
        },
        {
            title: 'Memo',
        },
        {
            title: 'Circulars',
        },
        {
            title: 'Maintenance',
        },
        {
            title: 'Logistics',
        },
        {
            title: 'Office Budget',
        },
        {
            title: 'Stocks and Inventory',
        },
        {
            title: 'Notifications',
        },
        {
            title: 'Capacity Building',
        },
        {
            title: 'Procurements',
        },
        {
            title: '',
        },
        {
            title: '',
        },
    ];

    return (
        <Box sx={sideBarCont}>
            <Box sx={{display: 'flex',justifyContent: 'center',flexDirection: 'column',alignItems: 'center', gap: '4px',paddingTop:'32px'}}>
                <LogoIcon/>
                <Typography sx={{color: '#14ADD6'}}>UiUxOtor</Typography>
                <Typography>ERP System</Typography>
            </Box>
            <Box sx={{display:'flex', gap: '8px', flexDirection: 'column',width: '100%'}}>
                {menus.map((item, itemIndex) => (
                    <Box sx={{width: '100%',height: '50px',padding: '13px 20px',backgroundColor: item.title === 'Staff' ? '#F2F7FF': 'white', '&:hover': {
                            backgroundColor: "#F2F7FF"
                        }}}>
                        <Typography key={itemIndex}>{item.title}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default SidebarMenu;