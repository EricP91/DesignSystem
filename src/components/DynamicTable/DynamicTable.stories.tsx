import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import { TableRow, TableCell, Typography } from '@mui/material';
import MTable, { Props as MTableProps } from './Table';
import Popper from '../Popper/Popper';
import type { Sort } from './tableTypes';

export default {
  title: 'components/DynamicTable',
  argTypes: {
    status: {
      control: 'select',
      options: ['loading', 'loaded', 'error'],
    },
  },
};

export interface UserRecord {
  id: number;
  name: string;
  role: string;
}

interface UserRowProps {
  record: UserRecord;
  onRivalChange: (id: number, ev: ChangeEvent<HTMLSelectElement>) => void;
}

const UserRow: FC<UserRowProps> = ({ record, onRivalChange }) => (
  <TableRow>
    <TableCell>{record.name}</TableCell>
    <TableCell>{record.role}</TableCell>
    <TableCell>
      <select onChange={(ev) => onRivalChange(record.id, ev)}>
        <option>User</option>
        <option>Admin</option>
        <option>Visitor</option>
      </select>
    </TableCell>
  </TableRow>
);

const NoLoadedRow: FC<{ message: string }> = ({ message }) => (
  <tr>
    <td colSpan={3} align="center">
      {message}
    </td>
  </tr>
);

const StatefulDynamicTable: Story<MTableProps<UserRecord>> = ({ sort: initialSort, status, headers, records }) => {
  const [sort, setSort] = useState<Sort>(() => initialSort || { order: 'asc', orderBy: '' });

  const [popperEl, setPopperEl] = useState<HTMLSelectElement>();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (popperEl) {
      timeoutId = setTimeout(() => {
        setPopperEl(undefined);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [popperEl]);

  return (
    <section>
      <MTable
        status={status}
        headers={headers}
        sort={sort}
        onSort={setSort}
        records={records}
        renderRow={(record) => (
          <UserRow key={record.id} record={record} onRivalChange={(_, ev) => setPopperEl(ev.currentTarget)} />
        )}
        renderNoRecordsRow={() => <NoLoadedRow message="No content to show" />}
        renderError={() => <NoLoadedRow message="Error loading" />}
      />

      {popperEl && (
        <Popper arrow isPopperOpen={!!popperEl} popperAnchor={popperEl} placement="bottom" transitionTimeout={500}>
          <Typography variant="body2" color="white">
            Changed role to {popperEl.value}
          </Typography>
        </Popper>
      )}
    </section>
  );
};

export const DynamicTable = StatefulDynamicTable.bind({});
DynamicTable.args = {
  status: 'loaded',
  headers: [
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
  ],
  records: [
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
  ],
  sort: { order: 'desc', orderBy: 'name' },
};
