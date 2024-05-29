import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function PrintIcon({ fill = 'white', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon sx={{ width: 24, height: 24 }} viewBox="0 0 24 24" {...props}>
      <path
        d="M16.993 7.05289H7.00696V5.00084C7.00696 4.72703 7.10309 4.49177 7.29535 4.29506C7.48763 4.09835 7.72148 4 7.9969 4H15.9907C16.2651 4 16.5008 4.09835 16.6977 4.29506C16.8946 4.49177 16.993 4.72703 16.993 5.00084V7.05289ZM16.3125 12.0445C16.5641 12.0445 16.7724 11.9638 16.9374 11.8025C17.1024 11.6412 17.1849 11.4323 17.1849 11.1758C17.1849 10.924 17.104 10.7111 16.9424 10.5369C16.7808 10.3628 16.5697 10.2757 16.3094 10.2757C16.0598 10.2757 15.8536 10.3623 15.6907 10.5353C15.5277 10.7084 15.4463 10.923 15.4463 11.179C15.4463 11.4286 15.5277 11.6353 15.6907 11.799C15.8536 11.9626 16.0609 12.0445 16.3125 12.0445ZM8.97447 17.1054H15.0132V14.9526H8.97447V17.1054ZM8.97447 19C8.4402 19 7.97872 18.8067 7.59002 18.42C7.20132 18.0334 7.00696 17.5595 7.00696 16.9983V15.4373H4.98994C4.71451 15.4373 4.48066 15.3395 4.28839 15.1439C4.09613 14.9483 4 14.7104 4 14.4301V10.3512C4 9.6156 4.24723 8.98898 4.74168 8.47136C5.23613 7.95373 5.84067 7.69492 6.55529 7.69492H17.4323C18.1611 7.69492 18.7712 7.95373 19.2627 8.47136C19.7542 8.98898 20 9.6156 20 10.3512V14.4301C20 14.7104 19.9015 14.9483 19.7046 15.1439C19.5077 15.3395 19.2721 15.4373 18.9977 15.4373H16.993V16.9983C16.993 17.5595 16.7975 18.0334 16.4063 18.42C16.0152 18.8067 15.5508 19 15.0132 19H8.97447Z"
        fill={fill}
      />
    </SvgIcon>
  );
}