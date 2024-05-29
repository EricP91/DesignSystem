import { Box, Card, CardContent, IconButton, Skeleton, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { CellebriteFileIcon, FileIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { OverflowTooltip } from '../../index';

const Types: { [key: string]: JSX.Element } = {
  device: <CellebriteFileIcon className="deviceIcon" data-testid="icon-device" />,
  file: <FileIcon className="fileIcon" data-testid="icon-file" />,
};
const fakeItems = [
  { key: 'sk1', value: 'sk1' },
  { key: 'sk2', value: 'sk2' },
];

const useStyles = makeStyles((theme: MTheme) => ({
  card: {
    width: 400,
    height: 110,
    '& > .MuiCardContent-root': {
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '0.589fr 2fr',
      gridTemplateRows: '2fr 1fr',
      columnGap: theme.spacing(3),
      padding: theme.spacing(1.5),
    },

    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
    },
  },
  primaryIcon: {
    gridRow: '1 / 3',
    gridColumn: '1 / 2',
    background: theme.palette.grey[500_12],
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    '& .MuiSvgIcon-root': {
      fontSize: theme.spacing(7),
      '&.fileIcon path': {
        fill: theme.palette.grey[500_40],
      },
    },
  },
  textBlock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
    marginTop: theme.spacing(0.625),

    '& .MuiSkeleton-root': {
      borderRadius: 0,
    },
  },
  iconsSet: {
    gridRow: '2 / 3',
    gridColumn: '2 / 3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',

    '& > div:not(:last-of-type)': {
      marginRight: theme.spacing(1),
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  textBlockItem: (props: { isLoading: boolean }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    marginBottom: props.isLoading ? theme.spacing(0.625) : 0,
  }),
  textBlockItemKey: {
    fontSize: theme.spacing(1.5),
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  textBlockItemValue: {
    fontSize: theme.spacing(1.75),
    fontWeight: 500,
    color: theme.palette.grey[1300],
  },
  tooltip: {
    padding: theme.spacing(0.375, 1),
    backgroundColor: theme.palette.grey[1300],
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(2.25),
    borderBottom: `1px solid ${theme.palette.grey[1300]}`,
  },
}));

export interface TextItem {
  key: string;
  value: string;
}

export interface IconItem {
  value: JSX.Element;
  tooltipText: string;
  onIconClick: () => void;
}

export interface IncidentDeliverableCardProps {
  items?: TextItem[];
  type: string;
  iconsSet?: IconItem[];
  isLoading: boolean;
}

export const IncidentDeliverableCard = ({
  items = [],
  type,
  iconsSet = [],
  isLoading,
}: IncidentDeliverableCardProps): JSX.Element => {
  const classes = useStyles({ isLoading });
  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.primaryIcon}>
          {isLoading ? (
            <Skeleton
              data-testid="incident-deliverable-card-icon-skeleton"
              variant="rectangular"
              width="100%"
              height="100%"
            />
          ) : (
            Types[type]
          )}
        </Box>
        <Box className={classes.textBlock}>
          {(isLoading ? fakeItems : items).map((item, idx) => (
            <Box key={item.value} className={classes.textBlockItem}>
              <Box display="inline">
                <Typography className={classes.textBlockItemKey} variant="subtitle2" display="inline" noWrap>
                  {isLoading ? (
                    <Skeleton
                      data-testid="incident-deliverable-card-text-skeleton"
                      variant="text"
                      width={idx === 0 ? 252 : 146}
                      height={14.7}
                    />
                  ) : (
                    item.key
                  )}
                </Typography>
              </Box>
              <Box display="inline" maxWidth={160}>
                <OverflowTooltip title={item.value} arrow placement="top">
                  <Typography className={classes.textBlockItemValue} variant="subtitle2" display="inline" noWrap>
                    {isLoading ? null : item.value}
                  </Typography>
                </OverflowTooltip>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.iconsSet}>
          {isLoading
            ? null
            : iconsSet.map((icon) => (
                <Tooltip
                  key={icon.tooltipText}
                  title={icon.tooltipText}
                  arrow
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    data-testid="incident-deliverable-card-button-icon"
                    className={classes.icon}
                    size="small"
                    onClick={icon.onIconClick}
                  >
                    {icon.value}
                  </IconButton>
                </Tooltip>
              ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default IncidentDeliverableCard;
