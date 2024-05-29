/* eslint-disable no-console */
import { Story } from '@storybook/react';
import React from 'react';
import { gridItemRenderer, infiniteLoader } from './constants';
import InfiniteScrollVariableSizeGridComponent from './InfiniteScrollVariableSizeGrid';
import { InfiniteScrollVariableSizeGridProps } from './types';

export default {
  title: 'Components/InfiniteScroll',
};

const Template: Story<InfiniteScrollVariableSizeGridProps> = (args) => (
  <InfiniteScrollVariableSizeGridComponent {...args} />
);

export const InfiniteScrollVariableSizeGrid = Template.bind({});

InfiniteScrollVariableSizeGrid.args = {
  resetWatchList: ['test'],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer: gridItemRenderer,
  variableSizeGrid: {
    columnCount: 6,
    columnWidth: (index) => {
      console.log(`calculating item ${index} width...`);
      return 200;
    },
    rowCount: Math.round(100 / 6),
    rowHeight: (index) => {
      console.log(`calculating item ${index} height...`);
      return index % 2 === 0 ? 100 : 50;
    },
  },
};
