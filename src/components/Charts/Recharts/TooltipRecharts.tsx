import React from 'react';
import { Tooltip } from 'recharts';
import { useTheme } from '@mui/styles';
import { MTheme } from '../../../theme';

// ----------------------------------------------------------------------

function TooltipRecharts({ color = '#fff', ...other }: { color: string }): JSX.Element {
  const theme: MTheme = useTheme();

  const itemStyle = {
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(2.25),
    color: theme.palette.text.primary,
    fontWeight: 700,
  };
  const contentStyle = {
    border: 0,
    padding: theme.spacing(0.375, 1),
    borderRadius: 4,
    backgroundColor: color,
  };
  const labelStyle = {
    color: theme.palette.text.primary,
    fontWeight: 700,
  };

  return <Tooltip itemStyle={itemStyle} contentStyle={contentStyle} labelStyle={labelStyle} offset={-3} {...other} />;
}

export default TooltipRecharts;
