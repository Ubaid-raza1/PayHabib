import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SimpleCard from 'ui-component/simple-card';
import card_img_one from '../../../assets/images/admin/admin-card-one.png';
import card_img_two from '../../../assets/images/admin/admin-card-two.png';
import card_img_three from '../../../assets/images/admin/admin-card-three.png';
import TotalGrowthBarChart from 'views/dashboard/TotalGrowthBarChart';
import PieChart from 'ui-component/pie-chart';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import EarningCard from 'views/dashboard/EarningCard';
// import ColumnChart from 'ui-component/column-chart';
// import TotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import TotalOrderLineChartCard from 'views/dashboard/TotalOrderLineChartCard';
// import TotalIncomeLightCard from 'views/dashboard/TotalIncomeLightCard';
// import PopularCard from 'views/dashboard/PopularCard';

const AdminDashboard = () => {
  const [summaryData, setSummaryData] = useState({
    totalPendingRequests: 0,
    totalRejectedRequests: 0,
    totalSucceededRequests: 0
  });
  const [revenueData, setRevenueData] = useState({ months: [], revenue: [] });

  const { user } = useSelector((state) => state.auth);

  const accountNumber = user?.accountNumber;

  const fetchRevenueData = async () => {
    try {
      const response = await axios.get(`https://backend-procom.vercel.app/api/payment/revenue-by-month/${accountNumber}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      const months = response?.data?.revenueData?.map((item) => item.month);
      const revenue = response?.data?.revenueData?.map((item) => item.revenue);
      setRevenueData({ months, revenue });
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    }
  };

  const fetchPaymentRequestsSummary = async () => {
    try {
      const response = await axios.post(
        `https://backend-procom.vercel.app/api/payment/payment-requests-summary-merchant/${accountNumber}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        }
      );
      setSummaryData(response.data);
    } catch (error) {
      console.error('Error fetching payment requests summary:', error);
    }
  };
  useEffect(() => {
    fetchPaymentRequestsSummary();
    fetchRevenueData();
  }, [accountNumber]);

  console.log(revenueData);

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
        <TotalGrowthBarChart data={revenueData} />
      </Box>
      <Box
        className="admin_dashboard_section_three"
        sx={{ width: '50%', marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}
      >
        <PieChart data={summaryData} />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
