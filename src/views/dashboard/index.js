import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import EarningCard from './EarningCard';

import { gridSpacing } from 'store/constant';
import StickyHeadTable from 'ui-component/table';
import { Box } from '@mui/system';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="main">
      <h1>Payment</h1>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <StickyHeadTable />
      </Box>
    </div>
  );
};

export default Dashboard;
