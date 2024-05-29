import React from 'react';
import { DataGridPro, DataGridProProps } from '@mui/x-data-grid-pro';
import { Box } from '@mui/system';

export interface MDataGridProProps extends DataGridProProps {
  emptyTablePlaceHolder?: {
    content?: JSX.Element | string;
    props?: Record<string, unknown>;
  };

  loadingOverlayPlaceHolder?: {
    content?: JSX.Element | string;
    props?: Record<string, unknown>;
  };
}

export default function MDataGridPro(props: MDataGridProProps): JSX.Element {
  const { emptyTablePlaceHolder, loadingOverlayPlaceHolder, slots } = props;
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
    <DataGridPro
      rowHeight={40}
      columnHeaderHeight={40}
      {...props}
      slots={{
        ...(slots || {}),
        noRowsOverlay: PlaceHolderElement,
        loadingOverlay: LoadingOverlayElement,
      }}
    />
  );
}
