import { Card, Typography } from '@mui/material';
import { capitalize } from '@mui/material/utils';

import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';
import { MTheme } from '../../../theme';
import { pxToRem } from '../../../theme/utils/formatFontSize';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    margin: theme.spacing(0, 0, 4, 0),
    fontSize: pxToRem(18),
  },
}));

export interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

function TitleCard({ children, title, className = '' }: TitleCardProps): JSX.Element {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)}>
      <Typography className={classes.title} variant="h5">
        {capitalize(title)}
      </Typography>
      {children}
    </Card>
  );
}

export default TitleCard;
