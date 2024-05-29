import { Story } from '@storybook/react';
import React from 'react';
import { gridItemRenderer, infiniteLoader } from './constants';
import InfiniteScrollFixedSizeGridComponent from './InfiniteScrollFixedSizeGrid';
import { InfiniteScrollFixedSizeGridProps } from './types';

export default {
  title: 'Components/InfiniteScroll',
};

const Template: Story<InfiniteScrollFixedSizeGridProps> = (args) => <InfiniteScrollFixedSizeGridComponent {...args} />;

export const InfiniteScrollFixedSizeGrid = Template.bind({});

InfiniteScrollFixedSizeGrid.args = {
  resetWatchList: ['test'],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer: gridItemRenderer,
  fixedSizeGrid: {
    columnCount: 6,
    columnWidth: 200,
    rowCount: Math.round(100 / 6),
    rowHeight: 50,
  },
};
