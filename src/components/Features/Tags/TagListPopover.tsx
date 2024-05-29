import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Popover from '@mui/material/Popover';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import MLabel from '../../Label/MLabel';
import HighlightedText from '../../Text/HighlightedText';
import OverflowTooltip from '../../Tooltip/OverflowTooltip';
import { TagItemProps } from './TagItem';
import TagList from './TagList';

export interface TagListPopoverProps {
  tags: TagItemProps[];
  openFrom?: 'left' | 'right' | 'center';
  highlight?: string;
}

const MAX_WIDTH = 97;

const useStyles = makeStyles((theme: Theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  tag: {
    maxWidth: MAX_WIDTH,
  },
  paper: {
    marginTop: 0,
    padding: theme.spacing(2),
    minWidth: 144,
    maxWidth: 400,
    pointerEvents: 'auto',
  },
  list: {
    overflow: 'auto',
    maxHeight: 109,
  },
  dot: {
    height: 12,
    width: 12,
    minWidth: theme.spacing(1.5),
    borderRadius: '50%',
    display: 'inline-block',
  },
  otherTags: {
    paddingRight: 3,
    paddingLeft: 3,
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.primary.dark,
  },
}));

function TagListPopover({ tags, openFrom = 'left', highlight }: TagListPopoverProps): JSX.Element {
  const classes = useStyles();

  const [firstTag, ...otherTags] = tags;
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = (): void => {
    setOpenedPopover(true);
  };

  const popoverLeave = (): void => {
    setOpenedPopover(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ mr: otherTags.length > 0 ? 0.5 : 0 }}>
        <MLabel className={classes.tag} backgroundColor={firstTag.color}>
          <OverflowTooltip placement="top" title={firstTag.name} arrow>
            {highlight && highlight.length ? (
              <HighlightedText variant="caption" highlight={highlight} highlightClass={classes.highlightedText}>
                {firstTag.name}
              </HighlightedText>
            ) : (
              <Typography variant="caption" data-testid="tag-content">
                {firstTag.name}
              </Typography>
            )}
          </OverflowTooltip>
        </MLabel>
      </Box>
      {otherTags.length > 0 && (
        <>
          <Box ref={popoverAnchor} onMouseEnter={popoverEnter} onMouseLeave={popoverLeave}>
            <MLabel className={clsx(classes.tag, classes.otherTags)} backgroundColor="black">
              <Typography data-testid="other-tags-text" variant="caption">
                +{otherTags.length}
              </Typography>
            </MLabel>
          </Box>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={openedPopover}
            anchorEl={popoverAnchor.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: openFrom,
            }}
            PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
          >
            <TagList className={classes.list} tags={otherTags} highlight={highlight} />
          </Popover>
        </>
      )}
    </Box>
  );
}

export default TagListPopover;
