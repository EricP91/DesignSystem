import { Story } from '@storybook/react';
import React from 'react';
import MiniNavbar from './MiniNavbar';
import { CaseIcon, CogIcon, PencilIcon, ReceiveIcon } from '../../../assets/icons';

export default {
  title: 'Components/SideBars/MiniNavbar',
};

const Template: Story = (args) => <MiniNavbar {...args} />;
export const Default = Template.bind({});

Default.args = {
  items: [
    {
      link: '/case',
      icon: <CaseIcon />,
      title: 'Cases',
    },
    {
      icon: <ReceiveIcon />,
      title: 'Edit',
      subItems: [
        { link: '/edit/pencil', icon: <PencilIcon />, title: 'Pencil' },
        { link: '/edit/settings', icon: <CogIcon />, title: 'Settings' },
      ],
    },
  ],
};
