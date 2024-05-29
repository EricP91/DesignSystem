import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const AddItemIcon = ({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6713 20C12.6518 19.175 12 17.9136 12 16.5C12 14.1837 13.75 12.2762 16 12.0275V5.5C16 4.67188 15.3281 4 14.5 4H5.5C4.67188 4 4 4.67188 4 5.5V18C4 19.1046 4.89543 20 6 20H13.6713ZM5.9 6.2C5.73431 5.97909 5.42091 5.93431 5.2 6.1C4.97909 6.26569 4.93431 6.57909 5.1 6.8L6 8C6.47214 8.62951 7.21311 9 8 9H12C12.7869 9 13.5279 8.62951 14 8L14.9 6.8C15.0657 6.57909 15.0209 6.26569 14.8 6.1C14.5791 5.93431 14.2657 5.97909 14.1 6.2L13.2 7.4C12.9167 7.77771 12.4721 8 12 8H8C7.52786 8 7.08328 7.77771 6.8 7.4L5.9 6.2ZM11 12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12Z"
      fill={fill}
    />

    <path
      d="M16.5 20C16.3435 20 16.2114 19.9462 16.1037 19.8385C15.996 19.7308 15.9422 19.5987 15.9422 19.4422V17.0578H13.5578C13.4013 17.0578 13.2692 17.004 13.1615 16.8963C13.0538 16.7886 13 16.6565 13 16.5C13 16.3435 13.0538 16.2114 13.1615 16.1037C13.2692 15.996 13.4013 15.9422 13.5578 15.9422H15.9422V13.5578C15.9422 13.4013 15.996 13.2692 16.1037 13.1615C16.2114 13.0538 16.3435 13 16.5 13C16.6565 13 16.7886 13.0538 16.8963 13.1615C17.004 13.2692 17.0578 13.4013 17.0578 13.5578V15.9422H19.4422C19.5987 15.9422 19.7308 15.996 19.8385 16.1037C19.9462 16.2114 20 16.3435 20 16.5C20 16.6565 19.9462 16.7886 19.8385 16.8963C19.7308 17.004 19.5987 17.0578 19.4422 17.0578H17.0578V19.4422C17.0578 19.5987 17.004 19.7308 16.8963 19.8385C16.7886 19.9462 16.6565 20 16.5 20Z"
      fill={fill}
    />
  </SvgIcon>
);
