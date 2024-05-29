import { Story } from '@storybook/react';
import React from 'react';
import TopicItem, { TopicItemProps } from './TopicItem';

export default {
  title: 'Features/Topics/TopicItem',
};

const Template: Story<TopicItemProps> = (args) => <TopicItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Money',
  color: '#FDAE31',
};

export const WithCount = Template.bind({});
WithCount.args = {
  name: 'Social Media',
  color: '#FE8153',
  count: 3,
};
