import React, { useState } from 'react';
import { Stack, ListItemIcon, Typography } from '@mui/material';

import { NavLink, matchPath } from 'react-router-dom';
import { MiniNavbarLinkItemProps } from './type';
import { SubitemsNavLinkContainerStyled, RootLinkItemStyled } from './MiniNavbarStyled';
import MiniNavbarLinkSubitem from './MiniNavbarLinkSubitem';

const MiniNavbarLinkItem = ({ link, icon, title, subItems, pathname }: MiniNavbarLinkItemProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const match = subItems?.some((item) => matchPath(pathname, { path: item.link, exact: false }));

  const props = link ? { component: NavLink, to: link } : { className: match ? 'active' : undefined };

  return (
    <RootLinkItemStyled
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      data-testid={`link-item-${title}`}
      key={link}
      {...props}
    >
      <Stack gap={1} alignItems="center" sx={{ mr: 0.625 }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography variant="smallBold">{title}</Typography>
      </Stack>
      {subItems?.length && (
        <SubitemsNavLinkContainerStyled
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <MiniNavbarLinkSubitem onClick={handlePopoverClose} items={subItems} />
        </SubitemsNavLinkContainerStyled>
      )}
    </RootLinkItemStyled>
  );
};

export default MiniNavbarLinkItem;
