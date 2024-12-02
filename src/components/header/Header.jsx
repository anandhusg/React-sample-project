// import styled from '@mui/system'
// import { useState } from 'react';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Box,  Typography, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
// import { red } from '@mui/material/colors'
import CustomButton from '../custom/button';
import logo from '../../assets/logo.png';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Header() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const navLinks = [
        {
            name: 'Home',
            path: '/',
            icon: '<HomeIcon></HomeIcon>'
        },
        {
            name: 'Dishes',
            path: '/',
            icon: '<FeaturedPlayListIcon/>'

        }, {
            name: 'Servies',

            path: '/',
            icon: '<AccountBoxIcon/>'

        }, {
            name: 'About Us',
            path: '/',
            icon: '<InboxIcon/>'

        },

    ]
    const LinkBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        fontSize: "20px",

        [theme.breakpoints.down('md')]:
        {
            display: 'none'
        }

    }))
    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "16px",
        fontWeight: '500',
        cursor: 'pointer',
        '&:hover':
        {
            color: '#fff',
            transition: '.5s'
        }
    }))

    const Vimg = styled('img')(({ theme }) => ({

        cursor: 'pointer',
        [theme.breakpoints.down('md')]:
        {
            display: 'none'
        }

    }))
    const Icon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.up('md')]:
        {
            display: 'none'
        }

    }))
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 15px', maxWidth: 'auto',
            backgroundColor: '#FED801',
            color: '#4d4d4d',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Icon onClick={toggleDrawer(true)} />
                <Vimg src={logo} alt="" />
                <Drawer
                    anchor='left'
                    open={open} onClose={() => setOpen(false)}>
                    <List>
                        {navLinks.map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index === 0 && <HomeIcon></HomeIcon>}
                                        {index === 1 && <FeaturedPlayListIcon></FeaturedPlayListIcon>}
                                        {index === 2 && <AccountBoxIcon></AccountBoxIcon>}
                                        {index === 3 && <InboxIcon></InboxIcon>}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <LinkBox>
                    {
                        navLinks.map((item, index) => (
                            <NavLink key={index}>
                                {item.name}
                            </NavLink>
                        ))
                    }

                </LinkBox>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                <NavLink>
                    Signup
                </NavLink>
                <CustomButton
                    backgroundColor='#0F1B4C'
                    colour='#fff'
                    buttonText='Login'

                />

            </Box>
        </Box>
    )
}

