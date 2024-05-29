import { isString } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Link } from '@mui/material';
import MBreadcrumbs from '../MBreadcrums';
import { LinkProp } from '../MBreadcrums/MBreadcrumbs';
import { MTheme } from '../../theme';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    marginBottom: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

export interface HeaderDashboardProps {
  links: LinkProp[];
  action?: React.ReactNode;
  heading: string;
  moreLink?: string | [];
  className?: string;
}

function HeaderDashboard({ links, action, heading, moreLink, className, ...other }: HeaderDashboardProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography data-testid="headerDashboardHeading" variant="h4" gutterBottom>
            {heading}
          </Typography>
          <MBreadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {isString(moreLink) ? (
          <Link href={moreLink} target="_blank" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink?.map((href) => (
            <Link noWrap key={href} href={href} variant="body2" target="_blank" display="block">
              {href}
            </Link>
          ))
        )}
      </Box>
    </div>
  );
}

export default HeaderDashboard;
