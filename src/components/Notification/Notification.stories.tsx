import { Story } from '@storybook/react';
import React from 'react';
import Notification, { NotificationProps } from './Notification';

export default {
  title: 'Components/Notifications',
  argTypes: {
    variant: {
      options: ['primary', 'error'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a notification!',
  variant: 'primary',
};
