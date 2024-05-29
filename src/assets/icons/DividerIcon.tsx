import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

interface DividerIconProps extends SvgIconProps {
  outerFill?: string;
  outerStroke?: string;
  innerFill?: string;
}

export function DividerIcon({
  outerFill = '#fff',
  outerStroke = '#0064CC',
  innerFill = '#0064CC',
  ...props
}: DividerIconProps): JSX.Element {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="7.5" fill={outerFill} stroke={outerStroke} />
      <circle cx="8" cy="8" r="4" fill={innerFill} />
    </SvgIcon>
  );
}
