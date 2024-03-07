import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CustomButton from 'ui-component/custom-button';

const SimpleCard = ({ img, heading, discription }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#f6f6f6',

        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <img src={img} alt="card-img" style={{ height: '200px' }} />
        <h3>{heading}</h3>
        <p>{discription}</p>
      </CardContent>
      <CardActions>
        <CustomButton color="secondary">Read more</CustomButton>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
