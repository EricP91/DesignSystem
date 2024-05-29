import { Box, Card, CardContent, Skeleton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { Scrollbars, TwoLineDescriptionAvatar } from '../..';
import { MobileIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { NO_VALUE_TEXT } from '../../constants';

const AVATAR_SIZE = '90px';
const skeletonData = [
  { id: 1, startDate: '', endDate: '', deviceName: '', type: '' },
  { id: 2, startDate: '', endDate: '', deviceName: '', type: '' },
];

interface StyleProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: (props: StyleProps) => ({
    flex: 1,
    height: '100%',
    overflow: 'auto',

    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    },

    '& .MuiAvatar-root': {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      backgroundColor: `${theme.palette.primary.main}14`,
    },

    '& .MuiCardContent-root': {
      height: '50%',
      padding: `${theme.spacing(4)} 0 ${theme.spacing(4)} ${theme.spacing(4)}`,
      marginRight: theme.spacing(4),
      borderBottom: `1px solid ${theme.palette.grey[500]}1E`,

      '& > div:first-of-type': {
        marginBottom: theme.spacing(1.75),
      },
      '& .css-oxx9jr': {
        minWidth: props.isLoading ? '0px' : theme.spacing(24.75),
        marginLeft: theme.spacing(4),
        borderBottom: `1px solid ${theme.palette.grey[500]}1E`,
        paddingBottom: theme.spacing(2),
        marginBottom: 0,
      },
    },
  }),
  mainHeaders: {
    '& h6.MuiTypography-root': {
      fontSize: theme.spacing(2.25),
      marginBottom: theme.spacing(1),
      lineHeight: theme.spacing(2.875),
      marginLeft: theme.spacing(2.75),
    },
    '& p.MuiTypography-root': {
      fontSize: theme.spacing(1.75),
      color: theme.palette.grey[600],
      fontWeight: 700,
      lineHeight: theme.spacing(2.75),
    },
  },
  dateContent: {
    paddingLeft: theme.spacing(15.25),
    '& h6.MuiTypography-root': {
      fontWeight: 500,
      fontSize: theme.spacing(1.5),
      lineHeight: theme.spacing(3),
    },
    '& p.MuiTypography-root': {
      fontWeight: 400,
      fontSize: theme.spacing(2),
      color: theme.palette.grey[800],
      lineHeight: theme.spacing(3),
    },
  },
  dateBlock: (props: StyleProps) => ({
    '&:not(:last-child)': {
      marginBottom: props.isLoading ? theme.spacing(4.5) : theme.spacing(1.25),
    },
    '& .MuiTypography-root:first-of-type': {
      marginBottom: props.isLoading ? theme.spacing(1) : 0,
    },
  }),
  scrollStyle: {
    marginRight: theme.spacing(1),
    '& .simplebar-scrollbar': {
      '&:before': {
        background: theme.palette.grey[500],
        width: theme.spacing(1),
      },
    },
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textSkeletonBox: (props: StyleProps) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    width: theme.spacing(24.75),
    borderBottom: `1px solid ${theme.palette.grey[500]}1E`,
    paddingBottom: props.isLoading ? theme.spacing(4) : theme.spacing(2),

    '& .MuiSkeleton-root:first-of-type': {
      marginBottom: theme.spacing(1),
    },
  }),
  secondaryTextTooltip: {
    marginLeft: theme.spacing(2.75),
  },
}));

interface ExtractionModel {
  id: string | number;
  deviceName: string;
  type: string;
  startDate: string | null;
  endDate: string | null;
}

export interface DeviceExtractionsProps {
  extractions: ExtractionModel[];
  extractionText1?: string;
  extractionText2?: string;
  noValueText: string;
  isLoading: boolean;
}

export function DeviceExtractions({
  extractions,
  extractionText1 = 'Extraction start date/time',
  extractionText2 = 'Extraction end date/time',
  noValueText = NO_VALUE_TEXT,
  isLoading,
}: DeviceExtractionsProps): JSX.Element {
  const classes = useStyles({ isLoading });
  const PRIMARY_TEXT_MAX_WIDTH = 411;

  return (
    <Card className={classes.root}>
      <Scrollbars className={classes.scrollStyle}>
        {(isLoading ? skeletonData : extractions).map((extraction) => (
          <CardContent key={extraction.id}>
            {isLoading ? (
              <Box className={classes.flexContainer}>
                <TwoLineDescriptionAvatar>
                  <Skeleton animation="wave" variant="circular" width={AVATAR_SIZE} height={AVATAR_SIZE} />
                </TwoLineDescriptionAvatar>
                <Box data-testid="extraction-skeleton-box" className={classes.textSkeletonBox}>
                  <Skeleton variant="text" width="172px" height="11.7px" />
                  <Skeleton variant="text" width="100px" height="11.7px" />
                </Box>
              </Box>
            ) : (
              <span className={classes.mainHeaders}>
                <TwoLineDescriptionAvatar
                  primaryTextMaxWidth={PRIMARY_TEXT_MAX_WIDTH}
                  primaryText={extraction.deviceName}
                  secondaryText={extraction.type}
                  secondaryTextTooltipClassname={classes.secondaryTextTooltip}
                >
                  <MobileIcon />
                </TwoLineDescriptionAvatar>
              </span>
            )}

            <Box className={classes.dateContent}>
              <Box className={classes.dateBlock}>
                <Typography variant="subtitle2" color="textSecondary">
                  {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : <>{extractionText1}</>}
                </Typography>
                <Typography color="textPrimary">
                  {isLoading ? (
                    <Skeleton variant="text" width="106px" height="11.7px" />
                  ) : (
                    <>{extraction.startDate ? extraction.startDate : noValueText}</>
                  )}
                </Typography>
              </Box>
              <Box className={classes.dateBlock}>
                <Typography variant="subtitle2" color="textSecondary">
                  {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : <>{extractionText2}</>}
                </Typography>
                <Typography color="textPrimary">
                  {isLoading ? (
                    <Skeleton variant="text" width="106px" height="11.7px" />
                  ) : (
                    <>{extraction.endDate ? extraction.endDate : noValueText}</>
                  )}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        ))}
      </Scrollbars>
    </Card>
  );
}
export default DeviceExtractions;
