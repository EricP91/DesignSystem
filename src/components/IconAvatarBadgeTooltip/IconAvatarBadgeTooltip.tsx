import { alpha, Avatar, Badge, Box } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MTheme } from '../../theme';
import { Popper } from '../Popper';
import { PopperProps } from '../Popper/Popper';

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
  button: {
    minWidth: 'auto',
    padding: 0,
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
}));

export interface IconAvatarBadgeTooltipProps {
  icon: JSX.Element | string | null;
  popperContent: JSX.Element | JSX.Element[];
  badgeCounter?: number | null;
  popperProps?: Partial<Omit<PopperProps, 'isPopperOpen' | 'popperAnchor' | 'arrow'>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  dataTestId?: string;
}

// This component was created because IconAvatarBadge is used in other places of the viewer besides the chat header
// And it was requested to have a new Avatar Badge component that would look the same but behave differently
function IconAvatarBadgeTooltip({
  badgeCounter = 0,
  dataTestId = 'icon-avatar-badge-tooltip',
  popperContent,
  icon,
  className = '',
  onClick = () => {},
  popperProps,
}: IconAvatarBadgeTooltipProps): JSX.Element {
  const classes = useStyles();
  const [topicPopperOpen, setTopicPopperOpen] = useState(false);
  const [topicPopperAnchor, setTopicPopperAnchor] = useState<HTMLElement | null>(null);

  const showPopper = (): void => {
    setTopicPopperOpen(true);
  };

  const hidePopper = (): void => {
    setTopicPopperOpen(false);
  };

  return (
    <Box className={className} data-testid={dataTestId}>
      <button
        type="button"
        className={classes.button}
        onClick={onClick}
        ref={setTopicPopperAnchor}
        onMouseEnter={showPopper}
        onMouseLeave={hidePopper}
        data-testid="icon-avatar-badge-button"
      >
        <Badge className={classes.avatarBadge} overlap="circular" badgeContent={badgeCounter}>
          <Avatar className={clsx(classes.avatar, 'avatar')} data-testid="avatar-icon">
            {icon}
          </Avatar>
        </Badge>
      </button>
      <Popper placement="bottom" isPopperOpen={topicPopperOpen} arrow popperAnchor={topicPopperAnchor} {...popperProps}>
        {popperContent}
      </Popper>
    </Box>
  );
}

export default IconAvatarBadgeTooltip;
