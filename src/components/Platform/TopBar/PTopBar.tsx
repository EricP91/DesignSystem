import React, { ReactNode, useCallback, useMemo, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { PresenceType, useIdleTimer } from 'react-idle-timer';
import { Avatar, Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from 'theme';
import { pxToRem } from '../../../theme/utils/formatFontSize';
import { CellebriteLightIconLogo } from '../../../assets/logos';
import { LoginArrowIcon } from '../../../assets/icons';
import PromptDialog from './PromptDialog';
import PTopBarMenu from './PTopBarMenu';
import { loadPendo } from '../../../util/pendoUtils';
import { PLATFORM_CHANNEL, PLATFORM_CHANNEL_EVENTS, PTopBarProps } from './types';
import { extractInitials } from '../../../util/initialsForAvatar';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    height: 64,
    backgroundColor: theme.palette.grey[1300],
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    flexWrap: 'nowrap',
  },
  logo: {
    width: 'auto',
    height: 'auto',
    marginLeft: theme.spacing(2.875),
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginSection: {
    float: 'right',
    marginRight: theme.spacing(3),
  },
  avatar: {
    width: 24,
    height: 24,
    backgroundColor: theme.palette.green[900],
    fontSize: pxToRem(12),
    '&:focus-visible': {
      outline: `1px solid ${theme.palette.grey[0]}`,
    },
    '&:hover': {
      outline: `1px solid ${theme.palette.grey[1900]}`,
    },
  },
  adminPortalButton: {
    marginRight: theme.spacing(3),
  },
  platformName: {
    display: 'flex',
    fontWeight: 700,
    marginLeft: theme.spacing(),
  },
  vl: {
    margin: theme.spacing(0, 2),
    borderRight: `1px solid ${theme.palette.grey[500]}`,
    height: 26,
  },
  appName: {
    fontWeight: 500,
  },
}));

const IDLE_TIMER_TIMEOUT = 1000 * 60 * 15;
const IDLE_TIMER_PROMPT_TIMEOUT = 1000 * 60 * 2;
const ACTIVE_EVENT_INTERVAL = 5 * 1000; // 5 seconds
const PTopBar = forwardRef((props: PTopBarProps, ref) => {
  const {
    children,
    platformName,
    appName,
    logo = <CellebriteLightIconLogo data-testid="topbar-cellebrite-light-logo" />,
    isLoggedIn,
    handleLogin,
    handleLogout,
    contentClassName,
    loginText = 'Login',
    logoutText = 'Logout',
    idleTimeConfig,
    hideTopBar = false,
    userInfo,
    adminPortal,
    hideLogout,
    pendoEnabled = true,
    pendoData: { apiKey: pendoApiKey, url: pendoUrl, data: pendoData } = {},
    showScreenResolutionGuide = false,
    minScreenResolution,
  } = props;

  useEffect(() => {
    if (pendoEnabled) {
      loadPendo(pendoApiKey, pendoUrl, pendoData, showScreenResolutionGuide, minScreenResolution);
    }
  }, [pendoEnabled]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openPrompt, setOpenPrompt] = useState(false);
  const [broadcastChannel] = useState<BroadcastChannel>(new BroadcastChannel(PLATFORM_CHANNEL));
  const [isActive, setIsActive] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      broadcastChannel.postMessage({ event: PLATFORM_CHANNEL_EVENTS.IS_ACTIVE, data: isActive, appName });
    }, ACTIVE_EVENT_INTERVAL);
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    broadcastChannel.onmessage = (event: MessageEvent) => {
      switch (event.data.event) {
        case PLATFORM_CHANNEL_EVENTS.IS_ACTIVE:
          {
            const isEventFromSameApp = event.data.appName && event.data.appName === appName;
            if (event.data.data && !isEventFromSameApp) {
              handleKeepAlive();
            }
          }
          break;
        case PLATFORM_CHANNEL_EVENTS.LOGOUT:
          {
            defaultLogoutHandler();
          }
          break;
      }
    };

    return () => {
      broadcastChannel.close();
    };
  }, []);

  const onLogout = (): void => {
    broadcastChannel.postMessage({ event: PLATFORM_CHANNEL_EVENTS.LOGOUT });
  };

  const defaultLogoutHandler = useCallback(() => {
    onLogout();
    window.location.href = '/logout';
  }, []);

  useImperativeHandle(ref, () => ({
    publishLogout: onLogout,
  }));

  const logoutHandler = useMemo(() => handleLogout ?? defaultLogoutHandler, [handleLogout]);

  const onActive = useCallback(() => {
    setOpenPrompt(false);
  }, []);

  const onPrompt = () => {
    const onBeforeIdle = idleTimeConfig?.onBeforeIdle;
    if (onBeforeIdle && onBeforeIdle() === false) {
      idleTimer?.activate();
      setOpenPrompt(false);
      return;
    }
    setOpenPrompt(true);
  };

  const onIdle = () => {
    setOpenPrompt(false);
    const onBeforeIdle = idleTimeConfig?.onBeforeIdle;
    if (onBeforeIdle && onBeforeIdle() === false) {
      idleTimer?.activate();
      return;
    }
    logoutHandler();
  };

  const onPresenceChange = useCallback((presence: PresenceType): void => {
    const isActive = presence.type === 'active' && !presence.prompted;
    const isIdle = presence.type === 'idle';
    setIsActive(isActive);
    broadcastChannel.postMessage({ event: PLATFORM_CHANNEL_EVENTS.IS_IDLE, data: isIdle });
    broadcastChannel.postMessage({ event: PLATFORM_CHANNEL_EVENTS.IS_ACTIVE, data: isActive, appName });
  }, []);

  const idleTimer =
    idleTimeConfig &&
    useIdleTimer({
      onIdle,
      timeout: idleTimeConfig?.idleTimeTimeout ?? IDLE_TIMER_TIMEOUT,
      crossTab: true,
      onPrompt,
      onActive,
      promptBeforeIdle: idleTimeConfig?.promptDialogConfig?.promptBeforeIdle ?? IDLE_TIMER_PROMPT_TIMEOUT,
      throttle: 500,
      onPresenceChange,
    });

  const handleKeepAlive = useCallback(() => {
    setOpenPrompt(false);
    idleTimer?.activate();
  }, [idleTimer]);

  const getButton = useCallback(
    (component: ReactNode | null, onClick?: (e?: React.MouseEvent) => void): ReactNode => {
      if (component && onClick) {
        return (
          <IconButton onClick={onClick} data-testid="topbar-auth-button">
            {component}
          </IconButton>
        );
      }
      return <></>;
    },
    [classes]
  );
  const handleUserAvatarClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const loginSection = useMemo((): ReactNode => {
    let data = null;
    if (isLoggedIn === true) {
      const letters = extractInitials(userInfo?.userName);
      data = {
        component: <Avatar className={classes.avatar}>{letters}</Avatar>,
        onclick: handleUserAvatarClick,
      };
    }
    if (isLoggedIn === false && handleLogin) {
      data = {
        component: (
          <>
            <LoginArrowIcon />
            <span>{loginText}</span>
          </>
        ),
        onclick: handleLogin,
      };
    }
    const authButton: ReactNode = getButton(data?.component, data?.onclick);
    return (
      <Box data-testid="topbar-login-section" className={classes.loginSection}>
        {adminPortal && (
          <Button
            data-testid="topbar-admin-portal-button"
            href={adminPortal.url}
            target="_blank"
            variant="contained"
            className={classes.adminPortalButton}
          >
            {adminPortal.buttonText ?? 'Admin Portal'}
          </Button>
        )}
        {authButton}
      </Box>
    );
  }, [isLoggedIn, handleLogout, handleLogin, loginText, getButton, userInfo?.userName]);

  return (
    <>
      {!hideTopBar && (
        <Grid container classes={{ root: classes.root }}>
          <Grid item flexGrow={1} className={classes.logo}>
            {logo}
            <Typography
              variant="h6"
              component="span"
              data-testid="topbar-platform-name"
              className={classes.platformName}
            >
              {platformName}
              {platformName && <div className={classes.vl}></div>}
            </Typography>

            <Typography variant="h6" component="span" data-testid="topbar-app-name" className={classes.appName}>
              {appName}
            </Typography>
          </Grid>
          <Grid item flexGrow={2}>
            <Box className={contentClassName}>{children}</Box>
          </Grid>
          <Grid item flexGrow={1}>
            <Box>{loginSection}</Box>
          </Grid>
        </Grid>
      )}
      {idleTimeConfig && openPrompt && (
        <PromptDialog
          handleKeepAlive={handleKeepAlive}
          getRemainingTime={idleTimer?.getRemainingTime}
          dialogTitle={idleTimeConfig.promptDialogConfig?.dialogTitle}
          keepAliveText={idleTimeConfig.promptDialogConfig?.keepAliveText}
          dialogContent={idleTimeConfig.promptDialogConfig?.dialogContent}
        />
      )}
      <PTopBarMenu
        logoutText={logoutText}
        userName={userInfo?.userName}
        userEmail={userInfo?.userEmail}
        onLogoutClick={logoutHandler}
        onMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        hideLogout={hideLogout}
      />
    </>
  );
});

export default PTopBar;
