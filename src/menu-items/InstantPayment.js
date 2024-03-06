// assets
import { IconCurrencyDollar } from '@tabler/icons-react';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

// constant
const icons = { IconCurrencyDollar };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const InstantPayment = {
  id: 'instant-payment',
  title: 'Instant Payment',
  type: 'group',
  children: [
    {
      id: 'instant-payment',
      title: 'Instant Payment',
      type: 'item',
      url: '/instant-payment',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

export default InstantPayment;
