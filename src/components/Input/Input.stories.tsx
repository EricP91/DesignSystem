import React from 'react';
import { Story } from '@storybook/react';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import MInput from './MInput';

export default {
  title: 'Components/Inputs',
};

const Template: Story<TextFieldProps> = (args) => <MInput {...args} />;

export const OutlinedTextField = Template.bind({});
OutlinedTextField.args = {
  required: false,
  label: 'Label',
  defaultValue: 'Default Value',
};

export const MultiLineTextField = Template.bind({});
MultiLineTextField.args = {
  rows: 4,
  fullWidth: true,
  multiline: true,
  label: 'Multiline',
  defaultValue: 'Default Value',
};
