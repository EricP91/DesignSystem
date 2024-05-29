// ----------------------------------------------------------------------

import { alpha } from '@mui/material';

function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export interface PaletteColorOptions {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

// Setup Colors
const PRIMARY = {
  lighter: '#C9ECFC',
  light: '#5FB4EF',
  main: '#0064CC',
  dark: '#003992',
  darker: '#001C61',
  hover: '#3383D6',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#f3f3f3',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#DDFBDC',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FCE3D7',
  light: '#FFA48D',
  medium: '#FE6F5E',
  main: '#D03639',
  dark: '#B72136',
  darker: '#7A0C2E',
};

export interface ColorOptions {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
  1100: string;
  1200: string;
  1300: string;
  ['0_12']: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_22: string;
  500_24: string;
  500_32: string;
  500_40: string;
  500_48: string;
  500_56: string;
  500_80: string;
  1300_45: string;
  1400: string;
  1500: string;
  1600: string;
  1700: string;
  1800: string;
  1900: string;
  2000: string;
  1800_12: string;
  2100: string;
  2100_20: string;
}

const ui = {
  brandDark: '#121E28',
  brandActive: '#0152A6',
  brand: '#0064CC',
  brandHover: '#3383D6',
  brandLight: '#D1E4F9',
  brandLightest: '#E8F2FF',
  positive: '#458922',
  positiveLight: '#44AF69',
  positiveLightest: '#ECF7F0',
  negativeSoft: '#FAC5C5',
  negativeLight: '#EB1633',
  negative: '#D30813',
  negativeHeavy: '#A7081E',
  warningSoft: '#FFECB2',
  warningLightest: '#FFAE09',
  warningLight: '#FF891A',
  warning: '#E75300',
  warningHeavy: '#FF4A40',
  mutedHeavy: '#1E2C3F',
  mutedDark: '#5E6974',
  mutedShady: '#8E9EAE',
  mutedLight: '#ADB9BF',
  mutedLightest: '#BDC3C8',
  mutedSoft: '#F1F4F6',
  mutedHover: '#E7ECF1',
  mutedDoubleHover: '#C5CCD6',
  light: '#FFFFFF',
};

const status = {
  negative: '#FFBCB3',
  negativeShady: '#F0C7A1',
  positive: '#CBF5C8',
  positiveSoft: '#FFD0E6',
  warning: '#FFEAC0',
  muted: '#D4D2D2',
};

const topic = {
  money: '#FDAE31',
  school: '#F8464E',
  family: '#1F7BF6',
  drugs: '#99AC2D',
  socialMedia: '#FE8153',
  sexual: '#EC3149',
  age: '#A04633',
  evidenceObstruction: '#20B979',
  meeting: '#8457DB',
  police: '#153187',
  picture: '#00A5E5',
  violence: '#DE2D18',
};

const chart = {
  chart1: '#44AF69',
  chart2: '#FFAE09',
  chart3: '#2A85E2',
  chart4: '#9B7EEF',
  chart5: '#7FDBDB',
  chart6: '#EC8BB3',
  chart7: '#F6C540',
  chart8: '#DBC17F',
  chart9: '#56626C',
};

const RED: Partial<ColorOptions> = {
  500: '#fe6f5e',
  600: '#E75300',
  700: '#FAC5C5',
  800: '#FF4A40',
  900: '#D30813',
  1000: '#BC6A6A',
  1100: '#A7081E',
};

const PURPLE: Partial<ColorOptions> = {
  100: '#C8A7E0',
  200: '#9466B6',
  300: '#66477C',
  400: '#66477C',
};

const BLUE: Partial<ColorOptions> = {
  100: '#E8F2FF',
  200: '#3383D6',
  300: '#D1E4F9',
  400: '#0152A6',
};

const ORANGE: Partial<ColorOptions> = {
  100: '#F3B87C',
  200: '#FC9A37',
  300: '#EB7700',
  400: '#CB6701',
  500: '#D96E01',
  600: '#F57C00',
  700: '#FF891A',
  800: '#FFECB2',
  900: '#FFAE09',
};

const GREEN: Partial<ColorOptions> = {
  100: '#ecf7f0',
  200: '#B0AD67',
  300: '#95DD98',
  400: '#43A047',
  500: '#2F702D',
  600: '#307434',
  700: '#388636',
  800: '#458922',
  900: '#227D54',
  1000: '#44AF69',
};

const GREY: ColorOptions = {
  0: '#FFFFFF',
  100: '#F1F8FA',
  200: '#F4F6F8',
  300: '#CDDCE6',
  400: '#B1C1CE',
  500: '#8E9EAE',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  1000: '#BDC3C8',
  1100: '#EAEAEA',
  1200: '#DBDBDB',
  1300: '#121E28',
  1400: '#868686',
  1500: '#5E6974',
  1600: '#E7ECF1',
  1700: '#1E2C3F',
  1800: '#D0D3D7',
  1900: '#F1F4F6',
  2000: '#ADB9BF',
  2100: '#919EAB',
  '0_12': alpha('#FFFFFF', 0.12),
  500_8: alpha('#8E9EAE', 0.08),
  500_12: alpha('#8E9EAE', 0.12),
  500_16: alpha('#8E9EAE', 0.16),
  500_22: alpha('#8E9EAE', 0.22),
  500_24: alpha('#8E9EAE', 0.24),
  500_32: alpha('#8E9EAE', 0.32),
  500_40: alpha('#8E9EAE', 0.4),
  500_48: alpha('#8E9EAE', 0.48),
  500_56: alpha('#8E9EAE', 0.56),
  500_80: alpha('#8E9EAE', 0.8),
  1300_45: alpha('#121E28', 0.45),
  1800_12: alpha('#D0D3D7', 0.12),
  2100_20: alpha('#919EAB', 0.2),
};

export interface PalleteGradientOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

const GRADIENTS: PalleteGradientOptions = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

interface PalleteTextOptions {
  primary: string;
  secondary: string;
  disabled: string;
}

interface PalleteBackgroundOptions {
  paper: string;
  default: string;
  neutral: string;
}

export interface PalleteActionOptions {
  active: string;
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
}

export interface PaletteOptions {
  mode: 'light' | 'dark';
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  info: PaletteColorOptions;
  success: PaletteColorOptions;
  warning: PaletteColorOptions;
  error: PaletteColorOptions;
  gradients: PalleteGradientOptions;
  text: PalleteTextOptions;
  background: PalleteBackgroundOptions;
  action: PalleteActionOptions;
  grey: ColorOptions | { [key: string]: string };
  red: ColorOptions | { [key: string]: string };
  purple: ColorOptions | { [key: string]: string };
  blue: ColorOptions | { [key: string]: string };
  orange: ColorOptions | { [key: string]: string };
  green: ColorOptions | { [key: string]: string };
  ui: Record<keyof typeof ui, string>;
  chart: Record<keyof typeof chart, string>;
  topic: Record<keyof typeof topic, string>;
  status: Record<keyof typeof status, string>;
  divider: string;
}

export interface AdditionalPaletteOptions {
  getContrastText: (color: string) => string;
  common: {
    white: string;
  };
}

export interface PaletteOptionsIndexed {
  [key: string]: PaletteColorOptions & PalleteActionOptions;
}

export interface PalleteThemeOptions {
  light: PaletteOptions;
  dark: PaletteOptions;
}

const palette: PalleteThemeOptions = {
  // LIGHT
  light: {
    mode: 'light',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff',
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff',
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff',
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800],
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800],
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff',
    },
    grey: GREY,
    red: RED,
    purple: PURPLE,
    blue: BLUE,
    orange: ORANGE,
    green: GREEN,
    gradients: GRADIENTS,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },

    divider: GREY[500_24],

    background: {
      paper: '#fff',
      default: '#fff',
      neutral: GREY[200],
    },

    action: {
      active: GREY[600],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
    ui,
    chart,
    topic,
    status,
  },

  // DARK
  dark: {
    mode: 'dark',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff',
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff',
    },
    info: {
      lighter: INFO.lighter,
      light: INFO.light,
      main: INFO.main,
      dark: INFO.dark,
      darker: INFO.darker,
      contrastText: '#fff',
    },
    success: {
      lighter: SUCCESS.lighter,
      light: SUCCESS.light,
      main: SUCCESS.main,
      dark: SUCCESS.dark,
      darker: SUCCESS.darker,
      contrastText: GREY[800],
    },
    warning: {
      lighter: WARNING.lighter,
      light: WARNING.light,
      main: WARNING.main,
      dark: WARNING.dark,
      darker: WARNING.darker,
      contrastText: GREY[800],
    },
    error: {
      lighter: ERROR.lighter,
      light: ERROR.light,
      main: ERROR.main,
      dark: ERROR.dark,
      darker: ERROR.darker,
      contrastText: '#fff',
    },

    grey: GREY,
    red: RED,
    purple: PURPLE,
    blue: BLUE,
    orange: ORANGE,
    green: GREEN,
    gradients: GRADIENTS,

    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },

    divider: GREY[500_24],

    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16],
    },

    action: {
      active: GREY[500],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
    ui,
    chart,
    topic,
    status,
  },
};

export default palette;
