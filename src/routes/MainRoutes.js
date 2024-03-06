import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const InstantPayment = Loadable(lazy(() => import('views/instant-payment')));
const QrScan = Loadable(lazy(() => import('views/qr-scan')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/payment',
      element: <DashboardDefault />
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
