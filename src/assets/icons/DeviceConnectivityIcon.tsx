import React from 'react';

import { SvgIcon } from '@mui/material';
import { SvgIconProps } from './types';

export function DeviceConnectivityIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M12 13.206V16.3333C12 16.7015 11.6744 17 11.2727 17H6.18182C5.78016 17 5.45455 16.7015 5.45455 16.3333V9C5.45455 8.63181 5.78016 8.33333 6.18182 8.33333H8.288C8.38308 8.33306 8.46119 8.2644 8.46545 8.17733C8.49385 7.73744 8.58204 7.30252 8.728 6.88267C8.74654 6.83278 8.73768 6.77776 8.70421 6.73491C8.67073 6.69206 8.61677 6.66665 8.55927 6.66667H5.81818C4.81403 6.66667 4 7.41286 4 8.33333V18.3333C4 18.7753 4.19156 19.1993 4.53253 19.5118C4.87351 19.8244 5.33597 20 5.81818 20H11.6364C12.1186 20 12.581 19.8244 12.922 19.5118C13.263 19.1993 13.4545 18.7753 13.4545 18.3333V13.6813C13.4545 13.6126 13.4069 13.5516 13.336 13.5293C12.966 13.4091 12.6102 13.2548 12.2742 13.0687C12.2195 13.036 12.1496 13.0336 12.0924 13.0623C12.0351 13.091 11.9996 13.1462 12 13.206Z"
        fill={fill}
      />
      <path
        d="M19.1054 9.06667C18.9228 9.00919 18.7228 9.02059 18.5495 9.09837C18.3761 9.17615 18.2435 9.31392 18.181 9.48134C17.8288 10.4249 16.9448 11.1182 15.8733 11.2913C14.8019 11.4643 13.7126 11.0897 13.0298 10.3133L14.0013 9.40439C14.1049 9.30907 14.1359 9.16596 14.0797 9.04159C14.0236 8.91723 13.8914 8.83602 13.7445 8.83572L10.909 8.47801C10.7082 8.47801 10.5454 8.62724 10.5454 8.81134V11.7867C10.5454 11.9216 10.6341 12.0431 10.7701 12.0947C10.9061 12.1462 11.0626 12.1175 11.1665 12.022L12 11.2593C13.0401 12.3609 14.6433 12.8689 16.2035 12.5911C17.7637 12.3134 19.043 11.2924 19.5578 9.914C19.6205 9.74666 19.608 9.56332 19.5232 9.40439C19.4383 9.24545 19.288 9.12396 19.1054 9.06667Z"
        fill={fill}
      />
      <path
        d="M15.1613 4C13.2622 3.99958 11.5729 5.10578 10.9576 6.75266C10.8275 7.10115 11.0302 7.48037 11.4104 7.59966C11.7905 7.71896 12.2042 7.53315 12.3344 7.18466C12.6833 6.24334 13.5623 5.54994 14.6298 5.37395C15.6972 5.19796 16.7847 5.56714 17.4696 6.338L16.6499 7.22533C16.5463 7.32065 16.5153 7.46376 16.5714 7.58812C16.6276 7.71249 16.7598 7.7937 16.9066 7.79399L19.6362 8.12733C19.837 8.12733 19.9998 7.97809 19.9998 7.79399V4.82267C19.9998 4.68778 19.9111 4.56621 19.7751 4.51468C19.6391 4.46316 19.4826 4.49183 19.3787 4.58733L18.5002 5.39333C17.657 4.51112 16.4408 4.00362 15.1613 4Z"
        fill={fill}
      />
    </SvgIcon>
  );
}