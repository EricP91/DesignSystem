import React, { useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MTheme } from '../../../theme';
import HorizontalTagList from '../Tags/HorizontalTagList';

export interface LocationPopupCoordinates {
  latitude: number;
  longitude: number;
}

interface LocationPopupTag {
  id?: string;
  name: string;
  color: string;
}

export interface LocationPopupItem {
  location?: LocationPopupCoordinates;
  classification?: string | null;
  locationGroup?: string | null;
  tags?: LocationPopupTag[];
  category?: string | null;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: theme.spacing(45),
    padding: theme.spacing(1),
  },
  details: {
    display: 'flex',
  },
  time: {
    alignSelf: 'flex-end',
    color: theme.palette.grey[1500],
  },
  avatar: {
    alignSelf: 'center',
    width: theme.spacing(6.75),
    paddingRight: theme.spacing(1),
  },
  classification: {
    color: theme.palette.red[400],
  },
  address: {
    width: theme.spacing(32.5),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 2,
    boxOrient: 'vertical',
  },
  tagsEdit: {
    marginTop: theme.spacing(1.5),
  },
  subGroup: {
    paddingLeft: theme.spacing(6.75),
    color: theme.palette.grey[1500],
  },
  coords: {
    paddingLeft: theme.spacing(6.75),
    color: theme.palette.grey[1500],
  },
  tagsList: {
    maxWidth: theme.spacing(36.5),
    paddingLeft: theme.spacing(6.75),
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export interface LocationPopupContentProps {
  locationData: LocationPopupItem;
  geoAddress: string;
  formattedDate: string;
  avatarChild?: React.ReactNode;
  className?: string;
  shouldShowTags?: boolean;
  tagEditChild?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  locationGroupTextColor?: string;
  locationSubgroup?: string;
}

const LocationPopupContent = ({
  locationData,
  geoAddress,
  formattedDate,
  avatarChild,
  className,
  shouldShowTags,
  tagEditChild,
  onMouseEnter,
  locationGroupTextColor,
  onMouseLeave,
  locationSubgroup,
}: LocationPopupContentProps): JSX.Element => {
  const classes = useStyles();
  const theme: MTheme = useTheme();
  const tagsContainerRef = useRef<HTMLDivElement | null>(null);

  const renderDetails = (): JSX.Element => (
    <Box className={classes.details} data-testid="location-popup-details">
      <Box className={classes.avatar}>{avatarChild}</Box>
      <Box className={classes.flexColumn}>
        <Typography variant="caption" sx={{ color: locationGroupTextColor }} className={classes.classification}>
          {locationData.locationGroup}
        </Typography>
        <Typography variant="textMedium" className={classes.address}>
          {geoAddress}
        </Typography>
      </Box>
      {shouldShowTags ? <Box className={classes.tagsEdit}>{tagEditChild}</Box> : null}
    </Box>
  );

  return (
    <Box
      className={clsx(classes.root, classes.flexColumn, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="location-popup"
    >
      <Typography variant="caption" className={classes.time}>
        {formattedDate}
      </Typography>
      {renderDetails()}
      <Typography sx={{ ...theme.typography.smallMedium }} className={classes.subGroup}>
        {locationSubgroup}
      </Typography>
      <Typography
        variant="text"
        className={classes.coords}
      >{`${locationData.location?.latitude}, ${locationData.location?.longitude}`}</Typography>
      {shouldShowTags && locationData.tags?.length ? (
        <Box className={classes.tagsList} ref={tagsContainerRef}>
          <HorizontalTagList tags={locationData.tags} />
        </Box>
      ) : null}
    </Box>
  );
};

export default LocationPopupContent;
