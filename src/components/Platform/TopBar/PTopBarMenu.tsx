import React from 'react';
import { Avatar, Box, Grid, Menu, MenuItem } from '@mui/material';
import { MTheme } from 'theme';
import { makeStyles } from '@mui/styles';
import { LogoutArrowIcon } from '../../../assets/icons';

export type PTopBarMenuProps = {
  logoutText: string;
  onLogoutClick: () => void;
  onMenuClose: () => void;
  anchorEl: HTMLElement | null;
  userName?: string;
  userEmail?: string;
  hideLogout?: boolean;
};

const useStyles = makeStyles((theme: MTheme) => ({
  infoSection: {
    cursor: 'default',
    '& svg': {
      fill: theme.palette.grey[1500],
    },
  },
  avatar: {
    backgroundColor: theme.palette.blue[300],
  },
  userName: {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.grey[1300],
  },
  userEmail: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.grey[1500],
  },
  logout: {
    color: theme.palette.grey[1300],
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    '& svg': {
      width: 24,
      marginRight: theme.spacing(),
      marginLeft: theme.spacing(0.5),
      height: 24,
      fill: theme.palette.grey[1500],
    },
  },
}));

export default function PTopBarMenu({
  logoutText,
  onLogoutClick,
  onMenuClose,
  anchorEl,
  userName,
  userEmail,
  hideLogout,
}: PTopBarMenuProps): JSX.Element {
  const open = Boolean(anchorEl);
  const classes = useStyles();
  return (
    <Menu
      data-testid="top-bar-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {userName && userEmail && (
        <MenuItem className={classes.infoSection}>
          <Grid container spacing={1} flexWrap="nowrap">
            <Grid item>
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid item>
              <Box className={classes.userName}>{userName}</Box>
              <Box className={classes.userEmail}>{userEmail}</Box>
            </Grid>
          </Grid>
        </MenuItem>
      )}
      {!hideLogout && (
        <MenuItem data-testid="delete-evidence-menu" onClick={onLogoutClick} className={classes.logout}>
          <LogoutArrowIcon />
          <span>{logoutText}</span>
        </MenuItem>
      )}
    </Menu>
  );
}
