import { Story } from '@storybook/react';
import React, { useRef } from 'react';
import { Box } from '@mui/material';
import TopicList, { TopicListProps } from './TopicList';

export default {
  title: 'Features/Topics/TopicList',
};

const Template: Story<TopicListProps> = (args) => <TopicList {...args} />;

const TemplateWithContainer: Story<TopicListProps> = (args) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Box
      sx={{
        width: 161,
        maxWidth: 161,
        height: 100,
        padding: 0.5,
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'end',
        borderRadius: 1,
      }}
      ref={ref}
    >
      <TopicList {...args} parentRef={ref} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  topics: [
    {
      name: 'Topic 1',
      color: '#FDAE31',
    },
    {
      name: 'Topic 2',
      color: '#F8464E',
    },
    {
      name: 'Topic 3',
      color: '#1F7BF6',
    },
    {
      name: 'Topic 4',
      color: '#20B979',
    },
  ],
};

export const WithWrapper = TemplateWithContainer.bind({});
WithWrapper.args = {
  topics: [
    {
      name: 'Evidence Obstuction',
      color: '#FDAE31',
    },
    {
      name: 'Topic 2',
      color: '#F8464E',
    },
    {
      name: 'Topic 3',
      color: '#1F7BF6',
    },
    {
      name: 'Topic 4',
      color: '#20B979',
    },
    {
      name: 'Topic 5',
      color: '#20B979',
    },
    {
      name: 'Topic 6',
      color: '#20B979',
    },
  ],
};
