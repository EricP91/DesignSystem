import React from 'react';
import { makeStyles } from '@mui/styles';
import { ChartItem } from './types';

export interface ChartTooltipContentProp {
  item: ChartItem;
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const ChartTooltipContent = ({ item }: ChartTooltipContentProp): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>{item.tooltip}</div>
    </div>
  );
};

export default ChartTooltipContent;
