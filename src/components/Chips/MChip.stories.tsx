import { Story } from '@storybook/react';
import React from 'react';

import { ChatIcon } from '../../assets/icons';
import MChip, { MChipProps } from './MChip';

export default {
  title: 'Components/Chips',
};
const Template: Story<MChipProps> = (args) => <MChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Locations',
  count: 32,
  selected: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  name: 'Chats',
  count: 65,
  icon: <ChatIcon />,
  selected: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  name: 'Some Text',
  selected: false,
};
