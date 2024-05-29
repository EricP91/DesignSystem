// ----------------------------------------------------------------------

export default function Tooltip({ theme }) {
  const isLight = theme.palette.mode === 'light';
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          '@media (min-width: 600px)': {
            marginTop: 8,
            marginBottom: 8,
          },
          backgroundColor: theme.palette.grey[isLight ? 800 : 700],
          borderRadius: theme.shape.borderRadiusXs,
        },
        arrow: {
          color: theme.palette.grey[isLight ? 800 : 700],
          '&:before': {
            borderRadius: 2,
          },
        },
      },
    },
  };
}
