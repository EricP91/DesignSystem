import { withStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    body: {
      width: '100%',
      height: '100%',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: 8,
        height: 6,
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb': {
        border: 'none',
        borderRadius: 8,
        backgroundColor: theme.palette.ui.mutedDoubleHover,
      },
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': { margin: 0, WebkitAppearance: 'none' },
        '&::-webkit-inner-spin-button': { margin: 0, WebkitAppearance: 'none' },
      },
    },
    textarea: {
      '&::-webkit-input-placeholder': { color: theme.palette.text.disabled },
      '&::-moz-placeholder': { opacity: 1, color: theme.palette.text.disabled },
      '&:-ms-input-placeholder': { color: theme.palette.text.disabled },
      '&::placeholder': { color: theme.palette.text.disabled },
    },
    a: {
      color: theme.palette.primary.main,
    },
    img: {
      display: 'block',
      maxWidth: '100%',
    },

    // Lazy Load Img
    '.blur-up': {
      WebkitFilter: 'blur(5px)',
      filter: 'blur(5px)',
      transition: 'filter 400ms, -webkit-filter 400ms',
    },
    '.blur-up.lazyloaded ': {
      WebkitFilter: 'blur(0)',
      filter: 'blur(0)',
    },
    '.SRLStage': {
      '& button.SRLNextButton': {
        right: theme.spacing(3),
      },
      '& button.SRLPrevButton': {
        left: theme.spacing(3),
      },
      '& .SRLControls': {
        top: theme.spacing(3),
        right: theme.spacing(3),
      },
      '& button': {
        borderRadius: theme.spacing(1),
        '& div': {
          width: 'initial',
          '& svg': {
            width: 14,
          },
        },
      },
    },
  },
}))(() => null);

export default GlobalStyles;
