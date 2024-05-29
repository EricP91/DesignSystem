import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useInfiniteLoader } from './hooks';
import { InfiniteScrollVariableSizeGridProps } from './types';

function InfiniteScrollVariableSizeGrid({
  infiniteLoader,
  variableSizeGrid,
  itemRenderer,
  resetWatchList,
  scrollToItemIndex,
}: InfiniteScrollVariableSizeGridProps): JSX.Element {
  const infiniteLoaderRef = useInfiniteLoader({ resetWatchList, scrollToItemIndex });
  const { columnCount } = variableSizeGrid;
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <InfiniteLoader {...infiniteLoader} ref={infiniteLoaderRef}>
          {({ onItemsRendered, ref }) => (
            <VariableSizeGrid
              {...variableSizeGrid}
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
            </VariableSizeGrid>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollVariableSizeGrid;
