import { render } from 'test-utils';
import React from 'react';
import { Box } from '@mui/material';
import MTable from '../Table/MTable';
import TableSkeleton from './TableSkeleton';

const COLUMNS = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'cellphone', headerName: 'Cellphone' },
];

it('should add skeleton overlay with 8 rows', () => {
  const rowsCount = 8;
  const props = {
    columns: COLUMNS,
    rows: [],
    loading: true,
    loadingOverlayPlaceHolder: {
      content: <TableSkeleton rowsNumber={rowsCount} />,
    },
  };
  const { container } = render(
    <Box sx={{ height: 400, width: '100%' }}>
      <MTable {...props} />
    </Box>
  );

  const cellsCount = COLUMNS.length * rowsCount;
  const cells = container.querySelectorAll('.MuiSkeleton-rectangular');
  expect(cellsCount).toEqual(cells.length);
});

it('should not have a skeleton overlay when loading false', () => {
  const rowsCount = 8;
  const props = {
    columns: COLUMNS,
    rows: [],
    loading: false,
    loadingOverlayPlaceHolder: {
      content: <TableSkeleton rowsNumber={rowsCount} />,
    },
  };
  const { container } = render(
    <Box sx={{ height: 400, width: '100%' }}>
      <MTable {...props} />
    </Box>
  );

  const cells = container.querySelectorAll('.MuiSkeleton-rectangular');
  expect(0).toEqual(cells.length);
});
