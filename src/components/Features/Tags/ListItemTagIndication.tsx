import { Box, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { TagsPlusIcon } from '../../../assets/icons/TagsPlusIcon';

import { MTheme } from '../../../theme';
import { parseColor } from '../../../util/colorUtil';
import Popper from '../../Popper/Popper';
import TagListItem, { TagListItemProps } from './TagListItem';

export interface ListItemTagIndicationProps {
  tags: TagListItemProps[];
  isLoading?: boolean;
  className?: string;
  highlight?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  popperContent: {
    '& div:not(:last-child)': {
      paddingBottom: theme.spacing(1),
    },
  },
  popperTagItem: {
    margin: 0,
    maxWidth: theme.spacing(30),
    flexWrap: 'nowrap',
    '& div': {
      maxWidth: theme.spacing(26.25),
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      color: theme.palette.grey[0],
    },
    '& span.MuiTypography-root': {
      color: theme.palette.grey[0],
      whiteSpace: 'nowrap',
    },
    paddingLeft: theme.spacing(0.75),
    paddingRight: theme.spacing(0.75),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(1.5),
  },
  tagDot: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    border: '1px solid white',
    borderRadius: '50%',
    borderWidth: theme.spacing(0.125),
    marginTop: theme.spacing(-0.75),
  },
  plusTagDot: {
    backgroundColor: theme.palette.grey[1000],
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    border: '1px solid white',
    borderRadius: '50%',
    borderWidth: theme.spacing(0.125),
    marginTop: theme.spacing(-0.75),
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function ListItemTagIndication({
  tags,
  className = '',
  isLoading = false,
  highlight,
}: ListItemTagIndicationProps): JSX.Element {
  const classes = useStyles();
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef<HTMLElement | null>(null);

  const tagItemRenderer = ({ name, color }: TagListItemProps): JSX.Element => (
    <TagListItem
      className={classes.popperTagItem}
      key={name}
      name={name}
      color={color}
      highlight={highlight}
      withOverflowTooltip={false}
    />
  );

  const setPopoverOpen = (isOpen: boolean) => () => {
    setOpenedPopover(isOpen);
  };

  const renderTagDots = (): JSX.Element | JSX.Element[] =>
    tags?.length > 2 ? (
      <>
        {tags?.slice(0, 2).map((tag, index) => (
          <span
            key={tag.name}
            className={classes.tagDot}
            style={{
              backgroundColor: parseColor(tag.color),
              zIndex: index,
            }}
          />
        ))}
        <span className={classes.plusTagDot} data-testid="plus-icon">
          <TagsPlusIcon />
        </span>
      </>
    ) : (
      tags?.map((tag, index) => (
        <span
          key={tag.name}
          className={classes.tagDot}
          style={{
            backgroundColor: parseColor(tag.color),
            zIndex: index,
          }}
        />
      ))
    );

  return (
    <Box
      ref={popoverAnchor}
      data-testid="list-item-tag-indication"
      onMouseEnter={setPopoverOpen(true)}
      onMouseLeave={setPopoverOpen(false)}
      className={clsx(classes.container, className)}
    >
      {isLoading ? (
        <Skeleton variant="circular" height="12px" width="12px" data-testid="list-item-tag-indication-skeleton" />
      ) : (
        renderTagDots()
      )}
      <Popper
        placement="top"
        arrow
        popperContentClassName={classes.popperContent}
        disablePortal={false}
        isPopperOpen={openedPopover}
        popperAnchor={popoverAnchor.current}
      >
        {tags.map(tagItemRenderer)}
      </Popper>
    </Box>
  );
}

export default ListItemTagIndication;
