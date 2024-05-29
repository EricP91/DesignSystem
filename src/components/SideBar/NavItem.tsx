import clsx from 'clsx';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify-icons/eva/arrow-ios-downward-fill';
import { makeStyles } from '@mui/styles';
import { Box, Collapse, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import * as H from 'history';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {},
  isExpandableListItemOpen: {
    '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
    '& .MuiListItemText-root': { color: theme.palette.primary.main },
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.grey[0],
  },
  listItem: {
    ...theme.typography.body3,
    height: 48,
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.grey[1300],
    '& .MuiListItemIcon-root': {
      color: theme.palette.grey[500],
    },
  },
  subIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      width: 4,
      height: 4,
      content: "''",
      display: 'block',
      borderRadius: '50%',
      backgroundColor: theme.palette.text.disabled,
      transition: theme.transitions.create('transform'),
    },
  },
  isActiveListItem: {
    '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.grey[0],
    '&:before': {
      top: 0,
      left: 0,
      width: 3,
      bottom: 0,
      content: "''",
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
    },
  },
  isActiveListItemSub: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    '& $subIcon:before': {
      transform: 'scale(2)',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export interface NavItemProps {
  level: number;
  title: React.ReactNode | string;
  href: string;
  info: React.ComponentType | React.ReactElement | JSX.Element | string | number | null | undefined;
  icon: React.ComponentType | any;
  open?: boolean;
  children?: React.ReactElement;
  className?: string;
  isDisabled?: boolean;
  dataTestId?: string;
  totalCount?: number | null;
}

export interface Match {
  isExact: boolean;
  path: string;
  url: string;
}

function NavItem({
  level = 0,
  title,
  href,
  info,
  icon: NavItemIcon,
  open = false,
  children,
  className = '',
  isDisabled = false,
  dataTestId,
  totalCount,
  ...other
}: Partial<NavItemProps>) {
  const classes = useStyles();
  const [show, setShow] = useState(open);
  const isSubItem = level > 0;

  const handleShow = () => setShow(!show);

  if (children) {
    return (
      <>
        <ListItem
          button
          disableGutters
          onClick={handleShow}
          className={clsx(
            classes.listItem,
            {
              [classes.isActiveListItem]: open,
              [classes.isExpandableListItemOpen]: show,
            },
            className
          )}
          data-testid={dataTestId}
          {...other}
        >
          <ListItemIcon>{NavItemIcon && <NavItemIcon />}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info || null}
          <Box
            component={Icon}
            icon={show ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItem>

        <Collapse in={show}>{children}</Collapse>
      </>
    );
  }

  const ListItemLink: any = React.forwardRef((props, ref) => {
    const linkProps: any = { to: href, ref, exact: open, ...props };

    return <RouterLink {...linkProps} />;
  });

  return (
    <ListItem
      button
      disabled={isDisabled}
      disableGutters
      component={ListItemLink}
      data-testid={dataTestId}
      activeClassName={isSubItem ? classes.isActiveListItemSub : classes.isActiveListItem}
      className={clsx(classes.listItem, className)}
      isActive={(match: Match, location: H.Location) => {
        if (!match) {
          return false;
        }
        const { url } = match;
        const { pathname } = location;
        const isMatch = url === pathname;

        if (!isSubItem) {
          return url.length && pathname.includes(url);
        }

        return isMatch;
      }}
      {...other}
    >
      <ListItemIcon>{isSubItem ? <span className={classes.subIcon} /> : <NavItemIcon />}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
      {info || null}
    </ListItem>
  );
}

export default NavItem;
