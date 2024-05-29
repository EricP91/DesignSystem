import React, { HTMLAttributes, ReactNode } from 'react';
import { styled, Theme } from '@mui/system';

export interface TileProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'success' | 'error' | 'info' | 'warning';
  active?: boolean;
  icon?: ReactNode;
}

const getBorderColorMapping = (theme: Theme, active: boolean): Record<string, string> => ({
  info: active ? '#6884D9' : theme.palette.ui.brandLight,
  success: active ? theme.palette.ui.positiveLight : theme.palette.ui.brandLight,
  warning: active ? theme.palette.ui.warningLight : theme.palette.ui.brandLight,
  error: active ? theme.palette.ui.negativeLight : theme.palette.ui.negativeSoft,
});

const TileContent = styled('div')(() => ({
  flexGrow: 1,
}));

interface TileContainerProps {
  active: boolean;
  showPointer: boolean;
  color: string;
}

const TileContainer = styled('div', {
  shouldForwardProp: (propName: string) => !['active', 'showPointer'].includes(propName),
})<TileContainerProps>(({ theme, active, showPointer, color = 'info' }) => ({
  display: 'flex',
  padding: theme.spacing(active ? 1.875 : 2),
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.12)',
  border: `${active ? '2px' : '1px'} solid ${getBorderColorMapping(theme, active)[color]}`,
  cursor: showPointer ? 'pointer' : 'default',
  borderRadius: theme.spacing(1),
  background:
    color === 'error'
      ? `linear-gradient(195deg, ${theme.palette.ui.negativeLight} -222.34%, ${theme.palette.common.white} 58.37%)`
      : theme.palette.common.white,
  minHeight: 120,
  '&:hover': {
    backgroundColor: theme.palette.ui.mutedHover,
    ...(active
      ? { border: `2px solid ${color === 'error' ? theme.palette.ui.negativeSoft : theme.palette.ui.brandLight}` }
      : {}),
    ...(color === 'error'
      ? {
          background: ` linear-gradient(195deg, ${theme.palette.ui.negativeLight} -222.34%, ${theme.palette.ui.mutedHover} 58.37%);`,
        }
      : {}),
  },
}));

const Tile = ({ color = 'info', children, icon = <></>, active = false, ...props }: TileProps): JSX.Element => (
  <TileContainer data-testid="tile-container" showPointer={!!props.onClick} active={active} color={color} {...props}>
    <TileContent>{children}</TileContent>
    {icon}
  </TileContainer>
);

export default Tile;
