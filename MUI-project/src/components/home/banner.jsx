
import { Box, Typography } from '@mui/material'
import BannerIg from '../../assets/welcome.png'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import CustomButton from '../custom/button';
function Banner() {


  const CustomBox = styled(Box)(({ theme }) => ({
    color: '#4d4d4d',
    width: '100%',
    gap: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]:
    {
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column'
    }
    // gap: theme.spacing(3)

  }))

  const Title = styled(Typography)(({ theme }) => ({

    fontWeight: '600',
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down('md')]:
    {
      fontSize: "40px",


    }

  }))

  return (
    <>
      <Box sx={{ minHeight: '80vh', backgroundColor: '#FED801' }}>

        <Container

          sx={{ maxWidth: "90%" }}
          maxWidth="xxl">
          <CustomBox >
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
              <Typography variant='body1'>
                Welcome to Sample Store
              </Typography>
              <Title variant='h1'>

                DISCOVER A PLACE WHERE YOU WILL LOVE TO EAT

              </Title>

              <Typography variant='body2' sx={{ padding: '20px 0 30px 0' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem reprehenderit cumque rerum deserunt obcaecati esse qui ipsa dignissimos? Dolor alias deserunt consectetur inventore voluptatibus nisi beatae excepturi aut vero eaque. Delectus rem harum quisquam pariatur odio reiciendis a ex reprehenderit perferendis. Illum quaerat provident debitis quia a? Ex, officia.
              </Typography>
              <CustomButton
                backgroundColor='#0F1B4C'
                colour='#fff'
                buttonText='More about us'
                getStartBtn={true}
                width='200px'
              >
              </CustomButton>


            </Box>

            <Box sx={{ flex: 1.50 }}>
              <img
                style={{ maxWidth: '100%', }}
                src={BannerIg} alt="" />

            </Box>


          </CustomBox>


        </Container>

      </Box>

    </>
  )
}
export default Banner