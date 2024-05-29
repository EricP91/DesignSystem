import { render, screen } from 'test-utils';
import React from 'react';
import { Box } from '@mui/material';
import MTable from './MTable';

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

it('should render table', () => {
  const { container } = render(<MTable columns={[]} rows={[]} />);
  expect(container).toBeInTheDocument();
});

it('should render table with data', () => {
  const props = {
    columns: COLUMNS,
    rows: ROWS,
  };
  const { container } = render(
    <Box sx={{ height: 400, width: '100%' }}>
      <MTable {...props} />
    </Box>
  );
  const rows = container.querySelectorAll('[data-id][role="row"]');
  expect(rows.length).toEqual(ROWS.length);
});

it('should not render table when no data', () => {
  const props = {
    columns: [],
    rows: [],
  };
  const { container } = render(<MTable {...props} />);
  const headerRow = container.querySelectorAll('[role="row"]');
  const rows = container.querySelectorAll('[data-id][role="row"]');
  expect(headerRow.length).toEqual(1);
  expect(rows.length).toEqual(0);
});

it('should add placeholder render table when no data and placeholder provided', () => {
  const props = {
    columns: [],
    rows: [],
    emptyTablePlaceHolder: {
      content: <>No data presented</>,
    },
  };
  render(<MTable {...props} />);
  expect(screen.getByText('No data presented')).toBeInTheDocument();
});

it('should add an overlay when a placeholder is provided and loading is true', () => {
  const props = {
    columns: COLUMNS,
    rows: [],
    loading: true,
    loadingOverlayPlaceHolder: {
      content: <>Loading...</>,
    },
  };
  render(<MTable {...props} />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
