import React, { HtmlHTMLAttributes } from 'react';
import { styled } from '@mui/material';

type Size = 'narrow' | 'wide';

export interface MLabelProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  backgroundColor: string;
  icon?: JSX.Element;
  size?: Size;
}

const sizeMapping: Record<Size, number> = {
  narrow: 1,
  wide: 2,
};

const IconStyled = styled('span')(({ theme }) => ({
  padding: theme.spacing(0, 0.5, 0, 0),
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LabelStyled = styled('span', {
  shouldForwardProp: (propName: string) => !['backgroundColor'].includes(propName),
})<MLabelProps>(({ theme, color, size = 'narrow', backgroundColor }) => ({
  height: 24,
  minWidth: 20,
  borderRadius: 4,
  cursor: 'default',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  justifyContent: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  backgroundColor,
  padding: theme.spacing(0, sizeMapping[size]),
  color: color || theme.palette.ui.light,
  ...theme.typography.textMedium,
}));

function MLabel({ backgroundColor, children, size = 'narrow', icon, ...other }: MLabelProps): JSX.Element {
  return (
    <LabelStyled size={size} backgroundColor={backgroundColor} {...other}>
      {icon && <IconStyled>{icon}</IconStyled>}
      {children}
    </LabelStyled>
  );
}

export default MLabel;
