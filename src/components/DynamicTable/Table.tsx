import React from 'react';
import { Table as MuiTable, TableContainer } from '@mui/material';

import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

import type { Header, Sort } from './tableTypes';

export interface Props<T> {
  sort: Sort;
  headers: Header[];
  status?: 'loading' | 'loaded' | 'error';
  records: T[];
  onSort: (sort: Sort) => void;
  renderRow: (record: T) => JSX.Element;
  renderNoRecordsRow: () => JSX.Element;
  renderError: () => JSX.Element;
}

export default function Table<T>({
  sort,
  headers,
  status = 'loaded',
  records,
  onSort,
  renderRow,
  renderNoRecordsRow,
  renderError,
}: Props<T>): JSX.Element {
  return (
    <TableContainer>
      <MuiTable sx={{ tableLayout: 'fixed' }}>
        <TableHead headers={headers} sort={sort} onSort={onSort} />

        {status === 'loaded' ? (
          <TableBody rows={records} renderNoRecordsRow={renderNoRecordsRow} renderRow={renderRow} />
        ) : (
          <TableFooter status={status} colSpan={headers.length} renderError={renderError} />
        )}
      </MuiTable>
    </TableContainer>
  );
}
