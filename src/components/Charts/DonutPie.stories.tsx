import { Story } from '@storybook/react';
import React from 'react';
import { DonutRechart, DonutRechartProps } from './DonutRechart';

export default {
  title: 'components/Charts',
};

const Template: Story<DonutRechartProps> = (args) => <DonutRechart {...args} />;

export const PieChart = Template.bind({});
PieChart.args = {
  chartData: {
    count: 925,
    name: 'All apps',
    categories: [
      {
        name: 'Browser',
        value: 40,
      },
      {
        name: 'Chat applications',
        value: 50,
      },
      {
        name: 'Clean mobile',
        value: 90,
      },
      {
        name: 'Clean or delete files',
        value: 344,
      },
      {
        name: 'Developer tools',
        value: 110,
      },
      {
        name: 'Hide files or pictures',
        value: 15,
      },
      {
        name: 'Social networking',
        value: 35,
      },
      {
        name: 'Utilities',
        value: 20,
      },
      {
        name: 'Rest of apps ',
        value: 221,
      },
    ],
  },
  isLoading: false,
};
