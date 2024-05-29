import { Story } from '@storybook/react';
import React from 'react';
import TagList, { TagListProp } from './TagList';

export default {
  title: 'Features/Tags/TagList',
};

const Template: Story<TagListProp> = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    {
      name: 'Tag 1',
      color: 'red',
    },
    {
      name: 'Tag 2',
      color: 'blue',
    },
    {
      name: 'Tag 3',
      color: 'green',
    },
  ],
  highlight: '',
};
