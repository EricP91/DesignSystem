import { Box, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { TagItemProps } from './TagItem';
import { MTheme } from '../../../theme';
import { parseColor } from '../../../util/colorUtil';
import OverflowTooltip from '../../Tooltip/OverflowTooltip';
import HighlightedText from '../../Text/HighlightedText';

export interface TagListItemProps extends TagItemProps {
  className?: string;
  withOverflowTooltip?: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  listItemText: {
    flex: 'none',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    marginLeft: theme.spacing(0.75),
    marginRight: theme.spacing(1),
  },
  circle: {
    height: 12,
    minWidth: 12,
    borderRadius: '50%',
    marginRight: theme.spacing(0.75),
  },
  text: {
    fontSize: theme.spacing(1.75),
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.grey[1300],
    fontSize: theme.spacing(1.75),
  },
}));

const TagListItem = forwardRef(
  ({ className, color, name, withOverflowTooltip = true, highlight }: TagListItemProps, ref) => {
    const classes = useStyles();

    const renderText = (): JSX.Element => (
      <Typography className={classes.text} component="span" display="inline" data-testid="tag-item-text">
        {highlight && highlight.length > 0 ? (
          <HighlightedText
            display="inline"
            className={classes.text}
            highlightClass={classes.highlightedText}
            highlight={highlight}
          >
            {name}
          </HighlightedText>
        ) : (
          name
        )}
      </Typography>
    );
    return (
      <ListItemText
        ref={ref}
        className={classes.listItemText}
        primary={
          <div className={clsx(classes.root, className)}>
            <span style={{ backgroundColor: parseColor(color) }} className={classes.circle} />
            {withOverflowTooltip ? (
              <OverflowTooltip title={name} arrow>
                {renderText()}
              </OverflowTooltip>
            ) : (
              <Box>{renderText()}</Box>
            )}
          </div>
        }
      />
    );
  }
);

export default TagListItem;
