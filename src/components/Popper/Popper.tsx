import React, { useState } from 'react';
import { Box, Fade, Popper as MuiPopper, PopperPlacementType } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { MTheme } from '../../theme';

export interface PopperProps {
  placement: PopperPlacementType;
  isPopperOpen: boolean;
  popperClassName?: string;
  popperContentClassName?: string;
  arrowClassName?: string;
  transition?: boolean;
  disablePortal?: boolean;
  transitionTimeout?: number;
  popperAnchor: HTMLElement | null;
  popperStrategy?: 'absolute' | 'fixed';
  children: JSX.Element | JSX.Element[];
  arrow: boolean;
  additionalModifiers?: Array<Record<string, unknown>>;
}

const useStyles = makeStyles((theme: MTheme) => ({
  popoverArrow: {
    position: 'absolute',
    fontSize: theme.spacing(0.875),
    width: theme.spacing(3),
    height: theme.spacing(3),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: {
    zIndex: 9999,
    '& > div': {
      position: 'relative',
    },
    '&[data-popper-placement*="bottom"]': {
      '& > div': {
        marginTop: theme.spacing(1.25),
      },
      '& .MuiPopper-arrow': {
        top: 0,
        left: 0,
        marginTop: theme.spacing(-0.9),
        width: theme.spacing(3),
        height: theme.spacing(1),
        '&::before': {
          borderWidth: `0 ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)}`,
          borderColor: `transparent transparent ${theme.palette.grey[1300]} transparent`,
        },
      },
    },
    '&[data-popper-placement*="top"]': {
      '& > div': {
        marginBottom: theme.spacing(1.25),
      },
      '& .MuiPopper-arrow': {
        bottom: 0,
        left: 0,
        marginBottom: theme.spacing(-0.9),
        width: theme.spacing(3),
        height: theme.spacing(1),
        '&::before': {
          borderWidth: `${theme.spacing(1)}  ${theme.spacing(1)} 0 ${theme.spacing(1)}`,
          borderColor: `${theme.palette.grey[1300]} transparent transparent transparent`,
        },
      },
    },
  },
  popperContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: theme.palette.grey[1300],
    borderRadius: theme.shape.borderRadiusSm,
  },
}));

function Popper({
  placement,
  isPopperOpen,
  popperClassName,
  disablePortal = true,
  popperContentClassName,
  arrowClassName,
  popperAnchor,
  popperStrategy = 'absolute',
  transitionTimeout = 300,
  transition = true,
  arrow = false,
  children,
  additionalModifiers = [],
}: PopperProps): JSX.Element {
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const classes = useStyles();
  return (
    <MuiPopper
      placement={placement}
      disablePortal={disablePortal}
      open={isPopperOpen}
      transition={transition}
      className={clsx(classes.popper, popperClassName)}
      anchorEl={popperAnchor}
      data-testid="popper"
      popperOptions={{ strategy: popperStrategy }}
      modifiers={[
        {
          name: 'preventOverflow',
          enabled: true,
          options: {
            boundariesElement: 'window',
          },
        },
        {
          name: 'arrow',
          enabled: arrow,
          options: {
            element: arrowRef,
          },
        },
        ...additionalModifiers,
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={transitionTimeout}>
          <Box>
            {arrow ? (
              <span ref={setArrowRef} className={clsx(`${classes.popoverArrow} MuiPopper-arrow`, arrowClassName)} />
            ) : null}
            <Box className={clsx(classes.popperContent, popperContentClassName)}>{children}</Box>
          </Box>
        </Fade>
      )}
    </MuiPopper>
  );
}

export default Popper;
