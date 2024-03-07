import { Box } from '@mui/system';
import { useFormik } from 'formik';
import CustomButton from 'ui-component/custom-button';
import Input from 'ui-component/form/input';
import PasswordInput from 'ui-component/form/password-input';
import * as Yup from 'yup';

const AuthLogin = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <div className="auth-form">
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Box>
            <Input label="Enter username" {...formik.getFieldProps('username')} error={formik.touched.username && formik.errors.username} />
            {formik.touched.username && formik.errors.username && <div style={{ color: 'red' }}>{formik.errors.username}</div>}
          </Box>
          <PasswordInput
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            errors={formik.errors}
            touched={formik.touched}
            values={formik.values}
            placeholder="Enter your password"
          />
          <CustomButton variant="contained" color="secondary" type="submit">
            Sign In
          </CustomButton>
        </Box>
      </form>
    </div>
  );
};

export default AuthLogin;
