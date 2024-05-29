// ----------------------------------------------------------------------

export default function Switch({ theme }) {
  return {
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },

      styleOverrides: {
        root: {
          width: 53,
          height: 35,
          '&:hover': {
            '& .MuiSwitch-thumb': {
              backgroundColor: theme.palette.grey[1600],
            },
          },
        },
        thumb: {
          height: 16,
          width: 16,
          background: theme.palette.grey[0],
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2)',
          borderRadius: 8,
        },
        track: {
          width: 26,
          height: 12,
          opacity: 1,
          backgroundColor: theme.palette.grey[1600],
        },
        switchBase: {
          left: 2,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            '&:hover': {
              backgroundColor: 'transparent',
              '& .MuiSwitch-thumb': {
                backgroundColor: `${theme.palette.blue[200]}`,
              },
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: `${theme.palette.primary.main}`,
              boxShadow:
                '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2);',
            },
            '&+.MuiSwitch-track': {
              opacity: 1,
              backgroundColor: `${theme.palette.blue[100]}`,
            },
          },
          '&.Mui-disabled': {
            color: theme.palette.grey[1500],
            '& .MuiSwitch-thumb': {
              backgroundColor: `${theme.palette.grey[1000]}`,
            },
            '& +.MuiSwitch-track': {
              opacity: 1,
              backgroundColor: `${theme.palette.grey[1000]}`,
            },
          },
        },
      },
    },
  };
}
