import { alpha, Avatar, Badge, Box, Popover, SxProps } from '@mui/material';
import React, { useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Theme } from '@mui/system';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  avatar: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    height: theme.spacing(3.75),
    width: theme.spacing(3.75),
  },
  avatarBadge: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.red[600],
      color: theme.palette.grey[0],
      fontSize: theme.spacing(1.25),
      fontWeight: 700,
      height: theme.spacing(1.75),
      minWidth: theme.spacing(1.75),
      padding: 0,
    },
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    marginTop: theme.spacing(1.75),
    padding: theme.spacing(2),
    minWidth: theme.spacing(18),
    maxWidth: theme.spacing(50),
    pointerEvents: 'auto',
  },
  list: {
    overflow: 'auto',
    maxHeight: theme.spacing(13.625),
  },
  tagIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));

export interface IconAvatarBadgeProps {
  badgeContent: number | null;
  icon: JSX.Element | string | null;
  list: JSX.Element | string | null;
  openFrom?: 'left' | 'right' | 'center';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  sxPopover?: SxProps<Theme> | undefined;
}

function IconAvatarBadge({
  badgeContent,
  icon,
  list,
  openFrom = 'left',
  className = '',
  onClick = () => {},
  sxPopover = {},
}: Partial<IconAvatarBadgeProps>): JSX.Element {
  const classes = useStyles();
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = (event: React.MouseEvent<HTMLElement>): void => {
    setOpenedPopover(true);
    onClick(event);
  };

  const popoverLeave = (): void => {
    setOpenedPopover(false);
  };

  return (
    <Box sx={{ display: 'flex' }} className={className}>
      <Box ref={popoverAnchor} onClick={popoverEnter} onMouseLeave={popoverLeave} data-testid="icon-avatar-badge-box">
        <Badge className={classes.avatarBadge} overlap="circular" badgeContent={badgeContent}>
          <Avatar className={clsx(classes.avatar, className, 'avatar')} data-testid="avatar-icon">
            {icon}
          </Avatar>
        </Badge>
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
        sx={{ ...sxPopover }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        {list}
      </Popover>
    </Box>
  );
}

export default IconAvatarBadge;
