import { makeStyles } from '@mui/styles';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { MTheme } from '../../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  locationAddress: {
    fontSize: theme.spacing(1.75),
    width: theme.spacing(31.125),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1300],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  locationTimestamp: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(1.75),
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1500],
  },
  cardTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
  },
  locationCardContainer: {
    textAlign: 'left',
    width: theme.spacing(46.125),
    justifyContent: 'start',
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[1600],
    },
  },
  locationCardActive: {
    backgroundColor: theme.palette.blue[100],
  },
}));

export interface LocationCardProps {
  icon: JSX.Element;
  address: string;
  timestamp: string;
  active?: boolean;
  onClick?: React.MouseEventHandler;
}

const LocationCard = ({
  icon,
  address,
  timestamp,
  active = false,
  onClick = undefined,
}: LocationCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={clsx(classes.locationCardContainer, { [classes.locationCardActive]: active })}>
      {icon}
      <Box className={classes.cardTextContainer}>
        <Typography data-testid="location-card-name" variant="subtitle1" className={classes.locationAddress}>
          {address}
        </Typography>
        <Typography data-testid="location-card-timestamp" variant="body1" className={classes.locationTimestamp}>
          {timestamp}
        </Typography>
      </Box>
    </Button>
  );
};

export default LocationCard;
