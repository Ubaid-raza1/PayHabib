import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from 'ui-component/custom-button';

const headerValue = [
  { id: 1, value: 'Services', path: '#services' },
  { id: 2, value: 'Solution', path: '#solution' },
  { id: 3, value: 'Pricing', path: '#pricing' },
  { id: 4, value: 'Helper center', path: '#helperCenter' }
];

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 30px', backgroundColor: '#fff' }}>
      <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>PayHabib</Box>
      <Box>
        <ul style={{ display: 'flex' }}>
          {headerValue.map((item) => {
            return (
              <li key={item.id} style={{ listStyle: 'none', margin: '0 20px' }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'gray', fontSize: '18px', fontWeight: '400' }}>
                  {item.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </Box>
      <Box>
        <CustomButton variant="contained" color="secondary">
          Login
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Header;
