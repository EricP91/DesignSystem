import React from 'react';
import { Story } from '@storybook/react';
import { Typography } from '@mui/material';
import { CrownIcon } from '../../assets/icons';

import Tile, { TileProps } from './Tile';
import CounterTile, { CounterTileProps } from './CounterTile';

export default {
  title: 'Components/Tile',

  argTypes: {
    color: { control: { type: 'select', options: ['error', 'success', 'info', 'warning'] } },
    children: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<TileProps> = (args) => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <CrownIcon />,
  active: false,
  color: 'info',
  children: (
    <Typography variant="largeMedium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra, nibh ut congue laoreet, arcu tellus
      cursus lorem, in euismod leo urna quis ex. Pellentesque tincidunt est in tristique consequat. Aliquam a justo sit
      amet sem tincidunt ultrices. Pellentesque a nisl vitae ligula dapibus cursus. Vivamus blandit tortor in feugiat
      semper. Integer sit amet eros sed magna molestie finibus. Proin dui eros, placerat in tristique non, consectetur
      lobortis enim. Fusce imperdiet sollicitudin ligula, in tincidunt quam fringilla sit amet. Vestibulum egestas
      tortor libero. In eu arcu purus. Quisque a est massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris eleifend nunc at lacus mattis placerat.
    </Typography>
  ),
};

const CounterTileTemplate: Story<CounterTileProps> = (args) => <CounterTile {...args} />;

export const WithCounter = CounterTileTemplate.bind({});
WithCounter.args = {
  header: 'Items in My Custody',
  color: 'info',
  icon: <CrownIcon />,
  active: false,
  count: 6,
};
