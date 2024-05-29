import { Story } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import AudioPlayer, { AudioPlayerProps } from './AudioPlayer';

export default {
  title: 'Components/AudioPlayer',
};

const Template: Story<AudioPlayerProps> = (args) => (
  <Box sx={{ width: '230px', height: '70px', borderRadius: 1, backgroundColor: '#637381' }}>
    <AudioPlayer {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
};
