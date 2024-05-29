import React from 'react';
import { Story } from '@storybook/react';
import { Typography } from '@mui/material';
import ToggleGroup, { ToggleGroupProps } from './ToggleGroup';
import * as Icons from '../../assets/icons';

export default {
  title: 'Components/ToggleGroup',
};

const Template: Story<ToggleGroupProps> = (args) => <ToggleGroup {...(args as ToggleGroupProps)} />;

export const DefaultToggleGroup = Template.bind({});
DefaultToggleGroup.args = {
  items: [
    { id: 'image', value: 'image' },
    { id: 'video', value: 'video' },
    { id: 'audio', value: 'audio' },
  ],
};

export const CustomToggleGroup = Template.bind({});
CustomToggleGroup.args = {
  items: [
    {
      id: 'all',
      value: 'all',
      selected: true,
      renderer: () => <Typography>All</Typography>,
      icon: () => <Icons.UnknownAppIcon fill="black" />,
    },
    { id: 'image', value: 'image', renderer: () => <Typography>Image</Typography> },
    { id: 'video', value: 'video', renderer: () => <Typography>Video</Typography> },
    { id: 'audio', value: 'audio', disabled: true, renderer: () => <Typography>Audio</Typography> },
  ],
  exclusive: false,
  // eslint-disable-next-line no-console
  onChange: (value) => console.log(value),
  allOption: 'all',
};

export const ExclusiveToggleGroup = Template.bind({});
ExclusiveToggleGroup.args = {
  items: [
    { id: 'image', value: 'image', selected: true, renderer: () => <Typography>Image</Typography> },
    { id: 'video', value: 'video', renderer: () => <Typography>Video</Typography> },
    { id: 'audio', value: 'audio', renderer: () => <Typography>Audio</Typography> },
  ],
  exclusive: true,
};
