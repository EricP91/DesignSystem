import React from 'react';
import { Story } from '@storybook/react';
import MTable, { MTableProps } from './MTable';
import TableSkeleton from '../TableSkeletonOverlay/TableSkeleton';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: '', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default {
  title: 'Components/Table',
};

const Template: Story<MTableProps> = (args) => <MTable {...args} />;
export const FullTable = Template.bind({});
FullTable.args = {
  columns,
  rows,
};

export const EmptyTable = Template.bind({});
EmptyTable.args = {
  columns,
  rows: [],
  emptyTablePlaceHolder: {
    content: 'No data presented',
    props: {
      sx: {
        width: '100%',
        height: '100%',
      },
    },
  },
};

export const LoadingSkeletonTable = Template.bind({});
LoadingSkeletonTable.args = {
  columns,
  rows: [],
  loading: true,
  loadingOverlayPlaceHolder: {
    content: <TableSkeleton rowsNumber={20} />,
    props: {
      sx: {
        width: '100%',
        height: '100%',
      },
    },
  },
};
