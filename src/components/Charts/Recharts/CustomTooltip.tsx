import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { MTheme } from '../../../theme';
import { Category } from '../DonutRechart.types';

const useStyles = makeStyles((theme: MTheme) => ({
  toolTipWrapper: {
    padding: theme.spacing(0.875, 1),
    backgroundColor: theme.palette.grey[0],
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1.5),
  },
  tooltipBullet: {
    display: 'inline-block',
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    background: 'purple',
    borderRadius: theme.spacing(12.5),
    transform: 'translateY(-1.5px)',
    marginRight: theme.spacing(1),
  },
  tooltipLabelText: {
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(2.25),
    color: theme.palette.text.primary,
    fontWeight: 700,
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.75),
      fontWeight: 400,
    },
  },
}));

interface CustomTooltipProps {
  payload: Category[];
  color: string;
}

const CustomTooltip = ({ payload, color }: CustomTooltipProps): JSX.Element | null => {
  const classes = useStyles();

  if (payload?.length) {
    return (
      <div data-testid="custom-tooltip-wrapper" className={classes.toolTipWrapper}>
        <div className={classes.tooltipBullet} style={{ backgroundColor: color }}>
          &nbsp;
        </div>
        <Typography data-testid="tooltip-label" className={classes.tooltipLabelText}>
          {payload[0].name}
        </Typography>
        <Typography data-testid="tooltip-label" className={classes.tooltipLabelText}>
          {payload[0].value}
        </Typography>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
