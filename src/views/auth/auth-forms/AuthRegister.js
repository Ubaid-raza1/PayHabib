import { Box } from '@mui/system';
import axios from 'axios';
import { baseUrl } from 'config';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import CustomButton from 'ui-component/custom-button';
import FlagInput from 'ui-component/form/flag-input';
import Input from 'ui-component/form/input';
import PasswordInput from 'ui-component/form/password-input';
import * as Yup from 'yup';

const AuthLogin = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    accountNumber: Yup.string().required('Account Number is required'),
    bankName: Yup.string().required('Bank Name is required'),
    email: Yup.string().required('Email Address is required').email('Invalid Email Address'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      accountNumber: '',
      bankName: '',
      email: '',
      phoneNumber: '',
      password: '',
      countryCode: 'PK'
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${baseUrl}/auth/signup/customer`, {
          username: values.username,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          accountNumber: values.accountNumber,
          accountName: values.bankName,
          city: 'karachi',
          countryCode: values.countryCode
        });
        toast(data.message);
        formik.resetForm();
      } catch (error) {
        toast(error.response.data.message || error.message);
      }
    }
  });
  return (
    <div className="auth-form">
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Box>
            <Input label="Enter Username" {...formik.getFieldProps('username')} error={formik.touched.username && formik.errors.username} />
            {formik.touched.username && formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
          </Box>
          <Box>
            <Input
              label="Account Number"
              {...formik.getFieldProps('accountNumber')}
              error={formik.touched.accountNumber && formik.errors.accountNumber}
            />
            {formik.touched.accountNumber && formik.errors.accountNumber && (
              <div style={{ color: 'red' }}>{formik.errors.accountNumber}</div>
            )}
          </Box>
          <Box>
            <Input label="Bank Name" {...formik.getFieldProps('bankName')} error={formik.touched.bankName && formik.errors.bankName} />
            {formik.touched.bankName && formik.errors.bankName && <div style={{ color: 'red' }}>{formik.errors.bankName}</div>}
          </Box>
          <Box>
            <Input label="Email Address" {...formik.getFieldProps('email')} error={formik.touched.email && formik.errors.email} />
            {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
          </Box>
          <FlagInput formik={formik} label="Phone Number" />
          <PasswordInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            errors={formik.errors}
            touched={formik.touched}
            values={formik.values}
            placeholder="Enter at least 8+ characters"
          />
          <CustomButton variant="contained" color="secondary" type="submit">
            Sign Up
          </CustomButton>
        </Box>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AuthLogin;
