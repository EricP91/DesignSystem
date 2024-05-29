import React from 'react';
import { Story } from '@storybook/react';
import CustomizationMenu, { CustomizationMenuProps } from './CustomizationMenu';
import { ColumnIcon } from '../../../assets/icons';

export default {
  title: 'Components/Menu',
  component: CustomizationMenu,
};

const Template: Story<CustomizationMenuProps> = (args) => <CustomizationMenu {...args} />;
export const WithCustomization = Template.bind({});
WithCustomization.args = {
  buttonText: 'Customize',
  variant: 'outlined',
  buttonProps: { startIcon: <ColumnIcon /> },
  initialSelection: { 1: true, 15: true },
  items: [
    {
      id: '1',
      value: 'item 1',
    },
    {
      id: '2',
      value: 'item 2',
    },
    {
      id: '3',
      value: 'item 3',
    },
    {
      id: '4',
      value: 'item 4',
    },
    {
      id: '5',
      value: 'item 5',
    },
    {
      id: '6',
      value: 'item 6',
    },
    {
      id: '7',
      value: 'item 7',
    },
    {
      id: '8',
      value: 'item 8',
    },
    {
      id: '9',
      value: 'item 9',
    },
    {
      id: '10',
      value: 'item 10',
    },
    {
      id: '11',
      value: 'item 11',
    },
    {
      id: '12',
      value: 'item 12',
    },
    {
      id: '13',
      value: 'item 13',
    },
    {
      id: '14',
      value: 'item 14',
    },
    {
      id: '15',
      value: 'item 15',
    },
    {
      id: '16',
      value: 'item 16',
    },
    {
      id: '17',
      value: 'item 17',
    },
    {
      id: '18',
      value: 'item 18',
    },
    {
      id: '19',
      value: 'item 19',
    },
    {
      id: '20',
      value: 'item 20',
    },
    {
      id: '21',
      value: 'item 21',
    },
    {
      id: '22',
      value: 'item 22',
    },
    {
      id: '23',
      value: 'item 23',
    },
    {
      id: '24',
      value: 'item 24',
    },
    {
      id: '25',
      value: 'item 25',
    },
    {
      id: '26',
      value: 'item 26',
    },
    {
      id: '27',
      value: 'item 27',
    },
    {
      id: '28',
      value: 'item 28',
    },
    {
      id: '29',
      value: 'item 29',
    },
    {
      id: '30',
      value: 'item 30',
    },
    {
      id: '31',
      value: 'item 31',
    },
  ],
};
