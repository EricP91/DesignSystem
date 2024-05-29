import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { InfiniteScrollFixedSizeList } from './InfiniteScrollFixedSizeList.stories';

describe('InfiniteScrollFixedSizeList', () => {
  it('should render infinite scroll list with expected args', () => {
    const initialProps = { ...InfiniteScrollFixedSizeList.args };
    const changedProps = { ...initialProps, resetWatchList: ['test2'], scrollToItemIndex: 1 };
    const { container } = render(<InfiniteScrollFixedSizeList {...initialProps} />);
    render(<InfiniteScrollFixedSizeList {...changedProps} />, {
      container,
    });
  });

  it('should call console.log when calling isItemLoaded', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollFixedSizeList.args.infiniteLoader.isItemLoaded();
    expect(spy).toBeCalledWith('checking if is item loaded...');
  });

  it('should call console.log when calling loadMoreItems', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollFixedSizeList.args.infiniteLoader.loadMoreItems();
    expect(spy).toBeCalledWith('loading more items...');
  });

  it('should render list item when calling itemRenderer', () => {
    render(InfiniteScrollFixedSizeList.args.itemRenderer({ index: 0 }));
    expect(screen.getByText('List item 1')).toBeInTheDocument();
  });
});
