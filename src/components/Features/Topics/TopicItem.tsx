import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import HighlightedText from '../../Text/HighlightedText';
import { MTheme } from '../../../theme';
import TopicItemCircle from './TopicItemCircle';
// eslint-disable-next-line import/no-cycle
import OverflowTooltip from '../../Tooltip/OverflowTooltip';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  circle: {
    marginRight: theme.spacing(1.5),
  },
  text: {
    color: theme.palette.grey[1300],
    fontWeight: 500,
    fontSize: theme.spacing(1.75),
  },
  topicTextWrapper: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
  },
}));

export interface TopicItemProps {
  name: string;
  color: string;
  count?: number;
  className?: string;
  withOverflowTooltip?: boolean;
  highlight?: string;
}

function TopicItem({
  name,
  count,
  color,
  className,
  withOverflowTooltip = true,
  highlight,
}: TopicItemProps): JSX.Element {
  const classes = useStyles();

  const topicText =
    highlight && highlight.length ? (
      <HighlightedText
        display="inline"
        variant="body2"
        highlightClass={classes.highlightedText}
        className={classes.text}
        highlight={highlight}
      >
        {`${name} ${count !== undefined ? `(${count})` : ''}`}
      </HighlightedText>
    ) : (
      <Typography className={classes.text} component="span" display="inline" data-testid="topics-item-text">
        {name} {count !== undefined ? `(${count})` : ''}
      </Typography>
    );

  return (
    <div className={clsx(classes.root, className)}>
      <TopicItemCircle className={classes.circle} color={color} />
      {withOverflowTooltip ? (
        <OverflowTooltip title={name} arrow>
          {topicText}
        </OverflowTooltip>
      ) : (
        <Box className={classes.topicTextWrapper}>{topicText}</Box>
      )}
    </div>
  );
}

export default TopicItem;
