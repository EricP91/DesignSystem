import React from 'react';
import { TableCell, TableHead as MuiTableHead, TableRow, TableSortLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

import type { Header, Sort } from './tableTypes';

const useStyles = makeStyles((theme: MTheme) => ({
  tableHeadRoot: {
    borderBottom: `1px solid ${theme.palette.grey[1000]}`,
  },
  tableSortLabelRoot: {
    width: '100%',
    '& .MuiTableSortLabel-icon': {
      margin: theme.spacing(0, 1, 0, 'auto'),
    },
  },
  tableCellRoot: {
    backgroundColor: theme.palette.grey[0],
    textTransform: 'uppercase',
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(0.25),
    color: theme.palette.grey[1500],
    padding: theme.spacing(1),
    '&:nth-last-of-type(n+2)': {
      '& .MuiTableSortLabel-root, & .th-label': {
        borderRight: `1px solid ${theme.palette.grey[1000]}`,
      },
    },
    ':first-of-type': {
      padding: theme.spacing(1),
    },
  },
}));

export interface Props {
  headers: Header[];
  sort: Sort;
  onSort: (sort: Sort) => void;
}

export default function TableHead({ headers, sort: { order, orderBy }, onSort }: Props): JSX.Element {
  const classes = useStyles();

  const createSortHandler = (property: string) => () => {
    onSort({
      orderBy: property,
      order: orderBy === property && order === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <MuiTableHead className={classes.tableHeadRoot}>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.id}
            sortDirection={orderBy === header.id ? order : false}
            sx={{
              width: header.width,
              maxWidth: header.maxWidth || header.width,
              minWidth: header.minWidth || 0,
            }}
            className={classes.tableCellRoot}
          >
            {header.sortable ? (
              <TableSortLabel
                active={orderBy === header.id}
                direction={orderBy === header.id ? order : 'asc'}
                onClick={createSortHandler(header.id)}
                className={classes.tableSortLabelRoot}
              >
                {header.label}
              </TableSortLabel>
            ) : (
              <div className="th-label">{header.label}</div>
            )}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
}
