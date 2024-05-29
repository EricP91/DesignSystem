// ----------------------------------------------------------------------

export default function Avatar({ theme }) {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: 14,
          backgroundColor: theme.palette.grey[500],
        },
      },
    },
  };
}
