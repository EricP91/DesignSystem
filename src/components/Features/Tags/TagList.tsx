import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import { MTheme } from '../../../theme';
// eslint-disable-next-line import/no-cycle
import TagItem, { TagItemProps } from './TagItem';

export interface TagListProp {
  tags: TagItemProps[];
  highlight?: string;
  className?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiListItemText-root:last-child': {
      '& $tagItem': {
        marginBottom: 0,
      },
    },
  },
  tagItem: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
}));

function TagList({ tags, highlight, className = '' }: TagListProp): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={clsx(className, classes.root)} data-testid="tags-list-box">
      {tags.map(({ name, color }) => (
        <TagItem className={classes.tagItem} key={name} name={name} color={color} highlight={highlight} />
      ))}
    </Box>
  );
}

export default TagList;
