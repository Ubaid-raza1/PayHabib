// assets
import { IconCurrencyDollar } from '@tabler/icons-react';

// constant
const icons = {
  IconCurrencyDollar
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Payment',
      type: 'item',
      url: '/payment',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'instant-payment',
      title: 'Instant Payment',
      type: 'item',
      url: '/instant-payment',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'qr-span',
      title: 'QR Scan',
      type: 'item',
      url: '/qr-scan',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

export default pages;
