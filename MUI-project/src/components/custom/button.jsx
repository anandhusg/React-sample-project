import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'
import React from 'react'
const CustomButton = ({
    backgroundColor,
    colour,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartBtn,
    width

}) => {
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: backgroundColor,
        color: colour,
        fontWeignt: '1em',
        fontSize: "16px",
        fontWeight: '700',
        cursor: 'pointer',
        borderRadius: '11px',
        border: '3px solid transparent',
        textTransform:'none',
        width: width,
        '&:hover':
        {
            color: backgroundColor,
            backgroundColor: colour,
            border: `3px solid ${backgroundColor} `
        },

        [theme.breakpoints.down('md')]: {
            margin: (welcomeBtn || getStartBtn) && theme.spacing(0, 'auto', 0, 'auto'),
            width: (welcomeBtn || getStartBtn) && '100%'
        },
        [theme.breakpoints.down('sm')]: {
            margin: (welcomeBtn || getStartBtn) && theme.spacing(0, 'auto', 0, 'auto'),
            width: (welcomeBtn || getStartBtn) && '100%'
        }

    }));
    return (
        <CustomButton >{buttonText}</CustomButton>
    )
}


export default CustomButton