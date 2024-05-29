import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { InfiniteScrollDynamicSizeList } from './InfiniteScrollDynamicSizeList.stories';

describe('InfiniteScrollDynamicSizeList', () => {
  it('should render infinite scroll list with expected args', () => {
    const initialProps = { ...InfiniteScrollDynamicSizeList.args };
    const changedProps = { ...initialProps, resetWatchList: ['test2'], scrollToItemIndex: 1 };
    const { container } = render(<InfiniteScrollDynamicSizeList {...initialProps} />);
    render(<InfiniteScrollDynamicSizeList {...changedProps} />, {
      container,
    });
  });

  it('should call console.log when calling isItemLoaded', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollDynamicSizeList.args.infiniteLoader.isItemLoaded();
    expect(spy).toBeCalledWith('checking if is item loaded...');
  });

  it('should call console.log when calling loadMoreItems', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollDynamicSizeList.args.infiniteLoader.loadMoreItems();
    expect(spy).toBeCalledWith('loading more items...');
  });

  it('should render list item when calling itemRenderer', () => {
    render(InfiniteScrollDynamicSizeList.args.itemRenderer({ index: 5 }));
    expect(screen.getByText('List item simple 6')).toBeInTheDocument();
  });
});
