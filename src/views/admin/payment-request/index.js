import { Box } from '@mui/system';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'ui-component/form/input';
import SelectOption from 'ui-component/form/select-option';
import Textarea from 'ui-component/form/text-area';
import CustomButton from 'ui-component/custom-button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { BanksName } from 'assets/data/data';
import { baseUrl } from 'config';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address'),
  paymentAmount: Yup.number().required('Payment amount is required').positive('Payment amount must be positive'),
  customerAccountNumber: Yup.string().required('Customer account number is required'),
  merchantAccountNumber: Yup.string().required('Merchant account number is required'),
  option: Yup.string().required('Bank name is required'),
  message: Yup.string().required('Payment Purpose is required')
});

const PaymentRequest = () => {
  const { user } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      paymentAmount: '',
      customerAccountNumber: '',
      merchantAccountNumber: user?.accountNumber || '',
      option: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          `${baseUrl}/payment/transaction-request`,
          {
            customerAccountNumber: values.customerAccountNumber,
            merchantAccountNumber: values.merchantAccountNumber,
            accountName: values.option,
            description: values.message,
            amount: values.paymentAmount,
            status: 'pending',
            currency: 'PKR'
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user?.token || ''}`
            }
          }
        );
        toast(data.message);
        formik.resetForm();
      } catch (error) {
        console.log(error);
        toast(error.response.data.message || error.message);
      }
    }
  });
  return (
    <div className="main">
      <h1 style={{ color: '#000' }}>Payment Request</h1>
      <hr style={{ margin: '40px 0' }} />
      <Box
        sx={{
          width: { xl: '70%', lg: '70%', md: '100%', sm: '100%', xs: '100%' },
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px'
        }}
      >
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ color: '#000' }}>Payment Request for Customer</h2>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box sx={{ width: '100%' }}>
              <Input label="Username" {...formik.getFieldProps('username')} error={formik.touched.username && formik.errors.username} />
              {formik.touched.username && formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
            </Box>

            <Box sx={{ width: '100%' }}>
              <Input
                label="Customer Email Address (Optional)"
                {...formik.getFieldProps('email')}
                error={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
            </Box>
          </Box>
          <Box>
            <Input
              label="Payment Amount"
              {...formik.getFieldProps('paymentAmount')}
              error={formik.touched.paymentAmount && formik.errors.paymentAmount}
            />
            {formik.touched.paymentAmount && formik.errors.paymentAmount && (
              <div style={{ color: 'red' }}>{formik.errors.paymentAmount}</div>
            )}
          </Box>
          <Box>
            <Input
              label="Customer Account Number"
              {...formik.getFieldProps('customerAccountNumber')}
              error={formik.touched.customerAccountNumber && formik.errors.customerAccountNumber}
            />
            {formik.touched.customerAccountNumber && formik.errors.customerAccountNumber && (
              <div style={{ color: 'red' }}>{formik.errors.customerAccountNumber}</div>
            )}
          </Box>
          <Box>
            <Input
              label="Merchant Account Number"
              {...formik.getFieldProps('merchantAccountNumber')}
              error={formik.touched.merchantAccountNumber && formik.errors.merchantAccountNumber}
            />
            {formik.touched.merchantAccountNumber && formik.errors.merchantAccountNumber && (
              <div style={{ color: 'red' }}>{formik.errors.merchantAccountNumber}</div>
            )}
          </Box>
          <Box>
            <SelectOption
              options={BanksName}
              label="Select Bank Name"
              {...formik.getFieldProps('option')}
              error={formik.touched.option && formik.errors.option}
            />
            {formik.touched.option && formik.errors.option && <div style={{ color: 'red' }}>{formik.errors.option}</div>}
          </Box>
          <Box>
            <Textarea
              label="Payment Purpose"
              {...formik.getFieldProps('message')}
              error={formik.touched.message && formik.errors.message}
            />
            {formik.touched.message && formik.errors.message && <div style={{ color: 'red' }}>{formik.errors.message}</div>}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <CustomButton type="submit" variant="contained" color="secondary" sx={{ width: '50px', color: '#fff' }}>
              pay
            </CustomButton>
          </Box>
        </form>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default PaymentRequest;
