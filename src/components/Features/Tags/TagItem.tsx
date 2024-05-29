import { ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { MTheme } from '../../../theme';
import { parseColor } from '../../../util/colorUtil';
import HighlightedText from '../../Text/HighlightedText';
// eslint-disable-next-line import/no-cycle
import OverflowTooltip from '../../Tooltip/OverflowTooltip';
import { tagsSize } from './TagsConstants';

interface TaggedUser {
  firstName: string;
  lastName: string;
}
export interface Tag {
  id?: string;
  name: string;
  color: string;
  isPredefined?: boolean;
  sourceId?: string;
  userId?: string;
  user?: TaggedUser;
}

export interface TagItemProps extends Tag {
  highlight?: string;
  className?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  dot: {
    height: tagsSize(theme),
    minWidth: tagsSize(theme),
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  tagItem: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
  },
}));

const TagItem = forwardRef(({ name, color, highlight, className }: TagItemProps, ref) => {
  const classes = useStyles();

  return (
    <ListItemText
      ref={ref}
      primary={
        <div className={clsx(classes.tagItem, className)}>
          <span style={{ backgroundColor: parseColor(color) }} className={classes.dot} />
          <OverflowTooltip arrow placement="bottom" title={name} tooltipTriggerBreakpoint={90}>
            {highlight && highlight.length ? (
              <HighlightedText
                display="inline"
                variant="body2"
                highlightClass={classes.highlightedText}
                highlight={highlight}
              >
                {name}
              </HighlightedText>
            ) : (
              <Typography component="span" display="inline" variant="body2">
                {name}
              </Typography>
            )}
          </OverflowTooltip>
        </div>
      }
    />
  );
});

export default TagItem;
