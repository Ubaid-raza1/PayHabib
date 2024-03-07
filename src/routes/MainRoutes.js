import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const Dashboard = Loadable(lazy(() => import('views/customer/dashboard')));
const InstantPayment = Loadable(lazy(() => import('views/customer/instant-payment')));
const QrScan = Loadable(lazy(() => import('views/customer/qr-scan')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/instant-payment',
      element: <InstantPayment />
    },
    {
      path: '/qr-scan',
      element: <QrScan />
    }
  ]
};

export default MainRoutes;
