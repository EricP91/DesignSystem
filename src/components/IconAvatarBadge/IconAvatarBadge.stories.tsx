import { Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import IconAvatarBadge, { IconAvatarBadgeProps } from './IconAvatarBadge';
import { CategoryIcon } from '../../assets/icons';
import TagList from '../Features/Tags/TagList';

export default {
  title: 'Components/IconAvatarBadge',
};

const Template: Story<IconAvatarBadgeProps> = (args) => <IconAvatarBadge {...args} />;

export const Single = Template.bind({});
Single.args = {
  badgeContent: 1,
  icon: <CategoryIcon />,
  list: (
    <Typography component="span" display="inline" variant="body2">
      Car
    </Typography>
  ),
};

const Multipletags = [
  {
    name: 'This is a long tag #1',
    color: 'red',
  },
  {
    name: 'This ia very very very very very very very very very very very very very very very long tag #2',
    color: 'blue',
  },
  {
    name: 'This ia tag #3',
    color: 'black',
  },
  {
    name: 'This ia tag #4',
    color: 'black',
  },
  {
    name: 'This ia tag #5',
    color: 'black',
  },
];

export const Multiple = Template.bind({});
Multiple.args = {
  badgeContent: 5,
  icon: <CategoryIcon />,
  list: <TagList tags={Multipletags} />,
};
