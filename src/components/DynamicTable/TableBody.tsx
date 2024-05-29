import React from 'react';
import { TableBody as MuiTableBody } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

type Props<T> = {
  rows: T[];
  renderRow: (record: T) => JSX.Element;
  renderNoRecordsRow: () => JSX.Element;
};

const useStyles = makeStyles((theme: MTheme) => ({
  tableRoot: {
    '& .MuiTableCell-body': {
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.grey[1300_45],
      fontWeight: theme.spacing(50),
      lineHeight: theme.spacing(0.1875),
      padding: theme.spacing(0, 1),
      height: theme.spacing(5),
      '&:first-of-type': {
        padding: theme.spacing(0, 1),
      },
    },
    '& .MuiTableRow-root': {
      borderBottom: `1px solid ${theme.palette.grey[1000]}`,
    },
  },
}));

export default function TableBody<T>({ rows, renderRow, renderNoRecordsRow }: Props<T>): JSX.Element {
  const classes = useStyles();
  return (
    <MuiTableBody className={classes.tableRoot}>
      {rows.length > 0 ? rows.map(renderRow) : renderNoRecordsRow()}
    </MuiTableBody>
  );
}
