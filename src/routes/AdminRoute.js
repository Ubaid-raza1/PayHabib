import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

const Dashboard = Loadable(lazy(() => import('views/admin/dashboard')));
const Payment = Loadable(lazy(() => import('views/admin/payment')));
const Customer = Loadable(lazy(() => import('views/admin/customers')));
const PaymentRequest = Loadable(lazy(() => import('views/admin/payment-request')));

const AdminRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/admin/payment',
      element: <Payment />
    },
    {
      path: '/admin/customer',
      element: <Customer />
    },
    {
      path: '/admin/payment-request',
      element: <PaymentRequest />
    }
  ]
};

export default AdminRoutes;
