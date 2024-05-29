import React from 'react';
import { makeStyles } from '@mui/styles';
import { SxProps, Theme } from '@mui/system';
import { TagIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import TagList from './TagList';
import { TagItemProps } from './TagItem';
import IconAvatarBadge from '../../IconAvatarBadge/IconAvatarBadge';

const useStyles = makeStyles((theme: MTheme) => ({
  list: {
    overflow: 'auto',
    maxHeight: theme.spacing(13.625),
  },
  tagIcon: {
    height: theme.spacing(2.25),
    width: theme.spacing(2.25),
    fill: theme.palette.grey[1300],
  },
}));

export interface TagAvatarBadgeProps {
  tags: TagItemProps[];
  openFrom?: 'left' | 'right' | 'center';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  sxPopover?: SxProps<Theme> | undefined;
}

function TagAvatarBadge({
  tags = [],
  openFrom = 'left',
  className = '',
  sxPopover = {},
}: Partial<TagAvatarBadgeProps>): JSX.Element {
  const classes = useStyles();
  const icon = <TagIcon viewBox="0 0 16 16" className={classes.tagIcon} />;
  const list = <TagList className={classes.list} tags={tags} />;

  return (
    <IconAvatarBadge
      className={className}
      openFrom={openFrom}
      badgeContent={tags.length}
      icon={icon}
      list={list}
      sxPopover={sxPopover}
    />
  );
}

export default TagAvatarBadge;
