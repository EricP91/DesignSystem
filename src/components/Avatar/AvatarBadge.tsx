import React from 'react';
import { makeStyles } from '@mui/styles';
import { Badge } from '@mui/material';
import clsx from 'clsx';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    '& .MuiBadge-badge': {
      height: 20,
      width: 20,
      '& .MuiAvatar-root': {
        backgroundColor: theme.palette.grey[0],
        height: 20,
        width: 20,
        border: `2px solid ${theme.palette.grey[0]}`,
      },
    },
    '& .MuiBadge-anchorOriginBottomRightCircular': {
      backgroundColor: theme.palette.grey[0],
      border: `2px solid ${theme.palette.grey[0]}`,
    },
    '& .MuiBadge-anchorOriginTopRightCircular': {
      backgroundColor: theme.palette.grey[500],
    },
  },
}));

export interface AvatarBadgeProps {
  primaryBadgeContent: React.ReactNode;
  primaryBadgeClassName?: string;
  secondaryBadgeContent?: React.ReactNode;
  secondaryBadgeClassName?: string;
  children: React.ReactNode;
}

function AvatarBadge({
  primaryBadgeContent,
  primaryBadgeClassName = '',
  secondaryBadgeContent,
  secondaryBadgeClassName = '',
  children,
}: AvatarBadgeProps): JSX.Element {
  const classes = useStyles();
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      badgeContent={secondaryBadgeContent}
      className={clsx(classes.root, secondaryBadgeClassName)}
      data-testid="secondary-badge"
    >
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        className={primaryBadgeClassName}
        badgeContent={primaryBadgeContent}
        data-testid="primary-badge"
      >
        {children}
      </Badge>
    </Badge>
  );
}

export default AvatarBadge;
