import last from 'lodash/last';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Breadcrumbs, useTheme } from '@mui/material';
import { v4 as uuid } from 'uuid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface LinkProp {
  href: string;
  name: string;
  icon?: React.ReactElement;
}

function LinkItem({ link, color, iconColor }: { link: LinkProp; color: string; iconColor: string }): JSX.Element {
  const { href, name, icon } = link;
  return (
    <Link
      to={href}
      key={name}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color,
        '& .MuiSvgIcon-root': {
          fill: iconColor,
        },
      }}
      variant="largeMedium"
      underline="hover"
      color={color}
      component={RouterLink}
    >
      {icon}
      {name}
    </Link>
  );
}

export interface MBreadCrumbsProp {
  links: LinkProp[];
  activeLast?: boolean;
  className?: string;
}

function MBreadcrumbs({ links, activeLast = false, className, ...other }: MBreadCrumbsProp): JSX.Element {
  const theme = useTheme();
  const { brandDark } = theme.palette.ui;
  const activeColor = theme.palette.ui.brand;
  const { mutedDark } = theme.palette.ui;
  const currentLink = last(links)?.name;
  const listDefault = links.map((link) => (
    <LinkItem key={uuid()} link={link} color={brandDark} iconColor={mutedDark} />
  ));
  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem key={uuid()} link={link} color={brandDark} iconColor={mutedDark} />
      ) : (
        <Box
          sx={{
            color: theme.palette.ui.brand,
          }}
        >
          <LinkItem key={uuid()} link={link} color={activeColor} iconColor={activeColor} />
        </Box>
      )}
    </div>
  ));

  return (
    <Breadcrumbs maxItems={2} separator={<NavigateNextIcon />} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  );
}

export default MBreadcrumbs;
