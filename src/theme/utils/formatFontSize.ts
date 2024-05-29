import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: Record<string, number>): Record<string, { fontSize: string }> {
  return {
    [breakpoints.up('sm')]: { fontSize: pxToRem(sm) },
    [breakpoints.up('md')]: { fontSize: pxToRem(md) },
    [breakpoints.up('lg')]: { fontSize: pxToRem(lg) },
  };
}
