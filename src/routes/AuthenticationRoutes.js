import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { Navigate } from 'react-router';

const Login = Loadable(lazy(() => import('views/auth/login')));
const Register = Loadable(lazy(() => import('views/auth/sign-up')));
const Home = Loadable(lazy(() => import('views/home')));

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/auth/login',
      element: <Login />
    },
    {
      path: '/auth/register',
      element: <Register />
    },
    {
      path: '*',
      element: <Navigate to="/auth/login" replace />
    }
  ]
};

export default AuthenticationRoutes;
