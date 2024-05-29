import React from 'react';
import { Story } from '@storybook/react';
import TwoLineDescriptionAvatar, { AvatarWithIcon } from '.';
import GuardianIcon from '../../assets/icons/icon.png';

export default {
  title: 'Components/ComposedAvatars',
};

const Template: Story<AvatarWithIcon> = (args) => <TwoLineDescriptionAvatar {...args} />;

export const TwoLineAvatar = Template.bind({});

TwoLineAvatar.args = {
  icon: GuardianIcon,
  primaryText: 'Hello',
  secondaryText: 'World',
  highlight: '',
  avatarStyle: {},
};

export const TwoLineAvatarLongText = Template.bind({});

TwoLineAvatarLongText.args = {
  icon: GuardianIcon,
  primaryText: 'This is very very very very very very very long text',
  secondaryText: 'Short text',
  highlight: '',
};
