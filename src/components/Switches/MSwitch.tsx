import React from 'react';
import Switch from '@mui/material/Switch';
import { SwitchProps } from '@mui/material';

export type MSwitchProps = SwitchProps;

function MSwitch({ ...props }: MSwitchProps): JSX.Element {
  return <Switch disableRipple {...props} />;
}

export default MSwitch;
