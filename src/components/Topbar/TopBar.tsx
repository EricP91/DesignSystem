import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

export interface TopBarProps {
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
}));

function TopBar({ children, className = '' }: TopBarProps): JSX.Element {
  const classes = useStyles();

  return <Box className={clsx(classes.root, className)}>{children}</Box>;
}

export default TopBar;
