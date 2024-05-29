import * as React from 'react';
import { MenuProps } from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonProps } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { forwardRef, useImperativeHandle } from 'react';

import MButton from '../Button/MButton';
import Menu from './Menu';

export interface MenuButtonProps {
  buttonText: string;
  variant?: 'contained' | 'outlined' | 'text';
  isOpen?: boolean;
  buttonProps?: ButtonProps;
  menuProps?: Partial<MenuProps>;
  children: React.ReactNode;
}

const MenuButton = forwardRef(
  ({ buttonText, buttonProps, menuProps, variant = 'contained', children }: MenuButtonProps, ref) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
      setAnchorEl(null);
    };

    useImperativeHandle(ref, () => ({ handleClose }), []);

    return (
      <>
        <MButton
          variant={variant}
          disableElevation
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {...buttonProps}
        >
          {buttonText}
        </MButton>
        <Menu anchorEl={anchorEl} onClose={handleClose} {...menuProps} open={open}>
          {children}
        </Menu>
      </>
    );
  }
);

export default MenuButton;
