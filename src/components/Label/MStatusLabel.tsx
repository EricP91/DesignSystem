import React from 'react';
import { Theme, useTheme } from '@mui/material';
import MLabel, { MLabelProps } from './MLabel';

export type StatusVariant = 'negative' | 'negativeShady' | 'positive' | 'positiveSoft' | 'warning' | 'muted' | 'info';

const getVariantColorMapping = (theme: Theme): Record<string, string> => ({
  negative: theme.palette.status.negative,
  negativeShady: theme.palette.status.negativeShady,
  positive: theme.palette.status.positive,
  positiveSoft: theme.palette.status.positiveSoft,
  warning: theme.palette.status.warning,
  muted: theme.palette.status.muted,
  info: theme.palette.ui.brandLightest,
});

export interface MStatusLabelProps extends Omit<MLabelProps, 'backgroundColor' | 'color'> {
  variant: StatusVariant;
}

const MStatusLabel = ({ variant, ...other }: MStatusLabelProps): JSX.Element => {
  const theme = useTheme();
  return (
    <MLabel {...other} backgroundColor={getVariantColorMapping(theme)[variant]} color={theme.palette.ui.brandDark} />
  );
};
export default MStatusLabel;
