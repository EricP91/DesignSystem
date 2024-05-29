import { ReactNode } from 'react';

export interface MiniNavbarItem {
  link?: string;
  icon: ReactNode;
  title: string;
  subItems?: MiniNavbarItem[];
}

export interface MiniNavbarProps {
  items?: MiniNavbarItem[];
  onClick?: () => void;
}

export interface MiniNavbarLinkItemProps extends MiniNavbarItem {
  pathname: string;
}
