import { Story } from '@storybook/react';
import React from 'react';
import VerticalChart, { VerticalChartProp } from './VerticalChart';

export default {
  title: 'Components/VerticalChart',
};

const Template: Story<VerticalChartProp> = (args) => (
  <div style={{ marginTop: '100px', height: '360px' }}>
    <VerticalChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Top items',
  items: [
    {
      id: '0b5b10a5-aa0e-4f4b-9e0d-c92f769e0393',
      count: 140,
      avatar: <div>Avatar</div>,
      primaryText: 'James Bond',
      secondaryText: '+3231231231414',
      tooltip: <div>James Bond</div>,
    },
    {
      id: '1f72a4a2-7c7c-42f5-ad4d-f93545181ef7',
      count: 40,
      avatar: <div>Avatar</div>,
      primaryText: 'Ulla Jonsson',
      secondaryText: '+1231231231414',
      tooltip: <div>Ulla Jonsson</div>,
    },
    {
      id: '9277622a-a768-45ba-a555-a781a1eb8e99',
      count: 3,
      avatar: <div>Avatar</div>,
      primaryText: 'iPhone4 Shirley',
      secondaryText: '+1231231231414',
      tooltip: <div>iPhone4 Shirley</div>,
    },
    {
      id: 'c0e8eba1-e01b-449d-b4ea-788ed53c6827',
      count: 1,
      avatar: <div>Avatar</div>,
      primaryText: 'Mr Wiggles',
      secondaryText: undefined,
      tooltip: <div>Mr Wiggles</div>,
    },
    {
      id: '',
      count: 0,
      avatar: undefined,
      primaryText: '',
      secondaryText: undefined,
      tooltip: undefined,
    },
  ],
};
