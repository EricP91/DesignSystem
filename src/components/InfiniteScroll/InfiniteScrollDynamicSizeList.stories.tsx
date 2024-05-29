import { Story } from '@storybook/react';
import React from 'react';
import { infiniteLoader, listItemRendererDynamicHeight } from './constants';
import InfiniteScrollDynamicSizeListComponent from './InfiniteScrollDynamicSizeList';
import { InfiniteScrollDynamicSizeListProps } from './types';

export default {
  title: 'Components/InfiniteScroll',
};

const Template: Story<InfiniteScrollDynamicSizeListProps> = (args) => (
  <InfiniteScrollDynamicSizeListComponent {...args} />
);

export const InfiniteScrollDynamicSizeList = Template.bind({});

InfiniteScrollDynamicSizeList.args = {
  resetWatchList: ['test'],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer: listItemRendererDynamicHeight,
  variableSizeList: {
    itemCount: 100,
    itemSize: () => 40,
    itemMargin: () => 20,
  },
};
