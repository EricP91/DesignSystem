import { Story } from '@storybook/react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import Scrollbars from './Scrollbars';

export default {
  title: 'Components/Scrollbar',
};

const Template: Story<ScrollbarsProps> = (args) => (
  <Scrollbars {...args}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {[...Array(args.arraylength)].map(() => (
      <p key={uuid()}>{args.text}</p>
    ))}
  </Scrollbars>
);

export const Default = Template.bind({});
Default.args = {
  arraylength: 100,
  style: {
    height: '300px',
    width: '300px',
  },
  text: 'Hover to see scroll',
};

export interface ScrollbarsProps {
  className: string;
  text: string;
  style: { height: string; width: string };
  arraylength: number;
}
