import { Story } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import { topics, filteredTopics, manyFilteredTopics } from './constants';
import TopicChipList, { TopicChipListProps } from './TopicChipList';

export default {
  title: 'Features/Topics/TopicChipList',
};

const Template: Story<TopicChipListProps> = (args) => <TopicChipList {...args} />;

const TemplateWithContainer: Story<TopicChipListProps> = (args) => {
  const [width, setWidth] = useState(350);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Box
        sx={{
          maxWidth: width,
          height: 65,
          padding: 1,
          backgroundColor: '#e0e3e6',
          display: 'flex',
          alignItems: 'end',
          borderRadius: 1,
        }}
        ref={containerRef}
      >
        <TopicChipList {...args} />
      </Box>
      <Button
        onClick={() => {
          setWidth(width + 10);
        }}
      >
        Resize container
      </Button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  expandOnResize: true,
  topicsText: 'Topics',
  topics,
};

export const WithContainer = TemplateWithContainer.bind({});
WithContainer.args = {
  topics,
  expandOnResize: true,
};

export const WithFilteredTopics = Template.bind({});
WithFilteredTopics.args = {
  topicsText: 'Topics',
  topics,
  filteredTopics,
  expandOnResize: true,
};

export const WithFilteredTopicsAndContainer = TemplateWithContainer.bind({});
WithFilteredTopicsAndContainer.args = {
  topicsText: 'Topics',
  topics,
  filteredTopics,
  expandOnResize: true,
};

export const WithManyFilteredTopicsAndContainer = TemplateWithContainer.bind({});
WithManyFilteredTopicsAndContainer.args = {
  topicsText: 'Topics',
  topics,
  filteredTopics: manyFilteredTopics,
  expandOnResize: true,
};
