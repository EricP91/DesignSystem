import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { InfiniteScrollFixedSizeGrid } from './InfiniteScrollFixedSizeGrid.stories';

describe('InfiniteScrollFixedSizeGrid', () => {
  it('should render infinite scroll grid with expected args', () => {
    const initialProps = { ...InfiniteScrollFixedSizeGrid.args };
    const changedProps = { ...initialProps, resetWatchList: ['test2'], scrollToItemIndex: 1 };
    const { container } = render(<InfiniteScrollFixedSizeGrid {...initialProps} />);
    render(<InfiniteScrollFixedSizeGrid {...changedProps} />, {
      container,
    });
  });

  it('should call console.log when calling isItemLoaded', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollFixedSizeGrid.args.infiniteLoader.isItemLoaded();
    expect(spy).toBeCalledWith('checking if is item loaded...');
  });

  it('should call console.log when calling loadMoreItems', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollFixedSizeGrid.args.infiniteLoader.loadMoreItems();
    expect(spy).toBeCalledWith('loading more items...');
  });

  it('should render grid item when calling itemRenderer', () => {
    render(InfiniteScrollFixedSizeGrid.args.itemRenderer({ columnIndex: 1, rowIndex: 1 }));
    expect(screen.getByText('row 1, column 1')).toBeInTheDocument();
  });
});
