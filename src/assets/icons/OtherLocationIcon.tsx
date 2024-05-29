import { SvgIcon } from '@mui/material';
import React from 'react';
import { SvgIconProps } from './types';

export function OtherLocationIcon({ fill = '#868686', secondaryFill = 'white', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M21 9.95455C21 17.1136 12 23.25 12 23.25C12 23.25 3 17.1136 3 9.95455C3 7.51335 3.94821 5.17214 5.63604 3.44595C7.32387 1.71976 9.61305 0.75 12 0.75C14.3869 0.75 16.6761 1.71976 18.364 3.44595C20.0518 5.17214 21 7.51335 21 9.95455Z"
        fill={fill}
      />
      <path
        d="M15.1405 5.25H8.85947C6.87005 5.25 5.25 6.93307 5.25 9C5.25 11.0669 6.87 12.75 8.85947 12.75H15.1405C17.1299 12.75 18.75 11.0669 18.75 9C18.7501 6.93312 17.1301 5.25 15.1408 5.25H15.1405ZM8.66053 10.2254C8.00679 10.2254 7.48105 9.67916 7.48105 9C7.48105 8.32084 8.00682 7.77461 8.66053 7.77461C9.31426 7.77461 9.84 8.32084 9.84 9C9.84 9.67916 9.31424 10.2254 8.66053 10.2254ZM12 10.2254C11.3463 10.2254 10.8205 9.67916 10.8205 9C10.8205 8.32084 11.3463 7.77461 12 7.77461C12.6537 7.77461 13.1795 8.32084 13.1795 9C13.1795 9.67916 12.6537 10.2254 12 10.2254ZM15.3395 10.2254C14.6857 10.2254 14.16 9.67916 14.16 9C14.16 8.32084 14.6858 7.77461 15.3395 7.77461C15.9932 7.77461 16.5189 8.32084 16.5189 9C16.5188 9.67919 15.9931 10.2254 15.3395 10.2254Z"
        fill={secondaryFill}
      />
    </SvgIcon>
  );
}