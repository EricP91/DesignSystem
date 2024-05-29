/* eslint-disable no-console */
import { Avatar, Typography } from '@mui/material';
import React, { CSSProperties } from 'react';
import { GridChildComponentProps, ListChildComponentProps } from 'react-window';
import { InfiniteLoaderProps } from './types';

export const infiniteLoader: InfiniteLoaderProps = {
  isItemLoaded: () => {
    console.log('checking if is item loaded...');
    return true;
  },
  itemCount: 100,
  loadMoreItems: async () => {
    console.log('loading more items...');
  },
  minimumBatchSize: 10,
  threshold: 50,
};

const generateItemCustomStyle = (index: number): Record<string, unknown> => ({
  padding: 10,
  borderRadius: 5,
  backgroundColor: index % 2 === 0 ? 'beige' : 'initial',
});

export const listItemRenderer = ({ index, style }: ListChildComponentProps): JSX.Element => {
  const customStyle = generateItemCustomStyle(index);
  return (
    <div style={{ ...style, ...customStyle }}>
      <Typography>List item {index + 1}</Typography>
    </div>
  );
};

export const listItemRendererDynamicHeight = ({
  index,
  style,
  ref,
}: {
  index: number;
  style: CSSProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.RefObject<any>;
}): JSX.Element => {
  const customStyle = generateItemCustomStyle(index);
  return (
    <div style={{ ...style, ...customStyle }}>
      {index % 2 === 0 ? (
        <Avatar ref={ref}>{index + 1}</Avatar>
      ) : (
        <div ref={ref}>
          <Typography>List item simple {index + 1} </Typography>
          {index % 5 === 0 && <Typography>List item new row</Typography>}
        </div>
      )}
    </div>
  );
};

export const gridItemRenderer = ({ columnIndex, rowIndex, style }: GridChildComponentProps): JSX.Element => {
  const customStyle = generateItemCustomStyle(rowIndex);
  return (
    <div style={{ ...style, ...customStyle }}>
      row {rowIndex}, column {columnIndex}
    </div>
  );
};
