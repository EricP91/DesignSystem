import React from 'react';
import clsx from 'clsx';
import { Box, CircularProgress, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CircularProgressProps } from '@mui/material/CircularProgress/CircularProgress';
import { InfoIcon } from '../../assets/icons';
import { MTheme } from '../../theme';

export interface InlineSpinnerProps extends CircularProgressProps {
  tooltipText?: string;
  loadingText?: string;
  spinnerSize?: number;
  className?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.25),
    },
  },
  tooltip: {},
}));

function InlineSpinner({
  loadingText,
  tooltipText,
  spinnerSize = 18,
  className = '',
}: InlineSpinnerProps): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)}>
      <CircularProgress data-testid="spinner" size={spinnerSize} />
      {loadingText && (
        <Typography data-testid="spinner-text" variant="body2">
          {loadingText}
        </Typography>
      )}
      {tooltipText && (
        <Tooltip data-testid="spinner-text-tooltip" title={tooltipText} arrow placement="top">
          <Box data-testid="spinner-text-tooltip-icon" sx={{ display: 'flex' }}>
            <InfoIcon />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
}

export default InlineSpinner;
