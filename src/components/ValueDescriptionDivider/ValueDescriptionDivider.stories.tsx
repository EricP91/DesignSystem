import React from 'react';
import { Story } from '@storybook/react';
import ValueDescriptionDivider, { ValueDescriptionDividerProps } from './ValueDescriptionDivider';

export default {
  title: 'Components/ValueDescriptionDivider',
};

const Template: Story<ValueDescriptionDividerProps> = (args) => <ValueDescriptionDivider {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: '+972527255214',
  description: 'home',
};
