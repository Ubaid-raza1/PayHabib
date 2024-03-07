import { Box, Grid } from '@mui/material';
import React from 'react';
import SimpleCard from 'ui-component/simple-card';
import card_img_one from '../../../assets/images/admin/admin-card-one.png';
import card_img_two from '../../../assets/images/admin/admin-card-two.png';
import card_img_three from '../../../assets/images/admin/admin-card-three.png';
import TotalGrowthBarChart from 'views/dashboard/TotalGrowthBarChart';
import PieChart from 'ui-component/pie-chart';

const AdminDashboard = () => {
  return (
    <Box>
      <Box
        className="admin_dashboard_section_one"
        sx={{ backgroundColor: '#f6f6f6', paddingTop: '20px', border: '1px solid', borderRadius: '10px' }}
      >
        <h1 style={{ color: '#000', paddingLeft: '20px' }}>Getting start with us</h1>
        <Grid container>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <SimpleCard
              img={card_img_one}
              heading="Monitor payment"
              discription="view real-time update on successful payment,
                 refund and other transaction-related activities"
            />
          </Grid>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <SimpleCard
              img={card_img_two}
              heading="Manage customers"
              discription="Access customer information, view thier transaction,and manage recurring payment payments."
            />
          </Grid>
          <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
            <SimpleCard
              img={card_img_three}
              heading="Analyze performance"
              discription="track key metrics, and gain insights into your business's financial performance and trends."
            />
          </Grid>
        </Grid>
      </Box>
      <hr style={{ margin: '50px 0' }} />
      <Box className="admin_dashboard_section_two">
        <h1 style={{ color: '#000' }}>Report</h1>
        <TotalGrowthBarChart />
      </Box>
      <Box
        className="admin_dashboard_section_three"
        sx={{ width: '50%', marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}
      >
        <PieChart />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
