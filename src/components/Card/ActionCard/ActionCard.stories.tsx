import React from 'react';
import { Story } from '@storybook/react';
import ActionCard, { ActionCardProps } from './ActionCard';

export default {
  title: 'Components/Cards/ActionCard',
};
const Template: Story<ActionCardProps> = (args) => <ActionCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: '',
};
