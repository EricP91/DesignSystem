import { Story } from '@storybook/react';
import React from 'react';
import TagListPopover, { TagListPopoverProps } from './TagListPopover';

export default {
  title: 'Features/Tags/TagListPopover',
};

const Template: Story<TagListPopoverProps> = (args) => (
  <div style={{ margin: 30 }}>
    <TagListPopover {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  tags: [
    {
      name: 'Tag',
      color: 'red',
    },
  ],
  highlight: '',
};

export const Multiple = Template.bind({});
Multiple.args = {
  tags: [
    {
      name: 'This is a long tag #1',
      color: 'red',
    },
    {
      name: 'This ia very very very very very very very very very very very very very very very long tag #2',
      color: 'blue',
    },
    {
      name: 'This ia tag #3',
      color: 'black',
    },
    {
      name: 'This ia tag #4',
      color: 'black',
    },
    {
      name: 'This ia tag #5',
      color: 'black',
    },
  ],
  openFrom: 'left',
  highlight: '',
};

export const MultipleWithScroll = Template.bind({});
MultipleWithScroll.args = {
  tags: [
    {
      name: 'This is a long tag #1',
      color: 'red',
    },
    {
      name: 'This ia very very very very very very very very very very very very very very very long tag #2',
      color: 'blue',
    },
    {
      name: 'This ia tag #3',
      color: 'black',
    },
    {
      name: 'This ia tag #4',
      color: 'black',
    },
    {
      name: 'This ia tag #5',
      color: 'black',
    },
    {
      name: 'This ia tag #6',
      color: 'black',
    },
  ],
  openFrom: 'left',
  highlight: '',
};
