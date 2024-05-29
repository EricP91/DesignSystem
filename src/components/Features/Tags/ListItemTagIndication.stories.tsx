import { Story } from '@storybook/react';
import React from 'react';

import ListItemTagIndication, { ListItemTagIndicationProps } from './ListItemTagIndication';

export default {
  title: 'Features/Tags/ListItemTagIndication',
};

const tags = [
  {
    name: 'Evidence',
    color: 'blue',
  },
  {
    name: 'Important',
    color: 'green',
  },
  {
    name: 'Priority',
    color: 'red',
  },
  {
    name: 'Completed',
    color: 'purple',
  },
];

const Template: Story<ListItemTagIndicationProps> = (args) => <ListItemTagIndication {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  tags,
};

export const WithHighlight = Template.bind({});
WithHighlight.args = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  highlight: Default?.args?.tags[1]?.name.slice(3) ?? 'ortant',
  ...Default.args,
};
