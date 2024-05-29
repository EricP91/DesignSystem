import { ArrowIcon, ChatIcon, CogIcon, CallIcon, PhoneIcon } from '../../../assets/icons';

export const storybookMenuLinks = [
  {
    subheader: 'investigative views',
    items: [
      {
        icon: CogIcon,
        title: 'dashboard',
        href: 'dashboard',
        dataTestId: 'menu-item-dashboard',
        items: [
          {
            title: 'app',
            href: '/app',
            dataTestId: 'menu-item-app',
          },
          {
            title: 'e-commerce',
            href: '/ecommerce',
            dataTestId: 'menu-item-ecommerce',
          },
          {
            title: 'analytics',
            href: '/analytics',
            dataTestId: 'menu-item-analytics',
          },
        ],
      },
      { title: 'chat', href: 'chat', icon: ChatIcon, isLoading: true, isDisabled: true },
      { title: 'devices', href: 'devices', icon: PhoneIcon, isLoading: false, isDisabled: true, info: 40 },
      { title: 'calls', href: 'calls', icon: CallIcon, isLoading: false, isDisabled: false, info: 70 },
    ],
  },
  {
    subheader: 'User data',
    items: [
      {
        title: 'user',
        href: '/user',
        icon: CogIcon,
        dataTestId: 'menu-item-user',
        items: [
          {
            title: 'profile',
            href: 'profile',
            dataTestId: 'menu-item-profile',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Coming Soon',
    items: [
      {
        title: 'New data item',
        href: 'new',
        icon: ArrowIcon,
        disabled: true,
        dataTestId: 'menu-item-new-data',
      },
    ],
  },
];
