import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { MTheme } from '../../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  locationTooltipContainer: {
    minHeight: theme.spacing(11),
    width: theme.spacing(27),
    padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  locationNameText: {
    fontSize: theme.spacing(1.75),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1300],
  },
  locationAddress: {
    fontSize: theme.spacing(1.75),
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1500],
  },
}));

export interface LocationTooltipContentProps {
  placeName: string;
  address: string;
}

function LocationTooltipContent({ placeName, address }: LocationTooltipContentProps): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.locationTooltipContainer}>
      <Typography variant="subtitle1" className={classes.locationNameText}>
        {placeName}
      </Typography>
      <Typography variant="body1" className={classes.locationAddress}>
        {address}
      </Typography>
    </Box>
  );
}

export default LocationTooltipContent;
