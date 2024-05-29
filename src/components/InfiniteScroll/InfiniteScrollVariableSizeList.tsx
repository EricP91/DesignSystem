import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useInfiniteLoader } from './hooks';
import { InfiniteScrollVariableSizeListProps } from './types';

function InfiniteScrollVariableSizeList({
  infiniteLoader,
  variableSizeList,
  itemRenderer,
  resetWatchList,
  scrollToItemIndex,
}: InfiniteScrollVariableSizeListProps): JSX.Element {
  const infiniteLoaderRef = useInfiniteLoader({ resetWatchList, scrollToItemIndex });
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <InfiniteLoader {...infiniteLoader} ref={infiniteLoaderRef}>
          {({ onItemsRendered, ref }) => (
            <VariableSizeList
              {...variableSizeList}
              height={height}
              width={width}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {itemRenderer}
            </VariableSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollVariableSizeList;
