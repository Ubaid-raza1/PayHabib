import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import StickyHeadTable from 'ui-component/table';
import EarningCard from 'views/dashboard/EarningCard';

const Payment = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="main">
      <h1>Payment</h1>
      <Grid container spacing={gridSpacing}>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard isLoadig={isLoading} />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <StickyHeadTable />
      </Box>
    </div>
  );
};

export default Payment;
