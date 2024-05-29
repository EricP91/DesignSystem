import React from 'react';
import { Story } from '@storybook/react';
import { AlertProps } from '@mui/material';
import MAlert from './MAlert';

export default {
  title: 'Components/Alert',
};

const Template: Story<AlertProps> = (args) => <MAlert {...args} />;

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  children: 'This is an error message',
};
export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  children: 'This is a warning message',
};
export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  children: 'This is an info message',
};
export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  children: 'This is a success message',
};
