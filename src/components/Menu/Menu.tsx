import React from 'react';
import { styled } from '@mui/material/styles';
import MuiMenu, { MenuProps } from '@mui/material/Menu';

const Menu = styled((props: MenuProps) => (
  <MuiMenu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow: '0px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)',

    '& .MuiMenu-list': {
      padding: theme.spacing(1),
    },
    '& .MuiMenuItem-root': {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 500,
      padding: theme.spacing(1),
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

export default Menu;
