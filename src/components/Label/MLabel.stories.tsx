import { Story } from '@storybook/react';
import React from 'react';
import MLabel, { MLabelProps } from './MLabel';
import { CategoryIcon } from '../../assets/icons';

export default {
  title: 'Components/Labels',
  argTypes: {
    size: { control: { type: 'select', options: ['narrow', 'wide'] } },
  },
};

const Template: Story<MLabelProps> = (args) => <MLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'narrow',
  backgroundColor: '#274C7A',
  children: 'This is a label',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  size: 'narrow',
  backgroundColor: '#274C7A',
  children: 'This is a label with icon',
  icon: <CategoryIcon data-testid="svg" />,
};
