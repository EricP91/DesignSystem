import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';
import { MTheme } from '../../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2.5),
    width: 'max-content',
    boxShadow: 'none',
    background: 'rgba(255, 255, 255, 0.5)',
  },
}));
export interface ActionCardProps {
  children: React.ReactNode;
  className?: string;
}
function ActionCard({ children, className = 'ActionCard', ...other }: ActionCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...other}>
      {children}
    </Card>
  );
}
export default ActionCard;
