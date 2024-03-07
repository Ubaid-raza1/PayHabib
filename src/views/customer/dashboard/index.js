import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import StickyHeadTable from 'ui-component/table';
import { Box } from '@mui/system';
import EarningCard from 'ui-component/earning-card';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { baseUrl } from 'config';

const customerPaymentHeader = [
  'CUSTOMER ACCOUNT NO.',
  'MERCHANT ACCOUNT NO.',
  'ACCOUNT NAME.',
  'STATUS',
  'DISCRIPTION',
  'TIME',
  'DATE',
  'AMOUNT',
  'ACTIONS'
];
const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${baseUrl}/payment/get-payments/${user?.accountNumber}`,
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
    })();
  }, []);

  const records = data?.reduce((count, record) => {
    if (record.status === 'pending' || record.status === 'rejected' || record.status === 'succeeded') {
      count[record.status] = (count[record.status] || 0) + 1;
    }
    return count;
  }, {});

  const pay = async (id) => {
    try {
      const { data } = await axios.put(
        `https://6e59-39-50-174-247.ngrok-free.app/api/payment/action`,
        { paymentId: id, action: 'pay' },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token || ''}`
          }
        }
      );
      toast(data.message);
      setData((previousData) => {
        return previousData.map((payment) => {
          if (payment._id === id) {
            return { ...payment, status: 'succeeded' };
          }
          return payment;
        });
      });
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message || error.message);
    }
  };
  const rejected = async (id) => {
    try {
      const { data } = await axios.put(
        `https://6e59-39-50-174-247.ngrok-free.app/api/payment/action`,
        { paymentId: id, action: 'reject' },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token || ''}`
          }
        }
      );
      toast(data.message);
      setData((previousData) => {
        return previousData.map((payment) => {
          if (payment._id === id) {
            return { ...payment, status: 'rejected' };
          }
          return payment;
        });
      });
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message || error.message);
    }
  };

  return (
    <div className="main">
      <h1>Payment</h1>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} text="Total Pending Records" count={records?.pending} />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} text="Total Paid Records" count={records?.succeeded} />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <EarningCard isLoading={isLoading} text="Total Rejects Records" count={records?.rejected} />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <StickyHeadTable data={data} pay={pay} rejected={rejected} headerData={customerPaymentHeader} />
      </Box>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
