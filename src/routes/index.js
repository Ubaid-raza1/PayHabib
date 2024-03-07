import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoute';
import { useSelector } from 'react-redux';

export default function Routes() {
  const { user } = useSelector((state) => state.auth);

  const handleRoute = {
    customer: MainRoutes,
    merchant: AdminRoutes
  };

  return useRoutes([user?.token ? handleRoute[user?.role] : AuthenticationRoutes]);
}
