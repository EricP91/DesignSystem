import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from './Table';
import { ThemeConfig } from '../../theme';

const HEADERS = [
  {
    id: 'id',
    label: 'Id',
    width: '25%',
    minWidth: 100,
    sortable: true,
  },
  {
    id: 'name',
    label: 'Name',
    width: '50%',
    minWidth: 200,
    sortable: true,
  },
  {
    id: 'role',
    label: 'Role',
    width: '25%',
    minWidth: 100,
  },
];

const ROWS = [
  {
    id: 0,
    name: 'Daniel Kreag',
    role: 'User',
  },
  {
    id: 2,
    name: 'Jeffrey Estrada',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Ainsley Hanna',
    role: 'Visitor',
  },
];

const renderRow = (record: { id: number; name: string; role: string }): JSX.Element => (
  <tr key={record.id}>
    <td>{record.name}</td>
    <td>{record.role}</td>
  </tr>
);

const renderNoRecordsRow = (): JSX.Element => (
  <tr>
    <td>No records to show</td>
  </tr>
);

const renderError = (): JSX.Element => (
  <tr>
    <td>Error loading</td>
  </tr>
);

const onSortFn = jest.fn();

describe('Table', () => {
  describe('should successfully load', () => {
    afterEach(() => {
      expect(screen.getAllByRole('row').length).toBeGreaterThan(1);
      onSortFn.mockClear();
    });

    it('should render a table in loaded status', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="loaded"
            headers={HEADERS}
            sort={{ order: 'asc', orderBy: '' }}
            onSort={onSortFn}
            records={ROWS}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      expect(screen.getByRole('columnheader', { name: 'Name' })).not.toHaveAttribute('aria-sort');
    });

    it('should render a table in loaded status with sorting', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="loaded"
            headers={HEADERS}
            sort={{ order: 'asc', orderBy: 'name' }}
            onSort={onSortFn}
            records={ROWS}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      expect(screen.getByRole('columnheader', { name: 'Name' })).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should apply sorting when a columnheader is clicked', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="loaded"
            headers={HEADERS}
            sort={{ order: 'desc', orderBy: 'name' }}
            onSort={onSortFn}
            records={ROWS}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      fireEvent.click(screen.getByRole('button', { name: 'Name' }));
      expect(onSortFn).toHaveBeenCalledWith({ order: 'asc', orderBy: 'name' });
    });

    it('should render an empty table', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="loaded"
            headers={HEADERS}
            sort={{ order: 'desc', orderBy: 'name' }}
            onSort={onSortFn}
            records={[]}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      expect(screen.getByText(/no records/i)).toBeInTheDocument();
    });

    it('should render a table in loading status', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="loading"
            headers={HEADERS}
            sort={{ order: 'desc', orderBy: 'name' }}
            onSort={onSortFn}
            records={[]}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('should render a table in error status', () => {
      render(
        <ThemeConfig isLightMode>
          <Table
            status="error"
            headers={HEADERS}
            sort={{ order: 'desc', orderBy: 'name' }}
            onSort={onSortFn}
            records={[]}
            renderRow={renderRow}
            renderNoRecordsRow={renderNoRecordsRow}
            renderError={renderError}
          />
        </ThemeConfig>
      );

      expect(screen.getByText(/error loading/i)).toBeInTheDocument();
    });
  });
});
