import React from 'react';
import { Story } from '@storybook/react';
import { CallIcon, LocationIcon, MailIcon } from '../../../assets/icons';
import ValueDescriptionDividerAvatarListCard, {
  ValueDescriptionDividerAvatarListCardProps,
} from './ValueDescriptionDividerAvatarListCard';

export default {
  title: 'Components/Cards/ValueDescriptionDividerAvatarListCard',
};

const Template: Story<ValueDescriptionDividerAvatarListCardProps> = (args) => (
  <ValueDescriptionDividerAvatarListCard {...args} />
);

const valueDescriptionDividerAvatarList = {
  valueDescriptionDividerAvatarListItems: [
    {
      valueDescriptionDividerItems: [
        {
          value: '+972527255214',
          description: 'Home',
        },
        {
          value: '0527255214',
          description: 'Work',
        },
        {
          value: '0527255214',
          description: 'Other',
        },
      ],
      icon: <CallIcon />,
    },
    {
      valueDescriptionDividerItems: [
        {
          value: 'awis.s@gmail.com',
          description: 'Home',
        },
        {
          value: 'awis.simmons@gmail.com',
          description: 'Work',
        },
        {
          value: 'as.s@gmail.com',
          description: 'Other',
        },
      ],
      icon: <MailIcon />,
    },
    {
      valueDescriptionDividerItems: [
        {
          value: 'Be’eri 49, Tel Aviv',
          description: 'Home',
        },
        {
          value: 'Petach Tikva',
          description: 'Work',
        },
      ],
      icon: <LocationIcon fontSize="large" />,
    },
  ],
};

export const Default = Template.bind({});

Default.args = {
  title: 'Basic details',
  valueDescriptionDividerAvatarList,
};

export const HighlightValueDescriptionDividerAvatarListCard = Template.bind({});

HighlightValueDescriptionDividerAvatarListCard.args = {
  title: 'Basic details',
  valueDescriptionDividerAvatarList,
  highlight: 'gmail',
};
