import { Story } from '@storybook/react';
import React from 'react';
import HorizontalChart, { HorizontalChartProp } from './HorizontalChart';

export default {
  title: 'Components/HorizontalChart',
};

const Template: Story<HorizontalChartProp> = (args) => (
  <div style={{ marginTop: '100px', height: '320px' }}>
    <HorizontalChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Owner's activity",
  items: [
    {
      id: '0b5b10a5-aa0e-4f4b-9e0d-c92f769e0393',
      count: 40,
      avatar: <div>Avatar</div>,
      primaryText: 'CLBT',
      secondaryText: '300 participants',
      tooltip: <div>CLBT</div>,
    },
    {
      id: '1f72a4a2-7c7c-42f5-ad4d-f93545181ef7',
      count: 33,
      avatar: <div>Avatar</div>,
      primaryText: 'Unindentified Group',
      secondaryText: '2 participants',
      tooltip: <div>Unindentified Group</div>,
    },
    {
      id: '9277622a-a768-45ba-a555-a781a1eb8e99',
      count: 30,
      avatar: <div>Avatar</div>,
      primaryText: 'Class 14',
      secondaryText: '3 participants',
      tooltip: <div>Class 14</div>,
    },
    {
      id: 'c0e8eba1-e01b-449d-b4ea-788ed53c6827',
      count: 25,
      avatar: <div>Avatar</div>,
      primaryText: 'The Wiggles',
      secondaryText: '4 participants',
      tooltip: <div>The Wiggles</div>,
    },
  ],
};
