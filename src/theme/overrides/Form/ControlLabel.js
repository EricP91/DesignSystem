// ----------------------------------------------------------------------

export default function ControlLabel({ theme }) {
  return {
    // FormControlLabel
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.palette.grey[1500],
          },
          marginLeft: 0,
          '& .MuiCheckbox-root': {
            padding: 6,
            marginRight: 4,
          },
        },
      },
    },

    // FormHelperText
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 8,
        },
      },
    },

    // FormLabel
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
        },
      },
    },
  };
}
