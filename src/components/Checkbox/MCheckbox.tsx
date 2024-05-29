import * as React from 'react';
import { CheckboxProps, Checkbox, styled, useTheme } from '@mui/material';

const CheckedIcon = ({ fill }: { fill: string }): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="4" fill={fill} />
    <path d="M6.42857 12L2.5 8.16123L3.60786 7.07869L6.42857 9.82726L12.3921 4L13.5 5.09021L6.42857 12Z" fill="white" />
  </svg>
);

const IndeterminateIcon = ({ fill }: { fill: string }): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" rx="4" fill={fill} />
    <rect x="2" y="7" width="12" height="2" fill="white" />
  </svg>
);

const IconStyled = styled('span')(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  border: `2px solid ${theme.palette.ui.mutedDark}`,
  borderRadius: theme.spacing(0.5),
  width: 16,
  height: 16,
  backgroundColor: theme.palette.ui.light,
  'input:hover ~ &': {
    backgroundColor: theme.palette.ui.mutedHover,
  },
  'input:focus ~ &': {
    outline: `1px solid ${theme.palette.ui.brandLight}`,
  },
  'input:disabled ~ &': {
    border: `2px solid ${theme.palette.ui.mutedShady}`,
  },
}));

const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(0.5),
}));

export type MCheckboxProps = CheckboxProps;

export default function MCheckbox({ disabled, ...props }: MCheckboxProps): JSX.Element {
  const theme = useTheme();
  const fill = disabled ? theme.palette.ui.mutedShady : theme.palette.ui.brand;
  return (
    <CheckboxStyled
      disableRipple
      color="default"
      icon={<IconStyled />}
      disabled={disabled}
      checkedIcon={<CheckedIcon fill={fill} />}
      indeterminateIcon={<IndeterminateIcon fill={fill} />}
      {...props}
    />
  );
}
