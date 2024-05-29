import { Story } from '@storybook/react';
import React from 'react';
import MSwitch from './MSwitch';
import MFormControlLabel, { MFormControlLabelProps } from '../Forms/MFormControlLabel/MFormControlLabel';

export default {
  title: 'Components/Switches',
  argTypes: {
    labelPlacement: { control: { type: 'select', options: ['start', 'end'] } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/U9hFJBKhAgjTRGbU1TfIDB/Design_System?node-id=507%3A11',
    },
  },
};

const Template: Story<MFormControlLabelProps> = ({ label, disabled, checked, labelPlacement }) =>
  label ? (
    <MFormControlLabel
      disabled={disabled}
      labelPlacement={labelPlacement}
      control={<MSwitch disabled={disabled} />}
      label={label}
    />
  ) : (
    <MSwitch disabled={disabled} checked={checked} />
  );

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: 'Switch title',
  labelPlacement: 'start',
};
