

import { Box, Typography } from '@mui/material'

import { styled } from '@mui/material/styles';
import Twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
function footer() {
    const CustomBox = styled(Box)(({ theme }) => ({
        color: '#4d4d4d',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '30px 0 30px 0',

        [theme.breakpoints.down('md')]:
        {
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column'
        }

    }))
    const BoxItem = styled(Box)(({ theme }) => ({

        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5em',

        [theme.breakpoints.down('md')]:
        {
            alignItems: 'center',
            marginTop: '20px',
            flexDirection: 'column'
        }


    }))
    const Iconbox = styled(Box)(({ theme }) => ({

        display: 'flex',
        alignItems: 'center',
        gap: '3px'


    }))

    const featured = [
        {
            name: 'Guids',
            path: '/'
        },
        {
            name: 'Services',
            path: '/'
        }, {
            name: 'Contact Us',
            path: '/'
        },

    ]
    const overview = [
        {
            name: 'Location',
            path: '/'
        },
        {
            name: 'Partnerships',
            path: '/'
        }, {
            name: 'Terms of use & privcy policys',
            path: '/'
        },

    ]
    return (
        <>
            <CustomBox sx={{ backgroundColor: '#ffeb99' }}>

                <BoxItem>

                    <Typography variant='body1' sx={{ fontWeight: '700', marginBottom: '15px' }} >

                        Featured

                    </Typography>

                    {
                        featured.map((item, index) => (

                            <Typography key={index} variant='body1'>

                                {item.name}
                            </Typography>
                        ))

                    }





                </BoxItem>
                <BoxItem>
                    <Typography variant='body1' sx={{ fontWeight: '700', marginBottom: '15px' }} >

                        Overview

                    </Typography>

                    {
                        overview.map((item, index) => (

                            <Typography key={index} variant='body1'>

                                {item.name}
                            </Typography>
                        ))

                    }


                </BoxItem>
                <BoxItem>
                    <Typography variant='body1' sx={{ fontWeight: '700', marginBottom: '15px' }} >

                        Overview

                    </Typography>
                    <Typography variant='body1' sx={{ margin: '10px 0 10px 0' }}>

                        Keep in touch in our social pages
                    </Typography>

                    <Iconbox>
                        <img src={Twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                    </Iconbox>



                </BoxItem>


            </CustomBox>

        </>
    )
}

export default footer