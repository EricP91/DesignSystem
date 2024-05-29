import { makeStyles } from '@mui/styles';
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { MTheme } from '../../../theme';
import MLabel from '../../Label/MLabel';
import { HashTagIcon } from '../../../assets/icons';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
      color: theme.palette.grey[0],
    },
  },
  hashTagIconInTooltip: {
    margin: theme.spacing(0.25, 1, 0, 0.25),
    height: theme.spacing(3),
    width: theme.spacing(3),
    fill: theme.palette.grey[0],
  },
  topicText: {
    '&.MuiTypography-root ': {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  enrichedLabel: {
    color: theme.palette.grey[1700],
    marginLeft: theme.spacing(1),
    height: 'auto',
    minWidth: 'max-content',
    fontWeight: 500,
  },
}));

export interface TopicTitleProps {
  topicsText?: string;
  enrichedText?: string;
}

function TopicTitle({ topicsText = 'Topics', enrichedText = 'Enriched' }: TopicTitleProps): JSX.Element {
  const classes = useStyles();
  const theme: MTheme = useTheme();

  return (
    <Box className={classes.root} data-testid="topic-title">
      <HashTagIcon
        viewBox="0 0 18 18"
        width="18"
        height="18"
        bigIcon
        data-testid="topic-title-hashtag-icon"
        className={classes.hashTagIconInTooltip}
      />
      <Typography className={classes.topicText} data-testid="topic-title">
        {`${topicsText}`}
      </Typography>
      <MLabel
        className={classes.enrichedLabel}
        backgroundColor={theme.palette.grey?.[1000]}
        data-testid="enriched-label"
      >
        {`${enrichedText}`}
      </MLabel>
    </Box>
  );
}

export default TopicTitle;
