import React from 'react';
import { Story } from '@storybook/react';
import TitleCard, { TitleCardProps } from './TitleCard';

export default {
  title: 'Components/Cards/TitleCard',
};

const Template: Story<TitleCardProps> = (args) => <TitleCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'title card',
  children: <div>These are the children</div>,
};
