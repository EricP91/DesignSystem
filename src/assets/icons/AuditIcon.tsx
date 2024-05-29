import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const AuditIcon = ({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element => (
  <SvgIcon {...props}>
    <path
      d="M14.7656 13.5971C13.9671 13.5971 13.3065 13.3371 12.7839 12.8173C12.2613 12.2974 12 11.6316 12 10.8197C12 10.0077 12.2619 9.3397 12.7856 8.81552C13.3093 8.29132 13.9721 8.02923 14.7739 8.02923C15.5701 8.02923 16.2314 8.29191 16.7579 8.81729C17.2845 9.34266 17.5477 10.0093 17.5477 10.8173C17.5477 11.6252 17.2837 12.2905 16.7555 12.8131C16.2274 13.3358 15.5641 13.5971 14.7656 13.5971ZM10.4724 19.3458C10.1943 19.3458 9.97069 19.2612 9.80151 19.092C9.63233 18.9229 9.54774 18.6938 9.54774 18.4047V17.6178C9.54774 17.2765 9.62779 16.9624 9.78788 16.6755C9.94799 16.3887 10.156 16.18 10.4121 16.0493C11.0285 15.6071 11.7145 15.2755 12.4702 15.0544C13.2259 14.8332 13.9913 14.7227 14.7665 14.7227C15.5254 14.7227 16.2792 14.8399 17.0278 15.0745C17.7764 15.309 18.4791 15.6339 19.1357 16.0493C19.379 16.2263 19.5839 16.4464 19.7503 16.7096C19.9168 16.9728 20 17.2754 20 17.6172V18.4045C20 18.6937 19.9089 18.9229 19.7266 19.092C19.5444 19.2612 19.3273 19.3458 19.0754 19.3458H10.4724ZM9.14573 13.9589H4.92462C4.66533 13.9589 4.4464 13.8727 4.26784 13.7004C4.08928 13.5281 4 13.3036 4 13.027C4 12.7638 4.08928 12.5451 4.26784 12.3709C4.4464 12.1967 4.66533 12.1096 4.92462 12.1096H9.14573C9.39196 12.1096 9.60762 12.1992 9.79272 12.3785C9.97781 12.5577 10.0704 12.7729 10.0704 13.024C10.0704 13.3073 9.97781 13.534 9.79272 13.7039C9.60762 13.8739 9.39196 13.9589 9.14573 13.9589ZM12.3819 6.48149H4.92462C4.66533 6.48149 4.4464 6.39064 4.26784 6.20893C4.08928 6.02723 4 5.81082 4 5.55968C4 5.2898 4.08928 5.0711 4.26784 4.9036C4.4464 4.7361 4.66533 4.65234 4.92462 4.65234H12.3819C12.6469 4.65234 12.8639 4.73727 13.0329 4.90712C13.2019 5.07698 13.2864 5.2935 13.2864 5.55669C13.2864 5.81988 13.2019 6.03981 13.0329 6.21648C12.8639 6.39315 12.6469 6.48149 12.3819 6.48149ZM10.8744 10.2001H4.92462C4.66533 10.2001 4.4464 10.1139 4.26784 9.94159C4.08928 9.76928 4 9.55152 4 9.28832C4 9.02514 4.08928 8.80645 4.26784 8.63224C4.4464 8.45804 4.66533 8.37094 4.92462 8.37094H11.5578C11.3836 8.63894 11.2347 8.92317 11.111 9.22362C10.9874 9.52406 10.9085 9.84954 10.8744 10.2001Z"
      fill={fill}
    />
  </SvgIcon>
);