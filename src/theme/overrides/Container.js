// ----------------------------------------------------------------------

export default function Container() {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            paddingRight: 40,
            paddingLeft: 40,
          },
        },
      },
    },
  };
}
