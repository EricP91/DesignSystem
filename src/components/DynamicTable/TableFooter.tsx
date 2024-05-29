import React from 'react';
import { TableFooter as MuiTableFooter } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import LoadingRow from './LoadingRow';

interface Props {
  status: 'loading' | 'error';
  colSpan?: number;
  renderError: () => JSX.Element;
}

const useStyles = makeStyles((theme: MTheme) => ({
  tableFooterRoot: {
    '& .MuiTableCell-footer': {
      color: theme.palette.grey[1300_45],
      fontWeight: theme.spacing(50),
      lineHeight: theme.spacing(0.1875),
      fontSize: theme.spacing(1.75),
    },
  },
}));

export default function TableFooter({ status, colSpan = 1, renderError }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <MuiTableFooter className={classes.tableFooterRoot}>
      {status === 'loading' ? <LoadingRow colSpan={colSpan} /> : renderError()}
    </MuiTableFooter>
  );
}
