import { Chip, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';
import { MTheme } from '../../../theme';
import TopicItem, { TopicItemProps } from './TopicItem';

// eslint-disable-next-line import/no-mutable-exports
export let TOPIC_CHIP_PADDING_RIGHT = '8';

export interface TopicChipListItemProps extends TopicItemProps {
  name: string;
  color: string;
  count?: number;
  className?: string;
}

const useStyles = makeStyles((theme: MTheme) => {
  TOPIC_CHIP_PADDING_RIGHT = theme.spacing(1);
  return {
    root: {
      padding: 0,
      paddingRight: TOPIC_CHIP_PADDING_RIGHT,
    },
    chipRoot: {
      '&.MuiChip-root': {
        height: theme.spacing(5),
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(5),
      },
      '& .MuiChip-label': {
        marginTop: 0,
      },
    },
  };
});

function TopicChipListItem(props: TopicChipListItemProps): JSX.Element {
  const { name, className } = props;
  const classes = useStyles();
  return (
    <ListItem key={name} className={clsx(classes.root, className)} data-testid="topic-chip-list-item">
      <Chip className={classes.chipRoot} label={<TopicItem {...props} />} color="primary" variant="outlined" />
    </ListItem>
  );
}

export default TopicChipListItem;
