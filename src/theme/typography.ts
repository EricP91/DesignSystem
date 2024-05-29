import {
  FontStyle,
  FontStyleOptions,
  TypographyStyle,
  TypographyStyleOptions,
  TypographyUtils,
} from '@mui/material/styles/createTypography';
import { pxToRem, responsiveFontSizes } from './utils/formatFontSize';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Roboto, sans-serif';
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    text: true;
    small: true;
    tall: true;
    smallMedium: true;
    smallBold: true;
    xSmallBold: true;
    italic: true;
    italic2: true;
    largeMedium: true;
    xLargeMedium: true;
    largeBold: true;
    xLargeBold: true;
    xxLargeBold: true;
    xxxLargeBold: true;
    textMedium: true;
    textSlim: true;
  }
}

export type MVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'caption'
  | 'button'
  | 'overline'
  | 'italic'
  | 'italic2'
  | 'xSmallBold'
  | 'small'
  | 'tall'
  | 'smallBold'
  | 'text'
  | 'textBold'
  | 'largeBold'
  | 'largeMedium'
  | 'xLargeMedium'
  | 'xLargeBold'
  | 'xxLargeBold'
  | 'xxxLargeBold'
  | 'textMedium'
  | 'textSlim'
  | 'smallMedium';

type MTypographyOptions = Partial<Record<MVariant, TypographyStyleOptions> & FontStyleOptions>;

export interface MTypography extends Record<MVariant, TypographyStyle>, FontStyle, TypographyUtils {}

const Typography: MTypographyOptions = {
  fontFamily: FONT_PRIMARY,

  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 24, lg: 24 }),
  },
  h3: {
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    lineHeight: 22 / 14,
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: 22 / 14,
  },
  body3: {
    fontWeight: 500,
    fontSize: pxToRem(14),
    lineHeight: 22 / 14,
  },
  body4: {
    fontWeight: 700,
    fontSize: pxToRem(16),
  },
  body5: {
    fontWeight: 500,
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
  },
  caption: {
    fontWeight: 500,
    fontSize: pxToRem(12),
    lineHeight: 1.5,
  },
  italic: {
    fontWeight: 400,
    fontStyle: 'italic',
    fontSize: pxToRem(12),
    lineHeight: 2,
  },
  italic2: {
    fontWeight: 500,
    fontStyle: 'italic',
    fontSize: pxToRem(14),
    lineHeight: 2,
  },
  overline: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'inherit',
  },
  xSmallBold: {
    fontWeight: 700,
    lineHeight: 16 / 10,
    fontSize: pxToRem(10),
  },
  smallBold: {
    fontWeight: 700,
    lineHeight: 16 / 12,
    fontSize: pxToRem(12),
  },
  text: {
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  textBold: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  largeMedium: {
    fontWeight: 500,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
  },
  xLargeMedium: {
    fontWeight: 500,
    lineHeight: 24 / 18,
    fontSize: pxToRem(18),
  },
  largeBold: {
    fontWeight: 700,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
  },
  xLargeBold: {
    fontWeight: 700,
    lineHeight: 24 / 18,
    fontSize: pxToRem(18),
  },
  xxLargeBold: {
    fontWeight: 700,
    lineHeight: 32 / 24,
    fontSize: pxToRem(24),
  },
  xxxLargeBold: {
    fontWeight: 700,
    lineHeight: 32 / 28,
    fontSize: pxToRem(28),
  },
  textMedium: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  textSlim: {
    fontWeight: 300,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
  smallMedium: {
    fontWeight: 500,
    lineHeight: 24 / 12,
    fontSize: pxToRem(12),
  },
  small: {
    fontWeight: 400,
    lineHeight: 24 / 12,
    fontSize: pxToRem(12),
  },
  tall: {
    fontWeight: 400,
    lineHeight: 24 / 18,
    fontSize: pxToRem(18),
  },
};

export default Typography;
