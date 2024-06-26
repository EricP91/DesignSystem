import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const TransactionInformationIcon = ({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element => (
  <SvgIcon {...props}>
    <path
      d="M5.17647 19C4.86275 19 4.58824 18.8833 4.35294 18.65C4.11765 18.4167 4 18.1444 4 17.8333V6.16667C4 5.85556 4.11765 5.58333 4.35294 5.35C4.58824 5.11667 4.86275 5 5.17647 5H18.8235C19.1373 5 19.4118 5.11667 19.6471 5.35C19.8824 5.58333 20 5.85556 20 6.16667V17.8333C20 18.1444 19.8824 18.4167 19.6471 18.65C19.4118 18.8833 19.1373 19 18.8235 19H5.17647ZM9.64706 15.8889C9.86928 15.8889 10.0556 15.8144 10.2059 15.6653C10.3562 15.5162 10.4314 15.3315 10.4314 15.1111C10.4314 14.8907 10.3562 14.706 10.2059 14.5569C10.0556 14.4079 9.86928 14.3333 9.64706 14.3333H7.29412C7.0719 14.3333 6.88562 14.4079 6.73529 14.5569C6.58497 14.706 6.5098 14.8907 6.5098 15.1111C6.5098 15.3315 6.58497 15.5162 6.73529 15.6653C6.88562 15.8144 7.0719 15.8889 7.29412 15.8889H9.64706ZM14 12.1361L13.4314 11.5722C13.2745 11.4167 13.0915 11.3421 12.8824 11.3486C12.6732 11.3551 12.4902 11.4361 12.3333 11.5917C12.1895 11.7472 12.1144 11.9287 12.1078 12.1361C12.1013 12.3435 12.1765 12.525 12.3333 12.6806L13.5882 13.925C13.7059 14.0417 13.8431 14.1 14 14.1C14.1569 14.1 14.2941 14.0417 14.4118 13.925L17.3333 11.0278C17.4902 10.8722 17.5686 10.6907 17.5686 10.4833C17.5686 10.2759 17.4902 10.0944 17.3333 9.93889C17.1765 9.78333 16.9902 9.70556 16.7745 9.70556C16.5588 9.70556 16.3726 9.78333 16.2157 9.93889L14 12.1361ZM9.64706 12.7778C9.86928 12.7778 10.0556 12.7032 10.2059 12.5542C10.3562 12.4051 10.4314 12.2204 10.4314 12C10.4314 11.7796 10.3562 11.5949 10.2059 11.4458C10.0556 11.2968 9.86928 11.2222 9.64706 11.2222H7.29412C7.0719 11.2222 6.88562 11.2968 6.73529 11.4458C6.58497 11.5949 6.5098 11.7796 6.5098 12C6.5098 12.2204 6.58497 12.4051 6.73529 12.5542C6.88562 12.7032 7.0719 12.7778 7.29412 12.7778H9.64706ZM9.64706 9.66667C9.86928 9.66667 10.0556 9.59213 10.2059 9.44306C10.3562 9.29398 10.4314 9.10926 10.4314 8.88889C10.4314 8.66852 10.3562 8.4838 10.2059 8.33472C10.0556 8.18565 9.86928 8.11111 9.64706 8.11111H7.29412C7.0719 8.11111 6.88562 8.18565 6.73529 8.33472C6.58497 8.4838 6.5098 8.66852 6.5098 8.88889C6.5098 9.10926 6.58497 9.29398 6.73529 9.44306C6.88562 9.59213 7.0719 9.66667 7.29412 9.66667H9.64706Z"
      fill={fill}
    />
  </SvgIcon>
);
