import { Avatar } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import AvatarBadge, { AvatarBadgeProps } from './AvatarBadge';
import { LocationIcon } from '../../assets/icons';

export default {
  title: 'Components/Avatars',
};

const Template: Story<AvatarBadgeProps> = (args) => <AvatarBadge {...args} />;

export const AvatarWithBadge = Template.bind({});
AvatarWithBadge.args = {
  children: <Avatar sx={{ height: 48, width: 48 }} />,
  secondaryBadgeContent: <LocationIcon fill="white" />,
  primaryBadgeContent: <LocationIcon />,
};
