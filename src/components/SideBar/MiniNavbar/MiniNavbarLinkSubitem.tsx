import React from 'react';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { MiniNavbarProps } from './type';
import { SubitemNavLinkStyled } from './MiniNavbarStyled';

const MiniNavbarLinkSubitem = ({ items, onClick }: MiniNavbarProps): JSX.Element => (
  <>
    {items?.map(({ link, icon, title }) => (
      <SubitemNavLinkStyled
        key={link}
        onClick={onClick}
        component={(props) => <NavLink {...props} data-testid={`link-sub-item-${title}`} to={link} />}
      >
        {icon}
        <Typography variant="textMedium">{title}</Typography>
      </SubitemNavLinkStyled>
    ))}
  </>
);

export default MiniNavbarLinkSubitem;
