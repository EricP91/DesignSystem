import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { MouseEventHandler, useRef, useState } from 'react';
import { MTheme } from '../../../theme';
import { HashTagIcon } from '../../../assets/icons';
import TopicChipListItem, { TopicChipListItemProps } from './TopicChipListItem';
import ListWithOverflowTooltip from '../../ListWithOverflowTooltip/ListWithOverflowTooltip';
import TopicListItem from './TopicListItem';
import { Popper } from '../../Popper';
import TopicItem from './TopicItem';
import TopicTitle from './topicTitle';

let TOPIC_CHIP_LIST_MARGIN_LEFT = '24';
const TOPIC_CHIP_MAX_WIDTH = 238;

const useStyles = makeStyles((theme: MTheme) => {
  TOPIC_CHIP_LIST_MARGIN_LEFT = theme.spacing(3);
  return {
    root: {
      width: '100%',
      display: 'flex',
    },
    listInfoWrapper: {
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      '& .MuiTypography-root ': {
        color: theme.palette.primary.main,
        fontWeight: 500,
      },
    },
    hashTagIcon: {
      marginRight: theme.spacing(1.375),
      height: theme.spacing(2.25),
      width: theme.spacing(2.25),
      fill: theme.palette.primary.main,
    },

    list: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: TOPIC_CHIP_LIST_MARGIN_LEFT,
      padding: 0,
      '& .MuiTypography-root ': {
        color: theme.palette.primary.main,
        fontWeight: 500,
      },
    },
    listItem: {
      maxWidth: TOPIC_CHIP_MAX_WIDTH,
      flex: 'none',
      width: 'auto',
    },
    popperItemsCountIndicator: {
      borderRadius: theme.spacing(5),
      border: `1px solid ${theme.palette.primary.main}`,
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    tooltipTopics: {
      flexWrap: 'nowrap',
      '& .MuiTypography-root': {
        color: theme.palette.grey[0],
        whiteSpace: 'nowrap',
      },
    },
    topicItem: {
      '& .MuiTypography-root': {
        color: theme.palette.grey[0],
      },
    },
    tooltipTopicItem: {
      '& div:not(:last-child)': {
        paddingBottom: theme.spacing(1),
      },
    },
  };
});

export interface TopicChipListProps {
  topics: TopicChipListItemProps[];
  topicsText?: string;
  enrichedText?: string;
  filteredTopics?: string[];
  expandOnResize?: boolean;
}

function TopicChipList({
  topicsText = 'Topics',
  enrichedText = 'Enriched',
  topics,
  filteredTopics,
  expandOnResize = false,
}: TopicChipListProps): JSX.Element {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const topicPopperAnchorRef = useRef<HTMLDivElement>(null);
  const [topicPopperOpen, setTopicPopperOpen] = useState(false);

  const visibleTopicRenderer = (topic: TopicChipListItemProps): JSX.Element => (
    <TopicChipListItem className={classes.listItem} key={topic.name} {...topic} />
  );

  const tooltipTopicRenderer = (topic: TopicChipListItemProps): JSX.Element => (
    <TopicListItem key={topic.name} {...topic} className={classes.tooltipTopics} />
  );

  const intersectedTopics = filteredTopics?.length ? topics?.filter(({ name }) => filteredTopics.includes(name)) : [];

  const topicsData = intersectedTopics?.length ? intersectedTopics : topics;

  const popoverEnter: MouseEventHandler<HTMLDivElement> = (): void => {
    if (filteredTopics?.length && topicPopperAnchorRef.current) setTopicPopperOpen(true);
  };

  const popoverLeave = (): void => {
    setTopicPopperOpen(false);
  };

  return (
    <div className={classes.root}>
      <span
        ref={topicPopperAnchorRef}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        className={classes.listInfoWrapper}
      >
        <HashTagIcon
          viewBox="0 0 18 18"
          width="18"
          height="18"
          bigIcon
          data-testid="topic-chip-list-hashtag-icon"
          className={classes.hashTagIcon}
        />
        <Typography display="body1" data-testid="topic-chip-list-number">{`${topicsText}:`}</Typography>
      </span>
      <Popper
        placement="bottom"
        isPopperOpen={topicPopperOpen}
        arrow
        popperAnchor={topicPopperAnchorRef.current}
        popperContentClassName={classes.tooltipTopicItem}
      >
        <>
          {filteredTopics && <TopicTitle topicsText={topicsText} enrichedText={enrichedText} />}
          {topics.map((topic) => (
            <TopicItem
              key={topic.name}
              name={topic.name}
              color={topic.color}
              className={classes.topicItem}
              withOverflowTooltip={false}
            />
          ))}
        </>
      </Popper>
      <Box ref={ref} sx={{ maxWidth: `calc(100% - ${topicPopperAnchorRef?.current?.clientWidth}px)` }}>
        <ListWithOverflowTooltip
          data={topicsData}
          expandOnResize={expandOnResize}
          containerType="list"
          parentRef={ref}
          className={classes.list}
          dataTestId="topic-chip-list-with-overflow-tooltip"
          popperProps={{ popperContentClassName: classes.tooltipTopicItem }}
          popperAnchorClassName={classes.popperItemsCountIndicator}
          visibleItemRenderer={visibleTopicRenderer}
          tooltipItemRenderer={tooltipTopicRenderer}
        />
      </Box>
    </div>
  );
}

export default TopicChipList;
