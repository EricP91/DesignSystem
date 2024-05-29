import { Story } from '@storybook/react';
import React from 'react';
import { DeviceInfo, DeviceInfoProps } from './DeviceInfo';

export default {
  title: 'Features/Summary/DeviceInfo',
};

const Template = (args: DeviceInfoProps): JSX.Element => <DeviceInfo {...args} />;

export const Default: Story<DeviceInfoProps> = Template.bind({});

Default.args = {
  categories: [
    {
      name: 'My other category',
      items: [
        {
          key: 'name1',
          value: '',
        },
        {
          key: 'name2',
          value: '0',
        },
        {
          key: 'name3',
          value: 'value3',
        },
        {
          key: 'name4',
          value: 'value4',
        },
        {
          key: 'name5',
          value: 'value5',
        },
      ],
    },
    {
      name: null,
      items: [
        {
          key: 'name6',
          value: 'value6',
        },
      ],
    },
    {
      name: 'My category',
      items: [
        {
          key: 'name7',
          value: 'value7',
        },
        {
          key: 'name8',
          value: 'value8',
        },
        {
          key: 'name9',
          value: 'value9',
        },
        {
          key: 'name10',
          value: 'value10',
        },
        {
          key: 'name11',
          value: 'value11',
        },
        {
          key: 'name12',
          value: 'value12',
        },
      ],
    },
    {
      name: 'another category',
      items: [
        {
          key: 'name7',
          value: 'value7',
        },
        {
          key: 'name8',
          value: 'value8',
        },
        {
          key: 'name9',
          value: 'value9',
        },
        {
          key: 'name10',
          value: 'value10',
        },
        {
          key: 'name11',
          value: 'value11',
        },
        {
          key: 'name12',
          value: 'value12',
        },
      ],
    },
  ],
  isLoading: false,
};
