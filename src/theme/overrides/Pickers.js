// ----------------------------------------------------------------------

export default function Pickers({ theme }) {
  return {
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[25].z24,
          borderRadius: theme.shape.borderRadiusMd,
        },
      },
    },

    MuiPickersModalDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[25].z24,
          borderRadius: theme.shape.borderRadiusMd,
        },
        action: { padding: '0 16px 16px' },
      },
    },

    // Toolbar
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          '& > *': { color: theme.palette.primary.contrastText },
          '& > span': { opacity: 0.48 },
          backgroundColor: theme.palette.primary.main,
        },
        dateTitleContainer: {
          justifyContent: 'center',
        },
      },
    },

    MuiPickersToolbarText: {
      styleOverrides: {
        root: {
          opacity: 0.48,
          color: theme.palette.primary.contrastText,
          '&.Mui-selected': {
            opacity: 1,
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },

    MuiPickersStaticWrapper: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[25].z24,
          borderRadius: theme.shape.borderRadiusMd,
        },
      },
    },

    MuiDateRangePickerDay: {
      styleOverrides: {
        dayInsideRangeInterval: {
          '&.MuiButtonBase-root': {
            borderRadius: 0,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.grey[200],
            '&.MuiPickersDay-today:not(.Mui-selected)': {
              borderRadius: '50%',
            },
          },
        },
        rangeIntervalPreview: {
          border: '2px solid white',
          borderRadius: '50%',
          '& .Mui-selected': {
            borderRadius: '50%',
          },
        },
        dayOutsideRangeInterval: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderRadius: '50%',
          },
          '&.MuiPickersDay-today:not(.Mui-selected)': {
            borderRadius: '50%',
          },
        },
        rangeIntervalDayHighlight: {
          backgroundColor: 'inherit',
        },
      },
    },

    MuiPickersDesktopDateRangeCalendar: {
      styleOverrides: {
        rangeCalendarContainer: {
          '&:not(:last-child)': {
            borderRight: `solid 1px ${theme.palette.grey[500_32]}`,
          },
        },
      },
    },

    MuiDateTimePickerTabs: {
      styleOverrides: {
        modeDesktop: {
          overflow: 'hidden',
          borderRadius: theme.shape.borderRadiusMd,
          '& .MuiTabs-indicator': { display: 'none' },
        },
        tabs: {
          backgroundColor: theme.palette.primary.main,
          '& button': {
            margin: 0,
            opacity: 0.48,
            color: '#FFF',
            borderRadius: 0,
          },
          '& .Mui-selected': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      },
    },

    MuiClock: {
      styleOverrides: {
        clock: {
          marginTop: 40,
          marginBottom: 40,
          backgroundColor: theme.palette.grey[500_8],
        },
        amButton: {
          backgroundColor: theme.palette.primary.light,
        },
        pmButton: {
          backgroundColor: theme.palette.primary.light,
        },
        meridiemButtonSelected: {
          color: '#FFF',
          backgroundColor: theme.palette.primary.darker,
        },
      },
    },
  };
}
