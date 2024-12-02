

import { Container } from '@mui/material'
import { Box,  Typography } from '@mui/material'
import Logo from '../../assets/logos.png'
import Stars from '../../assets/Star.png'
import MainLogo from '../../assets/logo.png'
import { styled } from '@mui/material/styles';

import React from 'react'

function Logos() {

    const Custbox = styled(Box)(({ theme }) => ({
        // display:'flex',
        // flexDirection:'column'
        [theme.breakpoints.down('md')]:
        {
            marginBottom: '40px'
        }
    })
    )
    const Custcontainer = styled(Container)(({ theme }) => ({

        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:
        {
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            marginBottom: theme.spacing(4)

        }

    })
    )


    return (
        <Box sx={{ color: '#707070', marginTop: '50px' }}>
            <Custcontainer
                maxWidth="xl"

                sx={{ display: 'flex', justifyContent: 'space-between', }}
            >
                <Custbox>
                    <img src={MainLogo} alt="" style={{ maxWidth: '100%' }} /> <br />

                    <Typography variant='bosy2' sx={{ display: 'inline-block', paddingTop: "16px", }} >
                        More than 459000000 customers

                    </Typography>
                </Custbox>
                <Custbox >

                    <img  src={Stars} alt="" style={{ maxWidth: '100%', }} /> <br />

                    <Typography variant='bosy2' sx={{ display: 'inline-block', paddingTop: "20px", }}>
                        star rating (more than 5k+ reviews)
                    </Typography>
                </Custbox>


            </Custcontainer>

            <Container
                sx={{ display: 'flex', justifyContent: 'center', }}
                maxWidth="xl"
            >
                <img style={{ width: '100%' }} src={Logo} alt="" />

            </Container>


        </Box>
    )
}

export default Logos