import { ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { forwardRef } from 'react';
import TopicItem, { TopicItemProps } from './TopicItem';

export interface TopicListItemProps extends TopicItemProps {
  color: string;
  name: string;
  className?: string;
}

const useStyles = makeStyles(() => ({
  listItemText: {
    flex: 'none',
  },
}));

const TopicListItem = forwardRef((props: TopicListItemProps, ref) => {
  const classes = useStyles();
  return <ListItemText ref={ref} className={classes.listItemText} primary={<TopicItem {...props} />} />;
});

export default TopicListItem;
