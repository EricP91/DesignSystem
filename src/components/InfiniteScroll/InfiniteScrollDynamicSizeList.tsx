import React, { CSSProperties, useEffect } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListOnItemsRenderedProps, VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useResizeDetector } from 'react-resize-detector';
import { useInfiniteLoaderWithDynamicHeight } from './hooks';
import { InfiniteScrollDynamicSizeListProps } from './types';

function InfiniteScrollDynamicSizeList({
  infiniteLoader,
  variableSizeList,
  itemRenderer,
  resetWatchList,
  scrollToItemIndex,
  forceScrollToItem,
  onItemsRenderedCb,
  onScroll,
}: InfiniteScrollDynamicSizeListProps): JSX.Element {
  const { infiniteLoaderRef, getRowHeight, setRowHeight } = useInfiniteLoaderWithDynamicHeight({
    resetWatchList,
    scrollToItemIndex,
    variableSizeList,
    forceScrollToItem,
  });

  const itemRendererWithDynamicHeight = React.memo<{ index: number; style: CSSProperties }>(({ index, style }) => {
    const { height, ref } = useResizeDetector();

    useEffect(() => {
      const elementHeight = height || ref.current?.clientHeight;
      if (elementHeight) {
        setRowHeight(index, elementHeight);
      }
    }, [index, height, ref]);

    return itemRenderer({ index, style, ref });
  });

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={infiniteLoader.isItemLoaded}
          loadMoreItems={infiniteLoader.loadMoreItems}
          itemCount={infiniteLoader.itemCount}
          threshold={infiniteLoader.threshold}
          minimumBatchSize={infiniteLoader.minimumBatchSize}
          ref={infiniteLoaderRef}
        >
          {({ onItemsRendered, ref }) => (
            <VariableSizeList
              itemCount={variableSizeList.itemCount}
              itemSize={getRowHeight}
              height={height}
              width={width}
              onItemsRendered={(props: ListOnItemsRenderedProps) => {
                if (typeof onItemsRenderedCb === 'function') {
                  onItemsRenderedCb(props);
                }

                onItemsRendered(props);
              }}
              ref={ref}
              onScroll={onScroll}
            >
              {itemRendererWithDynamicHeight}
            </VariableSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

export default InfiniteScrollDynamicSizeList;
