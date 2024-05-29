import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export interface MTableProps extends DataGridProps {
  emptyTablePlaceHolder?: {
    content?: JSX.Element | string;
    props?: { [key: string]: unknown };
  };

  loadingOverlayPlaceHolder?: {
    content?: JSX.Element | string;
    props?: { [key: string]: unknown };
  };
}

export default function MTable(props: MTableProps): JSX.Element {
  const { emptyTablePlaceHolder, loadingOverlayPlaceHolder } = props;
  const PlaceHolderElement = (): JSX.Element => (
    <Box alignItems="center" justifyContent="center" display="flex" {...emptyTablePlaceHolder?.props}>
      {emptyTablePlaceHolder?.content}
    </Box>
  );

  const LoadingOverlayElement = (): JSX.Element => (
    <Box display="flex" {...loadingOverlayPlaceHolder?.props}>
      {loadingOverlayPlaceHolder?.content}
    </Box>
  );

  return (
    <>
      <DataGrid
        {...props}
        components={{
          NoRowsOverlay: PlaceHolderElement,
          LoadingOverlay: LoadingOverlayElement,
        }}
      />
    </>
  );
}
