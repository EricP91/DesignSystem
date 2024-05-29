import { Story } from '@storybook/react';
import React from 'react';
import MCheckbox, { MCheckboxProps } from './MCheckbox';

export default {
  title: 'Components/Checkbox',
};

const Template: Story<MCheckboxProps> = (args) => <MCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
