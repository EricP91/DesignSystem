import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeConfig } from '../../theme';
import TableHead from './TableHead';

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

const onSortFn = jest.fn();

describe('TableHead', () => {
  afterEach(() => {
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
    onSortFn.mockClear();
  });

  it('should render the table headers without sorting', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableHead sort={{ order: 'asc', orderBy: '' }} onSort={onSortFn} headers={HEADERS} />
        </table>
      </ThemeConfig>
    );

    expect(screen.getByRole('columnheader', { name: 'Name' })).not.toHaveAttribute('aria-sort');
  });

  it('should render the table headers with ascending sorting', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableHead sort={{ order: 'asc', orderBy: 'name' }} onSort={onSortFn} headers={HEADERS} />
        </table>
      </ThemeConfig>
    );

    expect(screen.getByRole('columnheader', { name: 'Name' })).toHaveAttribute('aria-sort', 'ascending');
  });

  it('should render the table headers with descending sorting', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableHead sort={{ order: 'desc', orderBy: 'name' }} onSort={onSortFn} headers={HEADERS} />
        </table>
      </ThemeConfig>
    );

    expect(screen.getByRole('columnheader', { name: 'Name' })).toHaveAttribute('aria-sort', 'descending');
  });

  it('should execute onSort callback when a columnheader is clicked', () => {
    render(
      <ThemeConfig isLightMode>
        <table>
          <TableHead sort={{ order: 'desc', orderBy: 'name' }} onSort={onSortFn} headers={HEADERS} />
        </table>
      </ThemeConfig>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Id' }));
    expect(onSortFn).toHaveBeenCalledWith({ order: 'asc', orderBy: 'id' });
  });
});
