import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import TopBar, { TopBarProps } from './TopBar';

export default {
  title: 'Components/TopBar',
};

const Template: Story<TopBarProps> = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Box sx={{ ml: 1 }}>This is the top bar!</Box>,
};
