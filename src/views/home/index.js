import { Box } from '@mui/system';
import React from 'react';
import CustomButton from 'ui-component/custom-button';
import Header from 'ui-component/header';
import dashboard_image from '../../assets/images/homeImages/dashboard-image.png';
import section_two_first from '../../assets/images/homeImages/section-two-first.png';
import section_two_second from '../../assets/images/homeImages/section-two-second.png';
import { Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import PricingCard from 'ui-component/pricing-card';
import Footer from 'ui-component/footer';

const Home = () => {
  return (
    <Box>
      {/* header */}
      <Header />
      {/* header end*/}

      {/* home section one  */}
      <Box sx={{ backgroundColor: '#5E35B1' }} className="home_section_one">
        <Grid container sx={{ padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' }, alignItems: 'center' }} rowGap={5}>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}>
              <h1 style={{ color: '#fff', fontSize: '48px', lineHeight: '62px' }}>
                Optimize business <br /> payments
              </h1>
              <p style={{ color: '#fff', fontSize: '20px', lineHeight: '30px' }}>
                payment processing plateform that facilities transactions <br />
                between business and thier customer.
              </p>
              <CustomButton
                variant={'contained'}
                sx={{
                  backgroundColor: '#fff',
                  color: '#5E35B1',
                  '&:hover': {
                    backgroundColor: '#fff'
                  }
                }}
              >
                Open Account
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box sx={{ width: '100%' }}>
              <img src={dashboard_image} alt="logo" style={{ width: '100%', maxHeight: '500px', borderRadius: '15px' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* home section one end  */}

      {/* home section two */}
      <Box className="home_section_two">
        <Grid container sx={{ padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' }, alignItems: 'center' }} rowGap={5}>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box sx={{ width: '100%' }}>
              <img src={section_two_first} alt="logo" style={{ width: '100%', maxHeight: '500px', borderRadius: '15px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box
              sx={{
                textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' },
                paddingLeft: { xl: '60px', lg: '60px', md: '60px', sm: '0', xs: '0' }
              }}
            >
              <p style={{ color: 'gray' }}>YOU CAN</p>
              <h1 style={{ fontSize: '48px', lineHeight: '62px', color: '#000' }}>
                <span style={{ color: '#FE568A' }}>Monitor</span> payment
              </h1>
              <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                view real-time update on successful payment,
                <br /> refund and other transaction-related activities
              </p>
              <Box
                sx={{
                  color: '#FE568A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' }
                }}
              >
                Learn more <EastIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* home section two end  */}

      {/* home section three */}
      <Box className="home_section_three">
        <Grid container sx={{ padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' }, alignItems: 'center' }} rowGap={5}>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}>
              <p style={{ color: 'gray' }}>YOU CAN</p>
              <h1 style={{ fontSize: '48px', lineHeight: '62px', color: '#000' }}>
                <span style={{ color: '#744FEA' }}>Manage</span> customer
              </h1>
              <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                view real-time update on successful payment,
                <br /> refund and other transaction-related activities
              </p>
              <Box
                sx={{
                  color: '#744FEA',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' }
                }}
              >
                Learn more <EastIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
            <Box sx={{ width: '100%' }}>
              <img src={section_two_second} alt="logo" style={{ width: '100%', maxHeight: '500px', borderRadius: '15px' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* home section three */}

      {/* home section four */}
      <Box className="home_section_four" sx={{ padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' } }}>
        <Box
          sx={{
            padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' },
            borderRadius: '15px',
            backgroundColor: '#f6f6f6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '20px', lineHeight: '24px', fontWeight: 'bold', color: '#000' }}>
            Simplify your business payments with our intuitive tool. Manage,track,and <br />
            optimize your financial transactions effortlessly. Take control of your <br />
            finances and focus on growing your business.
          </p>
          <Box>
            <CustomButton
              variant={'contained'}
              sx={{
                backgroundColor: '#FE568A',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#FE568A'
                }
              }}
            >
              Open Account
            </CustomButton>
          </Box>
        </Box>
      </Box>
      {/* home section four end*/}

      {/* home section five*/}
      <Box className="home_section_five" sx={{ padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' } }}>
        <h1 style={{ fontSize: '48px', color: '#000', textAlign: 'center' }}>Pricing</h1>
        <Grid container>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <PricingCard amount="4" heading="PERSONAL" discription="Perfect for side for hobby projects" btnVal="Get Started" />
          </Grid>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <PricingCard amount="15" heading="START UP" discription="Perfect for small teams" btnVal="Get Started" />
          </Grid>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <PricingCard amount="150" heading="ORGANIZATION" discription="Perfect for organization" btnVal="Contact sale" />
          </Grid>
        </Grid>
      </Box>
      {/* home section five end*/}

      {/* Footer */}
      <Footer />
      {/* Footer end*/}
    </Box>
  );
};

export default Home;
