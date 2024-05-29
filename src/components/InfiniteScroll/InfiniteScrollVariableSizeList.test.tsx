import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { InfiniteScrollVariableSizeList } from './InfiniteScrollVariableSizeList.stories';

describe('InfiniteScrollVariableSizeList', () => {
  it('should render infinite scroll list with expected args', () => {
    const initialProps = { ...InfiniteScrollVariableSizeList.args };
    const changedProps = { ...initialProps, resetWatchList: ['test2'], scrollToItemIndex: 1 };
    const { container } = render(<InfiniteScrollVariableSizeList {...initialProps} />);
    render(<InfiniteScrollVariableSizeList {...changedProps} />, {
      container,
    });
  });

  it('should call console.log when calling isItemLoaded', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollVariableSizeList.args.infiniteLoader.isItemLoaded();
    expect(spy).toBeCalledWith('checking if is item loaded...');
  });

  it('should call console.log when calling loadMoreItems', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollVariableSizeList.args.infiniteLoader.loadMoreItems();
    expect(spy).toBeCalledWith('loading more items...');
  });

  it('should call console.log when calling itemSize', () => {
    const spy = jest.spyOn(console, 'log');
    InfiniteScrollVariableSizeList.args.variableSizeList.itemSize(0);
    expect(spy).toBeCalledWith('calculating item size...');
  });

  it('should render list item when calling itemRenderer', () => {
    render(InfiniteScrollVariableSizeList.args.itemRenderer({ index: 0 }));
    expect(screen.getByText('List item 1')).toBeInTheDocument();
  });
});
