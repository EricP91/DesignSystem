import { Story } from '@storybook/react';
import React from 'react';
import AuthUserAvatar, { AuthUserAvatarProps } from './AuthUserAvatar';

export default {
  title: 'Components/SideBars/AuthUserAvatar',
};

const Template: Story<Partial<AuthUserAvatarProps>> = (args) => (
  <div style={{ width: '240px' }}>
    <AuthUserAvatar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  primaryText: 'John Doe',
  secondaryText: 'Logout',
  isLoading: false,
};
