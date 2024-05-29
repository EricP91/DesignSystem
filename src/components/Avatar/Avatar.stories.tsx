import { Avatar, AvatarProps } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import { ArrowIcon } from '../../assets/icons';

export default {
  title: 'Components/Avatars',
};

// eslint-disable-next-line react/destructuring-assignment
const Template: Story<AvatarProps> = (args) => <Avatar {...args}>{args.children}</Avatar>;
export const FallbackAvatar = Template.bind({});

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  src: 'avatar.png',
};

export const LetterAvatar = Template.bind({});
LetterAvatar.args = {
  children: 'EX',
};

export const IconAvatar = Template.bind({});
IconAvatar.args = {
  children: <ArrowIcon data-testid="svg" />,
};
