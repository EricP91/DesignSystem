import React from 'react';
import { FormControlLabel, FormControlLabelProps, Typography } from '@mui/material';

export type MFormControlLabelProps = FormControlLabelProps;

const MFormControlLabel = ({ label, disabled, ...props }: MFormControlLabelProps): JSX.Element => {
  const isLabelNumberOrString = typeof label === 'string' || typeof label === 'number';

  return (
    <FormControlLabel
      label={isLabelNumberOrString ? <Typography variant="text">{label}</Typography> : label}
      {...props}
    />
  );
};

export default MFormControlLabel;
