import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { MutableRefObject } from 'react';
import SimpleBarReact from 'simplebar-react';
import { alpha } from '@mui/material';
import { MTheme } from '../../theme';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
  },
  scroll: {
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: alpha(theme.palette.grey[600], 0.48),
      },
      '&.simplebar-visible:before': {
        opacity: 1,
      },
    },
    '& .simplebar-vertical': {
      width: 10,
    },
    '& .simplebar-horizontal .simplebar-scrollbar': {
      height: 6,
    },
    '& .simplebar-mask': {
      zIndex: 'inherit',
    },
    '& .simplebar-content-wrapper::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

// ----------------------------------------------------------------------

interface ScrollbarsProps {
  children: React.ReactNode;
  className?: string;
  scrollableNodeProps?: { ref: MutableRefObject<Element | undefined> };
}

function Scrollbars({ children, className = '', scrollableNodeProps, ...other }: ScrollbarsProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SimpleBarReact timeout={500} clickOnTrack={false} className={clsx(classes.scroll, className)} {...other}>
        {children}
      </SimpleBarReact>
    </div>
  );
}

export default Scrollbars;
