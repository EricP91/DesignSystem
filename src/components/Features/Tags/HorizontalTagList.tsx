import { makeStyles } from '@mui/styles';
import React from 'react';
import ListWithOverflowTooltip from '../../ListWithOverflowTooltip/ListWithOverflowTooltip';
import { MTheme } from '../../../theme';
// eslint-disable-next-line import/no-cycle
import TagListItem, { TagListItemProps } from './TagListItem';

export interface HorizontalTagListProps {
  tags: TagListItemProps[];
  className?: string;
  highlight?: string;
  parentRef?: React.RefObject<HTMLDivElement | HTMLUListElement>;
  watchParentWidthChange?: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  popperContent: {
    '& div:not(:last-child)': {
      paddingBottom: theme.spacing(1),
    },
  },
  tooltipTagItem: {
    flexWrap: 'nowrap',
    margin: 0,
    paddingLeft: theme.spacing(0.75),
    paddingRight: theme.spacing(0.75),
    maxWidth: theme.spacing(30),
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
  },
  visibleTagItem: {
    maxWidth: theme.spacing(15.5),
    color: theme.palette.grey[1300],
  },
  tagCounterIndicatorWrapper: {
    backgroundColor: theme.palette.red[600],
    width: theme.spacing(4),
    height: theme.spacing(3),
    minWidth: theme.spacing(4),
    minHeight: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,

    '& span': {
      color: theme.palette.grey[0],
      fontSize: theme.spacing(1.75),
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

function HorizontalTagList({
  tags,
  className = '',
  highlight,
  parentRef,
  watchParentWidthChange,
}: HorizontalTagListProps): JSX.Element {
  const classes = useStyles();

  const tagRenderer =
    (tagListItemClassName: string) =>
    ({ name, color }: TagListItemProps): JSX.Element =>
      <TagListItem className={tagListItemClassName} key={name} name={name} color={color} highlight={highlight} />;

  return (
    <ListWithOverflowTooltip
      dataTestId="tag-list-box"
      data={tags}
      parentRef={parentRef}
      className={className}
      minVisibleItemsLength={1}
      popperProps={{ popperContentClassName: classes.popperContent, placement: 'top', disablePortal: false }}
      visibleItemRenderer={tagRenderer(classes.visibleTagItem)}
      tooltipItemRenderer={tagRenderer(classes.tooltipTagItem)}
      popperAnchorClassName={classes.tagCounterIndicatorWrapper}
      watchParentWidthChange={watchParentWidthChange}
    />
  );
}

export default HorizontalTagList;
