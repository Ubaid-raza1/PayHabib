import { Box } from '@mui/system';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'ui-component/form/input';
import SelectOption from 'ui-component/form/select-option';
import Textarea from 'ui-component/form/text-area';
import CustomButton from 'ui-component/custom-button';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address'),
  paymentAmount: Yup.number().required('Payment amount is required').positive('Payment amount must be positive'),
  customerAccountNumber: Yup.string().required('Customer account number is required'),
  merchantAccountNumber: Yup.string().required('Merchant account number is required'),
  option: Yup.string().required('Bank name is required'),
  message: Yup.string().required('Payment Purpose is required')
});

const InstantPayment = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      paymentAmount: '',
      customerAccountNumber: '',
      merchantAccountNumber: '',
      option: '',
      message: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <div className="main">
      <h1>Instant Payment</h1>
      <Box sx={{ width: { xl: '70%', lg: '70%', md: '100%', sm: '100%', xs: '100%' } }}>
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box sx={{ width: '100%' }}>
              <Input label="Username" {...formik.getFieldProps('username')} error={formik.touched.username && formik.errors.username} />
              {formik.touched.username && formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
            </Box>

            <Box sx={{ width: '100%' }}>
              <Input
                label="Email Address (Optional)"
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
              options={options}
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
            <CustomButton type="submit" variant="contained" sx={{ width: '50px', color: '#fff' }}>
              pay
            </CustomButton>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default InstantPayment;
