import { Box } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import ReplyMessage, { ReplyMessageProps } from './ReplyMessage';

export default {
  title: 'Components/Chat/Messages/ReplyMessage',
};

const Template: Story<ReplyMessageProps> = (args) => (
  <Box sx={{ width: 296 }}>
    <ReplyMessage {...args} />
  </Box>
);

export const WithText = Template.bind({});
WithText.args = {
  title: 'Tomer Avni',
  children: 'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Tomer Avni',
  children: '',
  imageSrc:
    'https://e7.pngegg.com/pngimages/670/630/png-clipart-super-meat-boy-forever-nintendo-switch-super-tofu-boy-minecraft-poggers-twitch-emote-video-game-playstation-4-thumbnail.png',
  showImageLoader: false,
  type: 'image',
};

export const WithImageAndText = Template.bind({});
WithImageAndText.args = {
  title: 'Tomer Avni',
  children: 'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!',
  imageSrc:
    'https://e7.pngegg.com/pngimages/670/630/png-clipart-super-meat-boy-forever-nintendo-switch-super-tofu-boy-minecraft-poggers-twitch-emote-video-game-playstation-4-thumbnail.png',
  showImageLoader: false,
  type: 'image',
};

export const WithNoRootStyle = Template.bind({});
WithNoRootStyle.args = {
  title: 'Tomer Avni',
  children: 'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!',
  shouldUseRootStyle: false,
};

export const WithVideoAndText = Template.bind({});
WithVideoAndText.args = {
  title: 'Tomer Avni',
  children: 'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!',
  imageSrc:
    'https://e7.pngegg.com/pngimages/670/630/png-clipart-super-meat-boy-forever-nintendo-switch-super-tofu-boy-minecraft-poggers-twitch-emote-video-game-playstation-4-thumbnail.png',
  showImageLoader: false,
  type: 'video',
};

export const WithAudioAndText = Template.bind({});
WithAudioAndText.args = {
  title: 'Tomer Avni',
  children: 'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!',
  showImageLoader: false,
  type: 'audio',
  audioTextFallback: '[no duration]',
};
