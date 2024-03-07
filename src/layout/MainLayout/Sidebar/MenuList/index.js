// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
// import menuItem from 'menu-items';
import pages from 'menu-items/pages';
import adminPages from 'menu-items/adminPages';
import { useSelector } from 'react-redux';

const MenuList = () => {
  const { user } = useSelector((state) => state.auth);

  const handleRoute = {
    customer: pages,
    merchant: adminPages
  };

  const menuItem = [handleRoute[user?.role]];
  const navItems = menuItem.map((item) => {
    switch (item?.type) {
      case 'group':
        return <NavGroup key={item?.id} item={item} />;
      default:
        return (
          <Typography key={item?.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
