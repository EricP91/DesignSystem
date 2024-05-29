import { Box } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    height: '40px',
    width: '123px',
    padding: theme.spacing(1),
    boxShadow: `0px 4px 18px ${theme.palette.grey[1000]}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2px',
    ...theme.typography.body3,

    '&.primary': {
      backgroundColor: theme.palette.grey[0],
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    '&.error': {
      backgroundColor: theme.palette.green[100],
      borderBottom: `2px solid ${theme.palette.red[900]}`,
    },
  },
}));

export interface NotificationProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'error';
}

function Notification({ children, className = '', variant = 'primary' }: NotificationProps): JSX.Element {
  const classes = useStyles();
  return <Box className={clsx(classes.root, className, variant)}>{children}</Box>;
}

export default Notification;
