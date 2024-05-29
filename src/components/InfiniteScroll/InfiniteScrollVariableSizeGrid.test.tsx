import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { InfiniteScrollVariableSizeGrid } from './InfiniteScrollVariableSizeGrid.stories';

describe('InfiniteScrollVariableSizeGrid', () => {
  it('should render infinite scroll grid with expected args', () => {
    const initialProps = { ...InfiniteScrollVariableSizeGrid.args };
    const changedProps = { ...initialProps, resetWatchList: ['test2'], scrollToItemIndex: 1 };
    const { container } = render(<InfiniteScrollVariableSizeGrid {...initialProps} />);
    render(<InfiniteScrollVariableSizeGrid {...changedProps} />, {
      container,
    });
  });

  it('should call console.log when calling isItemLoaded', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollVariableSizeGrid.args.infiniteLoader.isItemLoaded();
    expect(spy).toBeCalledWith('checking if is item loaded...');
  });

  it('should call console.log when calling loadMoreItems', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollVariableSizeGrid.args.infiniteLoader.loadMoreItems();
    expect(spy).toBeCalledWith('loading more items...');
  });

  it('should render grid item when calling itemRenderer', () => {
    render(InfiniteScrollVariableSizeGrid.args.itemRenderer({ columnIndex: 1, rowIndex: 1 }));
    expect(screen.getByText('row 1, column 1')).toBeInTheDocument();
  });

  it('should call console.log when calling rowHeight', () => {
    const spy = jest.spyOn(console, 'log');
    render(InfiniteScrollVariableSizeGrid.args.variableSizeGrid.rowHeight(1));
    expect(spy).toBeCalledWith('calculating item 1 height...');
  });

  it('should call console.log when calling columnWidth', () => {
    const spy = jest.spyOn(console, 'log');
    render(InfiniteScrollVariableSizeGrid.args.variableSizeGrid.columnWidth(1));
    expect(spy).toBeCalledWith('calculating item 1 width...');
  });
});
