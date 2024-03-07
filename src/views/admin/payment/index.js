import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { baseUrl } from 'config';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { gridSpacing } from 'store/constant';
import StickyHeadTable from 'ui-component/table';
import EarningCard from '../../../ui-component/earning-card';

const AdminPaymentHeader = [
  'CUSTOMER ACCOUNT NO.',
  'MERCHANT ACCOUNT NO.',
  'ACCOUNT NAME',
  'STATUS',
  'DISCRIPTION',
  'TIME',
  'DATE',
  'AMOUNT'
];

const Payment = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    pendingRequestsCount: 0,
    rejectedRequestsCount: 0,
    succeededRequestsCount: 0,
    totalPendingAmount: 0,
    totalRejectedAmount: 0,
    totalSucceededAmount: 0
  });

  const getPaymentChart = async () => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/payment/payment-requests-summary-merchant-amount/${user?.accountNumber}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token || ''}`
          }
        }
      );
      setLoading(false);
      setChartData(data);
    } catch (error) {
      setLoading(false);
      toast(error?.response?.data?.message || error?.message);
    }
  };

  const paymentData = async () => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/payment/get-merchant-payments/${user?.accountNumber}`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token || ''}`
          }
        }
      );
      setLoading(false);
      setData(data?.payments);
    } catch (error) {
      setLoading(false);
      toast(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    paymentData();
    getPaymentChart();
  }, []);

  const totalPaymentCount = chartData.pendingRequestsCount + chartData.rejectedRequestsCount + chartData.succeededRequestsCount;
  const totalPaymentAmount = chartData.totalPendingAmount + chartData.totalRejectedAmount + chartData.totalSucceededAmount;

  return (
    <div className="main">
      <h1 style={{ color: '#000' }}>Payment</h1>
      <Grid container spacing={gridSpacing}>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard isLoadig={isLoading} amountDiv={true} count={totalPaymentCount} amount={totalPaymentAmount} text="All payments" />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard
            amountDiv={true}
            isLoading={isLoading}
            text="Succeeded"
            count={chartData.succeededRequestsCount}
            amount={chartData.totalSucceededAmount}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard
            isLoading={isLoading}
            amountDiv={true}
            text="Pending"
            count={chartData.pendingRequestsCount}
            amount={chartData.totalPendingAmount}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <EarningCard
            amountDiv={true}
            isLoading={isLoading}
            text="Rejected"
            count={chartData.rejectedRequestsCount}
            amount={chartData.totalRejectedAmount}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <StickyHeadTable data={data} headerData={AdminPaymentHeader} />
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Payment;
