import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

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
    }
  ]
};

export default AuthenticationRoutes;
