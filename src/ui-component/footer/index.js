import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomButton from 'ui-component/custom-button';

const product = [
  { id: 1, value: 'Services', path: '#' },
  { id: 2, value: 'Solutions', path: '#' },
  { id: 3, value: 'Pricing', path: '#' }
];
const resources = [
  { id: 1, value: 'Blog', path: '#' },
  { id: 2, value: 'User guides', path: '#' },
  { id: 3, value: 'Webinars', path: '#' }
];
const company = [
  { id: 1, value: 'About', path: '#' },
  { id: 2, value: 'Join us', path: '#' }
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f6f6f6', padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' } }}>
      <Grid container>
        <Grid item xs={12} xl={8} lg={8} md={8} sm={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              xl={3}
              lg={3}
              md={4}
              sm={12}
              sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}
            >
              <ul>
                <li style={{ listStyle: 'none', fontSize: '18px', fontWeight: '700', color: '#000' }}>PayHabib</li>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              xl={3}
              lg={3}
              md={4}
              sm={12}
              sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}
            >
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ listStyle: 'none', fontSize: '18px', fontWeight: '700', color: '#000' }}>Product</li>
                {product.map((item) => {
                  return (
                    <li key={item.id} style={{ listStyle: 'none' }}>
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              xl={3}
              lg={3}
              md={4}
              sm={12}
              sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}
            >
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ listStyle: 'none', fontSize: '18px', fontWeight: '700', color: '#000' }}>Resources</li>
                {resources.map((item) => {
                  return (
                    <li key={item.id} style={{ listStyle: 'none' }}>
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              xl={3}
              lg={3}
              md={4}
              sm={12}
              sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}
            >
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ listStyle: 'none', fontSize: '18px', fontWeight: '700', color: '#000' }}>Company</li>
                {company.map((item) => {
                  return (
                    <li key={item.id} style={{ listStyle: 'none' }}>
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          xl={4}
          lg={4}
          md={4}
          sm={12}
          sx={{ textAlign: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' } }}
        >
          <h2 style={{ color: '#744FEA' }}>Subscribe to our newsletter</h2>
          <p>For product announcements and exclusive insights</p>
          <Box sx={{ display: 'flex', borderRadius: '5px' }}>
            <input
              type="text"
              style={{ width: '100%', border: 'none', paddingLeft: '5px', outline: 'none' }}
              placeholder="Input your email"
            />
            <CustomButton variant="contained" color="secondary" sx={{ borderRadius: '0px 5px 5px 0' }}>
              Subscribe
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
