/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { alpha, Avatar, AvatarProps, Box, Skeleton, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { LogoutIcon } from '../../assets/icons';

const useStyles = makeStyles((theme: Theme) => {
  const isLight = theme.palette.mode === 'light';

  return {
    account: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2, 2.5),
      margin: theme.spacing(1, 2.5, 5),
      borderRadius: theme.shape.borderRadiusSm,
      background: theme.palette.grey[isLight ? 200 : 800],

      '& .MuiSkeleton-root': {
        backgroundColor: alpha(theme.palette.grey[800], 0.11),
      },
    },
    secondaryTextWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
    },
    iconSkeleton: {
      marginRight: '5px',
    },
  };
});

type identifier = string | number | undefined;

export interface AuthUserAvatarProps {
  avatar: React.ReactElement;
  primaryText: identifier;
  secondaryText: identifier;
  onClickSecondaryText: () => void;
  icon: React.ComponentType;
  avatarProps: AvatarProps;
  isLoading: boolean;
}

function AuthUserAvatar({
  avatar,
  avatarProps,
  primaryText,
  secondaryText = 'Exit Viewer',
  onClickSecondaryText = () => null,
  icon: Icon = LogoutIcon,
  isLoading,
}: Partial<AuthUserAvatarProps>): JSX.Element {
  const classes = useStyles();

  const renderAvatar = ({
    avatar: avatarItem,
    avatarProps: avatarItemProps,
    isLoading: isAvatarItemLoading,
  }: Partial<AuthUserAvatarProps>): JSX.Element => {
    if (isAvatarItemLoading) {
      return <Skeleton variant="circular" height="40px" width="40px" />;
    }
    return avatarItem ?? <Avatar {...avatarItemProps} />;
  };

  const renderPrimaryText = ({
    primaryText: primaryTextItem,
    isLoading: isPrimaryTextItemLoading,
  }: Partial<AuthUserAvatarProps>): JSX.Element => (
    <Typography variant="subtitle2" color="textPrimary" data-testid="textPrimary">
      {isPrimaryTextItemLoading ? (
        <Skeleton variant="text" animation="wave" width="100px" data-testid="textPrimarySkeleton" />
      ) : (
        primaryTextItem
      )}
    </Typography>
  );

  const renderSecondaryText = ({
    secondaryText: secondaryTextItem,
    isLoading: isSecondaryTextItemLoading,
  }: Partial<AuthUserAvatarProps>): JSX.Element => (
    <Typography variant="body2" color="textSecondary" data-testid="textSecondary">
      {isSecondaryTextItemLoading ? (
        <Skeleton variant="text" animation="wave" width="70px" data-testid="textSecondarySkeleton" />
      ) : (
        secondaryTextItem
      )}
    </Typography>
  );

  const renderIcon = ({ isLoading: isIconLoading }: Partial<AuthUserAvatarProps>): JSX.Element =>
    isIconLoading ? (
      <Skeleton className={classes.iconSkeleton} variant="text" height="22px" width="24px" animation="wave" />
    ) : (
      <Icon />
    );

  return (
    <div className={classes.account}>
      {renderAvatar({ avatar, avatarProps, isLoading })}
      <Box sx={{ ml: 2 }}>
        {renderPrimaryText({ primaryText, isLoading })}
        <div className={classes.secondaryTextWrapper} data-testid="secondaryTextWrapper" onClick={onClickSecondaryText}>
          {renderIcon({ isLoading })}
          {renderSecondaryText({ secondaryText, isLoading })}
        </div>
      </Box>
    </div>
  );
}

export default AuthUserAvatar;
