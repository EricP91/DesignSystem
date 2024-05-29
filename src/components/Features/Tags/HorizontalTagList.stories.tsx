import { Story } from '@storybook/react';
import React, { useRef } from 'react';
import { Box } from '@mui/material';
import HorizontalTagList, { HorizontalTagListProps } from './HorizontalTagList';

export default {
  title: 'Features/Tags/HorizontalTagList',
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

const Template: Story<HorizontalTagListProps> = (args) => <HorizontalTagList {...args} />;
const TemplateWithContainer: Story<HorizontalTagListProps> = (args) => {
  const parentRef = useRef(null);
  return (
    <Box
      ref={parentRef}
      sx={{
        maxWidth: 285,
        width: 285,
        height: 100,
        padding: 0.5,
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'end',
        borderRadius: 1,
      }}
    >
      <HorizontalTagList {...args} parentRef={parentRef} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  tags,
};

export const WithWrapper = TemplateWithContainer.bind({});
WithWrapper.args = {
  tags,
};

export const WithHighlight = Template.bind({});
WithHighlight.args = {
  tags,
  highlight: tags[1].name,
};

export const WithWrapperAndHighlight = TemplateWithContainer.bind({});

WithWrapperAndHighlight.args = {
  tags,
  highlight: tags[2].name.slice(3),
};
