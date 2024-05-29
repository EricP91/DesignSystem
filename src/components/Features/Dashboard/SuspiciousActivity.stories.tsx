import { Box, IconButton, Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { GoIcon } from '../../../assets/icons/GoIcon';
import { MediaIcon } from '../../../assets/icons/MediaIcon';
import SuspiciousActivity, { SuspiciousActivityProps } from './SuspiciousActivity';

export default {
  title: 'Features/Dashboard/SuspiciousActivity',
};

const Template: Story<SuspiciousActivityProps> = (args) => {
  const { count } = args;
  return (
    <Box
      width={250}
      padding={3}
      borderRadius={1}
      sx={{
        background: count === 0 ? '#fff' : 'linear-gradient(195deg, #EB1633 -222.34%, #fff 58.37%)',
        border: `1px solid ${count === 0 ? '#0064CC' : '#FAC5C5'}`,
        boxShadow:
          count === 0
            ? '0px 16px 32px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24);'
            : '0px 4px 12px rgba(0, 0, 0, 0.12)',
      }}
    >
      <SuspiciousActivity {...args} />
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {
  icon: <MediaIcon data-testid="suspicious-activity-icon" />,
  count: 30,
  isLoading: false,
  label: 'Suspicious activity',
};

export const EmptyState = Template.bind({});

EmptyState.args = {
  icon: <MediaIcon data-testid="suspicious-activity-icon" />,
  count: 0,
  isEmpty: true,
  isLoading: false,
  label: 'Empty suspicious activity',
};

export const WithGoTo = Template.bind({});

WithGoTo.args = {
  ...Default.args,
  action: (
    <IconButton data-testid="suspicious-activity-go-to-anchor" size="small" component={Link} to="test">
      <GoIcon />
    </IconButton>
  ),
};

export const WithInfo = Template.bind({});

WithInfo.args = {
  ...Default.args,
  infoTooltip: 'This is a Tooltip',
};

export const WithDropdown = Template.bind({});

WithDropdown.args = {
  ...Default.args,
  dropDownContent: (
    <Typography data-testid="suspicious-activity-dropdown-content" sx={{ p: 2 }}>
      The content of the dropdown
    </Typography>
  ),
};
