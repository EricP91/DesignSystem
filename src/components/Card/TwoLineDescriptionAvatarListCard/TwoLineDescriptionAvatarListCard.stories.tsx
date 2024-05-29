import React from 'react';
import { Story } from '@storybook/react';
import TwoLineDescriptionAvatarListCard, {
  TwoLineDescriptionAvatarListCardProps,
} from './TwoLineDescriptionAvatarListCard';
import { GroupChatIcon, OrganizationIcon, TagAvatarIcon, PencilIcon } from '../../../assets/icons';
import ReadMoreOrLessText from '../../Text/ReadMoreOrLessText';

export default {
  title: 'Components/Cards/TwoLineDescriptionAvatarListCard',
};

const Template: Story<TwoLineDescriptionAvatarListCardProps> = (args) => <TwoLineDescriptionAvatarListCard {...args} />;

const twoLineDescriptionAvatarList = [
  {
    children: <TagAvatarIcon />,
    primaryText: 'User tags',
    secondaryText: 'Friend, Co-worker',
    icon: '',
  },
  {
    children: <OrganizationIcon />,
    primaryText: 'Organization',
    secondaryText: 'Cellebrite, Cellebrite, Cellebrite, Cellebrite, Cellebrite, Cellebrite, Cellebrite, Cellebrite',
    icon: '',
  },
  {
    src: '',
    children: <GroupChatIcon />,
    primaryText: 'Groups',
    secondaryText: '0527255214',
    icon: '',
  },
  {
    src: '',
    children: <PencilIcon />,
    primaryText: 'Notes',
    secondaryText: (
      <ReadMoreOrLessText
        maxLetters={200}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niOrjeequia quis nostrud exercitation ullamco laboris niOrjeequia quis nostrud exercitation ullamco laboris niOrjeequia"
      />
    ),
    disableSecondaryTextOverflow: true,
    icon: '',
  },
];

export const TwoLineAvatarListCard = Template.bind({});

TwoLineAvatarListCard.args = {
  title: 'Additional info',
  twoLineDescriptionAvatarList,
};

export const HighlightTwoLineAvatarListCard = Template.bind({});

HighlightTwoLineAvatarListCard.args = {
  title: 'Additional info',
  twoLineDescriptionAvatarList,
  highlight: 'Friend',
};
