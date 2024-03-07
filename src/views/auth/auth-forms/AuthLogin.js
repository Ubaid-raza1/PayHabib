import { Box } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from 'store/actions';
import CustomButton from 'ui-component/custom-button';
import Input from 'ui-component/form/input';
import PasswordInput from 'ui-component/form/password-input';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const AuthLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
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
    onSubmit: async (values) => {
      console.log(values);
      try {
        const { data } = await axios.post('https://6e59-39-50-174-247.ngrok-free.app/api/auth/signin', {
          email: values.username,
          password: values.password
        });
        if (data.user) {
          dispatch({ type: USER, payload: data.user });
          navigate('/');
        }
      } catch (error) {
        toast(error.response.data.message || error.message);
      }
    }
  });
  console.log({ state });
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
      <ToastContainer />
    </div>
  );
};

export default AuthLogin;
