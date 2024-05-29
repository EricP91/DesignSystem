import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useInfiniteLoader } from './hooks';
import { InfiniteScrollFixedSizeListProps } from './types';

function InfiniteScrollFixedSizeList({
  infiniteLoader,
  fixedSizeList,
  itemRenderer,
  resetWatchList,
  scrollToItemIndex,
}: InfiniteScrollFixedSizeListProps): JSX.Element {
  const infiniteLoaderRef = useInfiniteLoader({ resetWatchList, scrollToItemIndex });
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <InfiniteLoader {...infiniteLoader} ref={infiniteLoaderRef}>
          {({ onItemsRendered, ref }) => (
            <FixedSizeList {...fixedSizeList} height={height} width={width} onItemsRendered={onItemsRendered} ref={ref}>
              {itemRenderer}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollFixedSizeList;
