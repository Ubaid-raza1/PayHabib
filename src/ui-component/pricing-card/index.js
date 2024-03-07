import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from 'ui-component/custom-button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const PricingCard = ({ heading, discription, amount, btnVal }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#f6f6f6',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          border: '2px solid rgb(116, 79, 234)'
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontWeight: 'bold', color: '#000' }}>{heading}</h2>
        <p>{discription}</p>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: '48px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
        >
          {`${amount}%`}
          <span style={{ fontSize: '14px', color: 'gray' }}>
            service free <br /> /payment
          </span>
        </Typography>
        <ul style={{ marginLeft: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div
              style={{
                border: '2px solid  rgb(116, 79, 234)',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CheckIcon fontSize="10px" color="secondary" />
            </div>
            Process Unlimited Payments
          </li>
          <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div
              style={{
                border: '2px solid  rgb(116, 79, 234)',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CheckIcon fontSize="10px" color="secondary" />
            </div>
            Activate Three Business Services
          </li>
          <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            {+amount === 4 ? (
              <ClearIcon />
            ) : (
              <div
                style={{
                  border: '2px solid  rgb(116, 79, 234)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CheckIcon fontSize="10px" color="secondary" />
              </div>
            )}
            Analyze and Predict Financial Trends
          </li>
        </ul>
      </CardContent>
      <CardActions>
        <CustomButton color="secondary" variant="contained" sx={{ width: '100%' }}>
          {btnVal}
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
