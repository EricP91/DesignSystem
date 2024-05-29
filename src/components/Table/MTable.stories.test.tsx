import { render } from 'test-utils';
import React from 'react';
import { Box } from '@mui/material';
import { FullTable, EmptyTable } from './MTable.stories';

const ROWS = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];

const COLUMNS = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
];

it('should render full table', () => {
  const props = {
    columns: COLUMNS,
    rows: ROWS,
  };
  const { container } = render(
    <Box sx={{ height: 400, width: '100%' }}>
      <FullTable {...props} />
    </Box>
  );
  const rows = container.querySelectorAll('[data-id][role="row"]');
  expect(rows.length).toEqual(ROWS.length);
});

it('should render table without rows when no data', () => {
  const props = {
    columns: [],
    rows: [],
  };
  const { container } = render(<EmptyTable {...props} />);
  const headerRow = container.querySelectorAll('[role="row"]');
  const rows = container.querySelectorAll('[data-id][role="row"]');
  expect(headerRow.length).toEqual(1);
  expect(rows.length).toEqual(0);
});
