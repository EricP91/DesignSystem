// ----------------------------------------------------------------------

export default function Popover({ theme }) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          marginTop: 5,
          boxShadow: theme.shadows[25].z12,
        },
      },
    },
  };
}
