import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';
import { parseColor } from '../../../util/colorUtil';
import { MTheme } from '../../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    height: theme.spacing(1.75),
    minWidth: theme.spacing(1.75),
    border: `3px solid`,
    borderRadius: '50%',
  },
}));

export interface TopicItemCircleProps {
  color: string;
  className?: string;
}

function TopicItemCircle({ color, className }: TopicItemCircleProps): JSX.Element {
  const classes = useStyles();
  return (
    <span
      className={clsx(classes.root, className)}
      style={{ borderColor: parseColor(color) }}
      data-testid="topics-item-circle"
    />
  );
}

export default TopicItemCircle;
