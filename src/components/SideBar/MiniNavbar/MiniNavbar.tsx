import React from 'react';
import { styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MiniNavbarLinkItem from './MiniNavbarLinkItem';
import { MiniNavbarProps } from './type';

const MiniNavbarContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  width: 96,
  backgroundColor: theme?.palette.ui.mutedHover,
}));

const MiniNavbar = ({ items }: MiniNavbarProps): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <MiniNavbarContainer>
      {items?.map(({ link, icon, title, subItems }) => (
        <MiniNavbarLinkItem key={title} link={link} icon={icon} title={title} subItems={subItems} pathname={pathname} />
      ))}
    </MiniNavbarContainer>
  );
};

export default MiniNavbar;
