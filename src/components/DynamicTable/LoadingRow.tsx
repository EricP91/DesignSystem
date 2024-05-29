import React from 'react';
import { TableRow, TableCell, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

interface Props {
  colSpan?: number;
}

const useStyles = makeStyles((theme: MTheme) => ({
  tableCell: {
    borderBottom: 'none',
    height: theme.spacing(5),
  },
}));

export default function LoadingRow({ colSpan = 1 }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell align="center" colSpan={colSpan} className={classes.tableCell}>
        <CircularProgress size={20} />
      </TableCell>
    </TableRow>
  );
}
