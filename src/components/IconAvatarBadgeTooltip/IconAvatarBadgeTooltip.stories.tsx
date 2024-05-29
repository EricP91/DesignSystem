import { Story } from '@storybook/react';
import React from 'react';
import IconAvatarBadgeTooltip, { IconAvatarBadgeTooltipProps } from './IconAvatarBadgeTooltip';
import { HashTagIcon, TagIcon } from '../../assets/icons';
import { TagList } from '../Features/Tags';

export default {
  title: 'Components/IconAvatarBadgeTooltip',
};

const Template: Story<IconAvatarBadgeTooltipProps> = (args) => <IconAvatarBadgeTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <HashTagIcon bigIcon viewBox="0 0 16 16" width="16" height="16" fill="black" data-testid="hashtag-icon" />,
  badgeCounter: 1,
  popperContent: <p style={{ color: 'white' }}>Test</p>,
};

export const WithTagIcon = Template.bind({});
WithTagIcon.args = {
  icon: <TagIcon fill="black" />,
  badgeCounter: 1,
  popperContent: (
    <TagList
      tags={[
        { name: 'Evidence', color: 'red' },
        { name: 'Pending', color: 'red' },
        { name: 'Verified', color: 'red' },
      ]}
    />
  ),
};
