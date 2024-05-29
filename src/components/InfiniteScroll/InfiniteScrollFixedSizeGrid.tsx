import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useInfiniteLoader } from './hooks';
import { InfiniteScrollFixedSizeGridProps } from './types';

function InfiniteScrollFixedSizeGrid({
  infiniteLoader,
  fixedSizeGrid,
  itemRenderer,
  resetWatchList,
  scrollToItemIndex,
}: InfiniteScrollFixedSizeGridProps): JSX.Element {
  const infiniteLoaderRef = useInfiniteLoader({ resetWatchList, scrollToItemIndex });
  const { columnCount } = fixedSizeGrid;
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <InfiniteLoader {...infiniteLoader} ref={infiniteLoaderRef}>
          {({ onItemsRendered, ref }) => (
            <FixedSizeGrid
              {...fixedSizeGrid}
              height={height}
              width={width}
              onItemsRendered={({
                visibleRowStartIndex,
                visibleRowStopIndex,
                visibleColumnStartIndex,
                visibleColumnStopIndex,
                overscanRowStopIndex,
                overscanRowStartIndex,
                overscanColumnStartIndex,
                overscanColumnStopIndex,
              }) => {
                onItemsRendered({
                  overscanStartIndex: overscanRowStartIndex * columnCount + overscanColumnStartIndex,
                  overscanStopIndex: overscanRowStopIndex * columnCount + overscanColumnStopIndex,
                  visibleStartIndex: visibleRowStartIndex * columnCount + visibleColumnStartIndex,
                  visibleStopIndex: visibleRowStopIndex * columnCount + visibleColumnStopIndex,
                });
              }}
              ref={ref}
            >
              {itemRenderer}
            </FixedSizeGrid>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollFixedSizeGrid;
