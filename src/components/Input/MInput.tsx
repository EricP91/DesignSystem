import React from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export default function MInput(props: TextFieldProps): JSX.Element {
  return <TextField {...props} />;
}
