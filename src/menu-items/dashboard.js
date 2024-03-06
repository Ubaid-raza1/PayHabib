// assets
import { IconCurrencyDollar } from '@tabler/icons-react';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

// constant
const icons = { IconCurrencyDollar };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'payment',
  title: 'Payment',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Payment',
      type: 'item',
      url: '/payment',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
