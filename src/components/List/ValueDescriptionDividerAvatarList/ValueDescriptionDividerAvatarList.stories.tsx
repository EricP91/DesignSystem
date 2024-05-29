import React from 'react';
import { Story } from '@storybook/react';
import { CalendarCallIcon, CheckListIcon, MagnifyingGlassIcon } from '../../../assets/icons';
import ValueDescriptionDividerAvatarList, {
  ValueDescriptionDividerAvatarListProps,
} from './ValueDescriptionDividerAvatarList';

export default {
  title: 'Components/List/ValueDescriptionDividerAvatarList',
};

const Template: Story<ValueDescriptionDividerAvatarListProps> = (args) => (
  <ValueDescriptionDividerAvatarList {...args} />
);

export const Default = Template.bind({});

Default.args = {
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
      icon: <MagnifyingGlassIcon />,
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
      icon: <CheckListIcon />,
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
      icon: <CalendarCallIcon />,
    },
  ],
};
