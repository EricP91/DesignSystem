import { Story } from '@storybook/react';
import React from 'react';
import { infiniteLoader, listItemRenderer } from './constants';
import InfiniteScrollVariableSizeListComponent from './InfiniteScrollVariableSizeList';
import { InfiniteScrollVariableSizeListProps } from './types';

export default {
  title: 'Components/InfiniteScroll',
};

const Template: Story<InfiniteScrollVariableSizeListProps> = (args) => (
  <InfiniteScrollVariableSizeListComponent {...args} />
);

export const InfiniteScrollVariableSizeList = Template.bind({});

InfiniteScrollVariableSizeList.args = {
  resetWatchList: ['test'],
  scrollToItemIndex: 0,
  infiniteLoader,
  itemRenderer: listItemRenderer,
  variableSizeList: {
    itemCount: 100,
    itemSize: (index: number) => {
      // eslint-disable-next-line no-console
      console.log('calculating item size...');
      return index % 2 === 0 ? 100 : 60;
    },
  },
};
