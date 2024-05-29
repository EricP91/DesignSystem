import React from 'react';
import { capitalize, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MTheme } from '../../theme';
import { HighlightedText } from '..';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    wordBreak: 'break-word',
  },
  value: { ...theme.typography.body3 },
  divider: {
    display: 'inline',
    height: 16,
    color: theme.palette.grey[500],
    margin: theme.spacing(0, 1.25),
  },
  description: {
    color: theme.palette.grey[600],
  },
  highlightedText: {
    padding: theme.spacing(0.25, 0.125),
    backgroundColor: theme.palette.warning.light,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export interface ValueDescriptionDividerProps {
  value: string;
  description?: string | null;
  className?: string;
  highlight?: string;
}

function ValueDescriptionDivider({
  value,
  description = '',
  className = '',
  highlight,
}: ValueDescriptionDividerProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {highlight ? (
        <HighlightedText
          display="inline"
          className={classes.value}
          highlight={highlight || ''}
          highlightClass={classes.highlightedText}
        >
          {value || ''}
        </HighlightedText>
      ) : (
        <Typography display="inline" className={classes.value}>
          {value}
        </Typography>
      )}
      {description && <Divider data-testid="divider" orientation="vertical" className={classes.divider} />}
      <Typography className={classes.description} display="inline" variant="caption">
        {capitalize(description || '')}
      </Typography>
    </div>
  );
}

export default ValueDescriptionDivider;
