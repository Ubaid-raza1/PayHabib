import { IconCurrencyDollar } from '@tabler/icons-react';

const icons = {
  IconCurrencyDollar
};

const adminPages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'payment',
      title: 'Payment',
      type: 'item',
      url: '/admin/payment',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'customers',
      title: 'Customers',
      type: 'item',
      url: '/admin/customer',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'payment-request',
      title: 'Payment Request',
      type: 'item',
      url: '/admin/payment-request',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    }
  ]
};

export default adminPages;
