import React, { CSSProperties } from 'react';
import {
  Align,
  GridChildComponentProps,
  ListChildComponentProps,
  ListOnItemsRenderedProps,
  ListOnScrollProps,
} from 'react-window';

export interface InfiniteLoaderProps {
  isItemLoaded: (index: number) => boolean;
  loadMoreItems: (startIndex: number, stopIndex: number) => Promise<void>;
  itemCount: number;
  threshold?: number;
  minimumBatchSize?: number;
}

export type OnItemsRenderedCb = (props: ListOnItemsRenderedProps) => unknown;

export interface InfiniteLoaderRefProps {
  _listRef: {
    scrollTo(scrollOffset: number): void;
    scrollToItem(index: number, align?: Align): void;
    resetAfterIndex(index: number, shouldForceUpdate?: boolean): void;
  };

  resetloadMoreItemsCache(autoReload?: boolean): void;
}

export interface InfiniteScrollProps {
  infiniteLoader: InfiniteLoaderProps;
  resetWatchList?: unknown[];
  scrollToItemIndex?: number;
  forceScrollToItem?: boolean;
}

export interface InfiniteScrollFixedSizeListProps extends InfiniteScrollProps {
  itemRenderer: React.ComponentType<ListChildComponentProps>;
  fixedSizeList: {
    itemCount: number;
    itemSize: number;
  };
}

export interface InfiniteScrollVariableSizeListProps extends InfiniteScrollProps {
  itemRenderer: React.ComponentType<ListChildComponentProps>;
  variableSizeList: {
    itemCount: number;
    itemSize: (index: number) => number;
  };
}

export interface InfiniteScrollDynamicSizeListProps extends InfiniteScrollProps {
  itemRenderer: (props: {
    index: number;
    style: CSSProperties;
    ref: React.MutableRefObject<HTMLElement | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any;
  variableSizeList: {
    itemCount: number;
    itemSize: number | ((index: number) => number);
    itemMargin: number | ((index: number) => number);
  };
  onItemsRenderedCb?: OnItemsRenderedCb;
  forceScrollToItem?: boolean;
  onScroll?: (props: ListOnScrollProps) => void;
}

export interface InfiniteScrollFixedSizeGridProps extends InfiniteScrollProps {
  itemRenderer: React.ComponentType<GridChildComponentProps>;
  fixedSizeGrid: {
    columnCount: number;
    columnWidth: number;
    rowCount: number;
    rowHeight: number;
  };
}

export interface InfiniteScrollVariableSizeGridProps extends InfiniteScrollProps {
  itemRenderer: React.ComponentType<GridChildComponentProps>;
  variableSizeGrid: {
    columnCount: number;
    columnWidth: (index: number) => number;
    rowCount: number;
    rowHeight: (index: number) => number;
  };
}
