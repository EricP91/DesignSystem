import { Story } from '@storybook/react';
import React from 'react';
import { NotificationSpinner, InProgressNotificationProps } from './NotificationSpinner';

export default {
  title: 'Components/Spinners/Notifications',
};

const Template: Story<InProgressNotificationProps> = (args) => <NotificationSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  loadingText: 'Generating report (74%)...',
  actionText: 'Cancel',
  onActionClick: () => {},
};

export const NoAction = Template.bind({});
NoAction.args = {
  loadingText: 'Generating report (74%)...',
};
