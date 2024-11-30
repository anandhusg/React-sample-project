import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Buy from '../../assets/buy_icon.png'
import Sell from '../../assets/sell_icon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../custom/button';
function Guids() {
    const Custbox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
        
    })
    )
    const Imagebox = styled(Container)(({ theme }) => ({
        marginBottom: '100px',
        marginTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:
        {
            flexDirection: 'column'
        }

    })
    )
    return (
        <Custbox>
            <box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',


            }}>
                <div style={{ border: '5px solid #0F1B4C', width: '60px', margin: '0 auto', borderRadius: '3px' }}>

                </div>

                <Typography
                    sx={{ fontWeight: '600', my: '20px', color: '#0F1B4C' }}
                    variant='h4'>How To Book ?</Typography>
                <Typography sx={{ color: '#707070', variant: "body1" }}>Everything you need to know when you book for advanced slot</Typography>


            </box>
            <Imagebox
                sx={{ color: '#707070' }}
                maxWidth="md"
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img style={{ maxWidth: '100%', margin: '0 auto' }} src={Sell} alt="" />

                    <Typography variant='h6' sx={{ display: 'inline-block', paddingTop: "20px", }} >
                        Order Guides
                    </Typography>



                    <Box sx={{
                        mt: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{ color: '#1a8cff' ,fontWeight:'600'}} variant='body2'>

                            How to order


                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#1a8cff' }} />

                    </Box>

                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img style={{ maxWidth: '100%', margin: '0 auto' }} src={Sell} alt="" />

                    <Typography variant='h6' sx={{ display: 'inline-block', paddingTop: "20px", }} >
                        Booking Guides
                    </Typography>



                    <Box sx={{
                        mt: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{ color: '#1a8cff',fontWeight:'600' }} variant='body2'>

                            How to book


                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#1a8cff' }} />

                    </Box>

                </Box> <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img style={{ maxWidth: '100%', margin: '0 auto' }} src={Buy} alt="" />

                    <Typography variant='h6' sx={{ display: 'inline-block', paddingTop: "20px",  }} >
                        Payment guides
                    </Typography>



                    <Box sx={{
                        mt: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{ color: '#1a8cff',fontWeight:'600' }} variant='body2'>

                            Payment method


                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#1a8cff' }} />

                    </Box>

                </Box>



            </Imagebox>




            <Box sx={{ mb: '20px' }}>
                <CustomButton
                    backgroundColor='#0F1B4C'
                    colour='#fff'
                    buttonText='See full guide'
                    getStartBtn={true}
                    width='200px'
                >
                </CustomButton>

            </Box>


        </Custbox>
    )
}

export default Guids