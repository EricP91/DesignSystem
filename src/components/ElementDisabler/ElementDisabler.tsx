import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  disabledElementWrapper: {
    pointerEvents: 'none',
    opacity: 0.4,
  },
  tooltipBearer: {
    maxWidth: 'fit-content',
  },
}));

export interface ElementDisablerProps {
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
  tooltipTitle?: string | React.ReactElement;
  className?: string;
  tooltipPlacement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}

function ElementDisabler({
  children,
  disabled,
  className,
  tooltipTitle = '',
  tooltipPlacement = 'top',
}: ElementDisablerProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      {React.Children.map(children, (child) =>
        !disabled ? (
          child
        ) : (
          <Tooltip arrow title={tooltipTitle} placement={tooltipPlacement}>
            <div className={classes.tooltipBearer} data-testid="tooltip-bearer">
              <div className={clsx(classes.disabledElementWrapper, className)}>{child}</div>
            </div>
          </Tooltip>
        )
      )}
    </>
  );
}

export default ElementDisabler;
