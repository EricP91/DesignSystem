import React, { useRef } from 'react';
import { Story } from '@storybook/react';
import PTopBar from './PTopBar';
import { PTopBarProps } from './types';

export default {
  title: 'Platform/TopBar',
};

const Template: Story<PTopBarProps> = (args: PTopBarProps) => {
  const ref = useRef(null);
  return <PTopBar {...args} ref={ref} />;
};

export const TopBar = Template.bind({});
TopBar.args = {
  children: [],
  platformName: 'Platform Name',
  appName: 'App Name',
  isLoggedIn: true,
  handleLogin: undefined,
  handleLogout: undefined,
  loginText: 'Login',
  logoutText: 'Logout',
  userInfo: {
    userName: 'John Doe',
    userEmail: 'john.doe@cellebrite.com',
  },
  adminPortal: {
    url: 'https://www.google.com/',
  },
  showScreenResolutionGuide: false,
  minScreenResolution: 1920,
};
