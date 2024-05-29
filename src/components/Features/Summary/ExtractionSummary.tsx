import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Card, Box, Typography, Skeleton, Avatar, SvgIconProps, CircularProgress, alpha } from '@mui/material';
import { capitalize } from '@mui/material/utils';
import {
  JumbotronIcon,
  JumbotronSkeletonIcon,
  CallIcon,
  ChatIcon,
  MediaIcon,
  PhoneIcon,
  IncidentNumberIcon,
  UfdrFileIcon,
  WebSymbolIcon,
  ContactsIcon,
} from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { TwoLineDescriptionAvatar } from '../../index';
import { NO_VALUE_TEXT } from '../../constants';

// --------------------------------------------------------------

const icons: {
  [key: string]: (props: SvgIconProps) => JSX.Element;
} = {
  chats: ChatIcon,
  calls: CallIcon,
  webHistory: WebSymbolIcon,
  mediaItems: MediaIcon,
  contacts: ContactsIcon,
};

interface StyleProps {
  isLoading: boolean;
}

const AVATAR_SIZE = '48px';

const useStyles = makeStyles((theme: MTheme) => ({
  root: (props: StyleProps) => ({
    width: '100%',
    height: '100%',
    marginRight: theme.spacing(3),
    backgroundColor: props.isLoading ? theme.palette.grey[0] : theme.palette.primary.lighter,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: 'none',
    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    },
  }),
  inner: {
    marginTop: theme.spacing(7.5),
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textBlock: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    flexGrow: 0.5,
    '& .MuiSkeleton-root:first-of-type': {
      marginBottom: theme.spacing(0.5),
    },
  },
  iconBlock: (props: StyleProps) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: props.isLoading ? '50px' : theme.spacing(2.5),
    '& .css-1a8w37c': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: theme.spacing(4),
    },

    '& .MuiAvatar-root': {
      width: theme.spacing(6.75),
      height: theme.spacing(6.75),
      background: 'transparent',
      marginBottom: theme.spacing(1),
      cursor: 'pointer',
      position: 'relative',
      '&:hover': {
        backgroundColor: `${theme.palette.primary.main}14`,
      },
      '&:hover  + .MuiTypography-root': {
        opacity: 1,
      },

      '& > svg': {
        width: theme.spacing(4.1875),
        height: theme.spacing(4.1875),
      },
    },
    '& .MuiTypography-root': {
      fontWeight: 500,
      fontSize: theme.spacing(1.75),
    },
  }),
  hide: {
    opacity: 0,
    textAlign: 'center',
  },
  noHover: {
    pointerEvents: 'none',
  },
  evidenceDetailsBox: {
    width: '95%',
    margin: theme.spacing(7.5, 0, 3, 0),
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    boxShadow: 'none',
    '& .MuiAvatar-root': {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      backgroundColor: theme.palette.grey[0],
      color: theme.palette.grey[0],
      '& .MuiSvgIcon-root': {
        width: 40,
        height: 40,
      },
    },
  },
  twoLineAvatar: {
    '& h6.MuiTypography-root': {
      fontWeight: 500,
      fontSize: theme.spacing(1.5),
      color: theme.palette.grey[600],
    },
    '& p.MuiTypography-root': {
      fontWeight: 400,
      fontSize: theme.spacing(2),
      color: theme.palette.grey[800],
    },
  },
}));

interface ModelCategory {
  name: string;
  route: string;
  count: number | string | null;
  disabled: boolean;
}

interface EvidenceDetails {
  incidentId: string;
  deviceName: string;
  ufdrName: string;
}

export interface ExtractionSummaryProps {
  data: ModelCategory[];
  isLoading: boolean;
  evidenceDetails: EvidenceDetails;
  incidentNoLabel?: string;
  deviceLabel?: string;
  UFDRLabel?: string;
}

export function ExtractionSummary({
  data,
  evidenceDetails,
  isLoading = false,
  incidentNoLabel = 'Incident No.',
  deviceLabel = 'Device',
  UFDRLabel = 'UFDR',
}: ExtractionSummaryProps): JSX.Element {
  const classes = useStyles({ isLoading });
  const history = useHistory();
  const { incidentId, ufdrName, deviceName } = evidenceDetails;
  const theme: MTheme = useTheme();
  const evidenceDetailsData: {
    [key: string]: {
      text: string | null;
      icon: JSX.Element;
    };
  } = {
    [incidentNoLabel]: {
      text: incidentId,
      icon: <IncidentNumberIcon />,
    },
    [deviceLabel]: {
      text: deviceName,
      icon: <PhoneIcon />,
    },
    [UFDRLabel]: {
      text: ufdrName,
      icon: <UfdrFileIcon />,
    },
  };

  const onIconClick = (route: string) => () => history.push(route);

  return (
    <Card className={classes.root}>
      <Box className={classes.inner}>
        {isLoading ? <JumbotronSkeletonIcon /> : <JumbotronIcon />}
        <Box className={classes.textBlock}>
          {isLoading ? (
            <>
              <Skeleton variant="text" width="100px" height="11.7px" />
              <Skeleton variant="text" width="289px" height="11.7px" />
            </>
          ) : (
            <>
              <Typography color="primary" variant="subtitle1">
                Welcome to
              </Typography>
              <Typography color="initial" variant="h3">
                Extraction summary
              </Typography>
            </>
          )}

          <Box className={classes.iconBlock}>
            {data.map((category) => {
              const Icon = icons[`${category.name}`];
              return (
                <Box key={category.name}>
                  {isLoading ? (
                    <Avatar data-testid="summary-circular-spinner" className={classes.noHover}>
                      <CircularProgress />
                    </Avatar>
                  ) : (
                    <>
                      <Avatar
                        data-testid="summary-icon"
                        className={clsx(category.disabled && classes.noHover)}
                        onClick={onIconClick(category.route)}
                      >
                        <Icon
                          data-testid={`${category.name}-icon`}
                          fill={category.disabled ? theme.palette.grey[1000] : theme.palette.primary.main}
                        />
                      </Avatar>
                      <Typography className={classes.hide} variant="subtitle2">
                        {category.disabled ? '' : category.count}
                      </Typography>
                    </>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Card className={classes.evidenceDetailsBox}>
        {Object.keys(evidenceDetailsData).map((entry) =>
          isLoading ? (
            <Box key={entry}>
              <TwoLineDescriptionAvatar>
                <Skeleton animation="wave" variant="circular" width={AVATAR_SIZE} height={AVATAR_SIZE} />
              </TwoLineDescriptionAvatar>
              <Box>
                <Skeleton variant="text" width="86px" height="11.7px" />
                <Skeleton variant="text" width="106px" height="11.7px" />
              </Box>
            </Box>
          ) : (
            <TwoLineDescriptionAvatar
              className={classes.twoLineAvatar}
              key={entry}
              primaryText={entry}
              primaryTextMaxWidth={100}
              secondaryTextMaxWidth={210}
              secondaryText={capitalize(evidenceDetailsData[`${entry}`]?.text || NO_VALUE_TEXT)}
            >
              {evidenceDetailsData[`${entry}`].icon}
            </TwoLineDescriptionAvatar>
          )
        )}
      </Card>
    </Card>
  );
}
export default ExtractionSummary;
