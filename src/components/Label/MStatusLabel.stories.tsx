import React from 'react';
import { Story } from '@storybook/react';
import MStatusLabel, { MStatusLabelProps } from './MStatusLabel';

export default {
  title: 'Components/Labels/Status',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['negative', 'negativeShady', 'positive', 'positiveSoft', 'warning', 'muted', 'info'],
      },
    },
  },
};

const Template: Story<MStatusLabelProps> = (args) => <MStatusLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'info',
  children: 'Status',
};
