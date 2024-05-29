import { useEffect, useRef, useState } from 'react';
import { InfiniteLoaderRefProps, InfiniteScrollDynamicSizeListProps, InfiniteScrollProps } from './types';

export function useInfiniteLoader({
  resetWatchList,
  scrollToItemIndex,
  forceScrollToItem,
}: Partial<InfiniteScrollProps>) {
  const infiniteLoaderRef: React.RefObject<any> = useRef<InfiniteLoaderRefProps>(null);
  const hasMountedRef = useRef(false);
  const [oldScrollIndex, setOldScrollIndex] = useState<number | undefined>(-1);

  useEffect(() => {
    if (infiniteLoaderRef.current && hasMountedRef.current) {
      infiniteLoaderRef.current.resetloadMoreItemsCache(true);
      // eslint-disable-next-line no-underscore-dangle
      infiniteLoaderRef.current._listRef.scrollToItem(0, 'end');
    }
    hasMountedRef.current = true;
  }, resetWatchList ?? []);

  useEffect(() => {
    const scrollIndexChanged = oldScrollIndex !== scrollToItemIndex;

    if (infiniteLoaderRef.current && ((scrollToItemIndex !== undefined && scrollIndexChanged) || forceScrollToItem)) {
      // eslint-disable-next-line no-underscore-dangle
      infiniteLoaderRef.current._listRef.scrollToItem(scrollToItemIndex ?? 0, 'start');

      if (scrollIndexChanged) {
        setOldScrollIndex(scrollToItemIndex);
      }
    }
  }, [scrollToItemIndex, forceScrollToItem]);

  return infiniteLoaderRef;
}

export function useInfiniteLoaderWithDynamicHeight({
  resetWatchList,
  scrollToItemIndex,
  variableSizeList,
  forceScrollToItem,
}: Partial<InfiniteScrollDynamicSizeListProps>) {
  const infiniteLoaderRef = useInfiniteLoader({
    resetWatchList,
    scrollToItemIndex,
    forceScrollToItem,
  });
  const rowHeightRefs: React.MutableRefObject<any> = useRef<Record<number, number>>({});

  function setRowHeight(index: number, size: number): void {
    if (infiniteLoaderRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      infiniteLoaderRef.current._listRef.resetAfterIndex(index);
    }
    rowHeightRefs.current = { ...rowHeightRefs.current, [index]: size };
  }

  function getRowHeight(index: number): number {
    if (!variableSizeList) return 0;
    const { itemSize, itemMargin } = variableSizeList;
    const currentRowHeight = rowHeightRefs.current[index];
    const size = typeof itemSize === 'function' ? itemSize(index) : itemSize;
    const margin = typeof itemMargin === 'function' ? itemMargin(index) : itemMargin;
    if (!currentRowHeight) return size;
    let currentRowMargin = margin;
    if (index === 0) {
      currentRowMargin += currentRowMargin;
    }
    return currentRowHeight + currentRowMargin;
  }

  return {
    infiniteLoaderRef,
    setRowHeight,
    getRowHeight,
  };
}
