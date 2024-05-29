import { Story } from '@storybook/react';
import React from 'react';
import { infiniteLoader, listItemRenderer } from './constants';
import InfiniteScrollFixedSizeListComponent from './InfiniteScrollFixedSizeList';
import { InfiniteScrollFixedSizeListProps } from './types';

export default {
  title: 'Components/InfiniteScroll',
};

const Template: Story<InfiniteScrollFixedSizeListProps> = (args) => <InfiniteScrollFixedSizeListComponent {...args} />;

export const InfiniteScrollFixedSizeList = Template.bind({});

InfiniteScrollFixedSizeList.args = {
  resetWatchList: ['test'],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer: listItemRenderer,
  fixedSizeList: {
    itemCount: 100,
    itemSize: 40,
  },
};
