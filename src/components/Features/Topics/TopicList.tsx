import { makeStyles } from '@mui/styles';
import React from 'react';
import TopicListItem, { TopicListItemProps } from './TopicListItem';
import { MTheme } from '../../../theme';
import ListWithOverflowTooltip from '../../ListWithOverflowTooltip/ListWithOverflowTooltip';

export interface TopicListProps {
  topics: TopicListItemProps[];
  className?: string;
  parentRef?: React.RefObject<HTMLDivElement | HTMLUListElement>;
  highlight?: string;
  watchParentWidthChange?: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  topicCounterIndicatorWrapper: {
    backgroundColor: theme.palette.grey[1300],
    marginLeft: theme.spacing(1),
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    minWidth: theme.spacing(2.5),
    minHeight: theme.spacing(2.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,

    '& span': {
      color: theme.palette.grey[0],
      fontSize: theme.typography.caption.fontSize,
    },
  },
  tooltipTopicItem: {
    '& div:not(:last-child)': {
      paddingBottom: theme.spacing(1),
    },
  },
  tooltipTopic: {
    flexWrap: 'nowrap',
    '& span': {
      whiteSpace: 'nowrap',
      color: theme.palette.grey[0],
    },
  },
}));

function TopicList({
  topics,
  parentRef,
  className = '',
  watchParentWidthChange,
  highlight,
}: TopicListProps): JSX.Element {
  const classes = useStyles();

  const topicRenderer =
    (topicListItemClassName?: string) =>
    ({ name, color }: TopicListItemProps): JSX.Element =>
      (
        <TopicListItem
          className={topicListItemClassName || ''}
          key={name}
          name={name}
          color={color}
          highlight={highlight}
        />
      );

  return (
    <ListWithOverflowTooltip
      dataTestId="topics-list-box"
      data={topics}
      className={className}
      minVisibleItemsLength={1}
      parentRef={parentRef}
      popperProps={{ popperContentClassName: classes.tooltipTopicItem, disablePortal: false }}
      visibleItemRenderer={topicRenderer()}
      tooltipItemRenderer={topicRenderer(classes.tooltipTopic)}
      popperAnchorClassName={classes.topicCounterIndicatorWrapper}
      watchParentWidthChange={watchParentWidthChange}
    />
  );
}

export default TopicList;
