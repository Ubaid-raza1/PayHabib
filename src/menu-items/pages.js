import { IconCurrencyDollar, IconCurrencyDollarCanadian, IconQrcode } from '@tabler/icons-react';

const icons = {
  IconCurrencyDollar,
  IconCurrencyDollarCanadian,
  IconQrcode
};

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Payment',
      type: 'item',
      url: '/',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'instant-payment',
      title: 'Instant Payment',
      type: 'item',
      url: '/instant-payment',
      icon: icons.IconCurrencyDollarCanadian,
      breadcrumbs: false
    },
    {
      id: 'qr-span',
      title: 'QR Scan',
      type: 'item',
      url: '/qr-scan',
      icon: icons.IconQrcode,
      breadcrumbs: false
    }
  ]
};

export default pages;
