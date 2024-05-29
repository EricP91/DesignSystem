import { Breakpoints, BreakpointsOptions, Components, CssBaseline, Direction, Transitions } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';
import React, { ReactNode, useMemo } from 'react';
import { ZIndex } from '@mui/material/styles/zIndex';
import { Mixins } from '@mui/material/styles/createMixins';
import { Spacing } from '@mui/system';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import borderRadius, { ShapeOptions } from './borderRadius';
import breakpointsX from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette, { AdditionalPaletteOptions, PaletteOptions, PaletteOptionsIndexed } from './palette';
import typography, { MTypography } from './typography';
import shadows, { MShadows } from './shadows';

declare module '@mui/material/styles' {
  interface Theme {
    shape: ShapeOptions;
    palette: PaletteOptions;
    shadows: MShadows;
    typography: MTypography;
  }
}

export interface MTheme {
  shape: ShapeOptions;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  components?: Components;
  palette: PaletteOptions & PaletteOptionsIndexed & AdditionalPaletteOptions;
  shadows: MShadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: MTypography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

export interface MThemeOptions {
  palette: PaletteOptions;
  typography: TypographyOptions;
  shape: ShapeOptions;
  breakpoints: Partial<BreakpointsOptions>;
  components: Components;
  spacing: Spacing;
  transitions: Transitions;
}

export interface ThemeConfigProps {
  children: ReactNode;
  isLightMode: boolean;
}

export interface MUIStyled {
  theme?: MTheme;
}

export function ThemeConfig({ children, isLightMode }: ThemeConfigProps): JSX.Element {
  const themeOptions: Partial<MThemeOptions> = useMemo(() => {
    const options = {
      palette: palette[isLightMode ? 'light' : 'dark'],
      shadows: shadows[isLightMode ? 'light' : 'dark'],
      typography,
      shape: borderRadius,
      breakpoints: breakpointsX,
      components: componentsOverride({
        theme: {
          palette: palette[isLightMode ? 'light' : 'dark'],
          shadows: shadows[isLightMode ? 'light' : 'dark'],
          typography,
          shape: borderRadius,
        },
      }),
    };
    if (!isLightMode) options.palette.mode = 'dark';
    return options;
  }, [isLightMode]);

  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
