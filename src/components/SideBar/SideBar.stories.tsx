import { Story } from '@storybook/react';
import { Avatar } from '@mui/material';
import React from 'react';
import SideBar from './SideBar';
import AuthUserAvatar from './AuthUserAvatar';
import GuardianLogo from './GuardianLogo';
import { storybookMenuLinks as menuLinks } from './utils';

export default {
  title: 'Components/SideBars',
};

const Template: Story = (args) => <SideBar {...args} />;
export const Default = Template.bind({});

Default.args = {
  isOpenNav: true,
  menuLinks,
};

export const WithAuthAndLogo = Template.bind({});

WithAuthAndLogo.args = {
  isOpenNav: true,
  menuLinks,
  topContent: (
    <>
      <GuardianLogo style={{ margin: '30px' }} />
      <AuthUserAvatar avatar={<Avatar>JD</Avatar>} primaryText="John Doe" secondaryText="Logout" />
    </>
  ),
};
