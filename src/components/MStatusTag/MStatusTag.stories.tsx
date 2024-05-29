import React from 'react';
import { Story } from '@storybook/react';
import { CircularProgress } from '@mui/material';
import MStatusTag, { MStatusTagProps } from './MStatusTag';
import { UPLOAD_STATUS } from './constants';

export default {
  title: 'Components/MStatusTag',
};

const Template: Story<MStatusTagProps> = (args) => <MStatusTag {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Completed = Template.bind({});
Completed.args = { status: UPLOAD_STATUS.COMPLETED };

export const Cancelled = Template.bind({});
Cancelled.args = { status: UPLOAD_STATUS.CANCELLED };

export const Uploading = Template.bind({});
Uploading.args = { status: UPLOAD_STATUS.UPLOADING };

export const Paused = Template.bind({});
Paused.args = { status: UPLOAD_STATUS.PAUSED };

export const CustomLabelAndIcon = Template.bind({});
CustomLabelAndIcon.args = {
  status: UPLOAD_STATUS.UPLOADING,
  label: 'In Upload with green progress',
  progressComponent: <CircularProgress size={16} color="success" />,
};
