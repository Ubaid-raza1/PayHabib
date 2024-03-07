import axios from 'axios';
import { baseUrl } from 'config';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import CustomerTable from 'ui-component/customer-table';

const adminCustomerHeader = ['CUSTOMER NAME', 'EMAIL', 'PHONE NUMBER', 'ACCOUNT NUMBER', 'ACCOUNT NAME', 'CITY', 'CREATED DATE'];

const Customer = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/user/customers`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user?.token || ''}`
          }
        });
        setData(data?.customers);
      } catch (error) {
        toast(error?.response?.data?.message || error?.message);
      }
    })();
  }, []);
  console.log(data);
  return (
    <div className="main">
      <h1 style={{ color: '#000' }}>Customers</h1>
      <CustomerTable data={data} headerData={adminCustomerHeader} />
      <ToastContainer />
    </div>
  );
};

export default Customer;
