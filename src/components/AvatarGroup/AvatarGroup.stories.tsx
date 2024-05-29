import { Avatar } from '@mui/material';
import React from 'react';
import ClickableGroupAvatar from './AvatarGroup';

const Template = (args) => <ClickableGroupAvatar {...args} />;
export const GroupAvatar = Template.bind({});

GroupAvatar.args = {
  label: 'AvatarGroup',
  style: { display: 'flex', justifyContent: 'flex-end' },
  children: Array.from(Array(20), (_, i) => <Avatar key={i} />),
  handleClickOnExtraAvatars: () => null,
};

export default {
  title: 'Components/ComposedAvatars',
};
