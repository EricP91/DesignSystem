import { Button } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import HeaderDashboard from '.';
import { HeaderDashboardProps } from './HeaderDashboard';

export default {
  title: 'Components/HeaderDashboard',
};

const Template: Story<HeaderDashboardProps> = (args) => <HeaderDashboard {...args} />;

export const UploadHeaderDashboard = Template.bind({});

UploadHeaderDashboard.args = {
  heading: 'Share Evidence',
  links: [
    { name: 'Step 1/2', href: '' },
    { name: 'Evidence Details', href: '' },
  ],
  moreLink: 'http://cellebrite.com',
  action: <Button />,
};
