import React from 'react';

import { SvgIcon } from '@mui/material';
import { SvgIconProps } from './types';

export function DeviceEventIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8C10 10.2094 11.7906 12 14 12C16.2094 12 18 10.2094 18 8C18 5.79063 16.2094 4 14 4C11.7906 4 10 5.79063 10 8ZM13.7922 8.29844C13.6875 8.24219 13.625 8.125 13.625 8L13.6109 5.875C13.6109 5.66719 13.7922 5.5 13.9859 5.5C14.2078 5.5 14.375 5.66719 14.375 5.875V7.8L15.7078 8.6875C15.8797 8.80312 15.9266 9.03594 15.7984 9.20781C15.6969 9.37969 15.4641 9.42656 15.2922 9.29844L13.7922 8.29844ZM13 15.8333V12.706C12.9996 12.6462 13.0351 12.591 13.0924 12.5623C13.1496 12.5336 13.2195 12.5361 13.2742 12.5687C13.6102 12.7548 13.966 12.9091 14.336 13.0293C14.4069 13.0516 14.4545 13.1127 14.4545 13.1813V17.8333C14.4545 18.2754 14.263 18.6993 13.922 19.0118C13.581 19.3244 13.1186 19.5 12.6364 19.5H6.81818C6.33597 19.5 5.87351 19.3244 5.53253 19.0118C5.19156 18.6993 5 18.2754 5 17.8333V7.83335C5 6.91288 5.81403 6.16669 6.81818 6.16669H9.34504C9.40253 6.16667 9.4565 6.19208 9.48997 6.23493C9.52344 6.27778 9.5323 6.3328 9.51376 6.38269C9.36781 6.80254 9.27961 7.23746 9.25122 7.67735C9.24695 7.76442 9.16885 7.83308 9.07376 7.83335H7.18182C6.78016 7.83335 6.45455 8.13183 6.45455 8.50002V15.8333C6.45455 16.2015 6.78016 16.5 7.18182 16.5H12.2727C12.6744 16.5 13 16.2015 13 15.8333Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
