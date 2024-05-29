import { ReactNode } from 'react';

export type PTopBarUserInfo = {
  userName: string;
  userEmail: string;
};

export type PTopBarIdleTimerProps = {
  idleTimeTimeout?: number;
  promptDialogConfig?: {
    dialogTitle?: string;
    dialogContent?: string;
    keepAliveText?: string;
    promptBeforeIdle?: number;
  };
  localStorageKey?: string;
  onBeforeIdle?: () => boolean;
};

export type PTopBarPendoData = {
  apiKey?: string;
  url?: string;
  data?: Record<string, unknown>;
};

export type PTopBarProps = {
  platformName?: string;
  appName?: string;
  children?: ReactNode;
  isLoggedIn?: boolean;
  handleLogin?: () => void;
  handleLogout?: () => void;
  loginText?: string;
  logoutText?: string;
  contentClassName?: string;
  idleTimeConfig?: PTopBarIdleTimerProps;
  hideTopBar?: boolean;
  userInfo?: PTopBarUserInfo;
  logo?: ReactNode;
  adminPortal?: {
    url: string;
    buttonText?: string;
  };
  hideLogout?: boolean;
  pendoEnabled?: boolean;
  pendoData?: PTopBarPendoData;
  showScreenResolutionGuide?: boolean;
  minScreenResolution?: number;
  ref?: React.RefObject<unknown>;
};

export type TopBarUtilMethods = {
  publishLogout: () => void;
};

export const PLATFORM_CHANNEL = 'platform_channel';
export enum PLATFORM_CHANNEL_EVENTS {
  IS_ACTIVE = 'isActive',
  IS_IDLE = 'isIdle',
  LOGOUT = 'logout',
}
