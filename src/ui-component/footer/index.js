import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const product = [
  { id: 1, value: 'Services', path: '#' },
  { id: 2, value: 'Solutions', path: '#' },
  { id: 3, value: 'Pricing', path: '#' }
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f6f6f6', padding: { xl: '60px', lg: '60px', md: '60px', sm: '20px', xs: '20px' } }}>
      <Grid container>
        <Grid item xs={12} xl={8} lg={8} md={8} sm={12}>
          <Grid container>
            <Grid item xs={12} xl={3} lg={3} md={4} sm={12}>
              <ul>
                <li style={{ listStyle: 'none', fontSize: '18px', fontWeight: '700', color: '#000' }}>PayHabib</li>
              </ul>
            </Grid>
            <Grid item xs={12} xl={3} lg={3} md={4} sm={12}>
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
            <Grid item xs={12} xl={3} lg={3} md={4} sm={12}>
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
            <Grid item xs={12} xl={3} lg={3} md={4} sm={12}>
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
          </Grid>
        </Grid>
        <Grid item xs={12} xl={4} lg={4} md={4} sm={12}></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
