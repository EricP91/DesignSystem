import { alpha } from '@mui/material';

// ----------------------------------------------------------------------

export default function Button({ theme }) {
  return {
    MuiButton: {
      variants: [
        // Contained Button
        {
          props: {
            variant: 'contained',
            color: 'inherit',
          },
          style: {
            boxShadow: 'none',
            color: theme.palette.grey[800],
            backgroundColor: theme.palette.grey[300],
            '&:hover': {
              backgroundColor: theme.palette.grey[400],
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
        },

        // Outlined Button
        {
          props: {
            color: 'inherit',
            variant: 'outlined',
          },
          style: {
            border: `1px solid ${theme.palette.grey[500_32]}`,
            '&:hover': { backgroundColor: theme.palette.grey[500_8] },
          },
        },
        {
          props: {
            color: 'primary',
            variant: 'outlined',
          },
          style: {
            backgroundColor: 'white',
            border: `1px solid ${theme.palette.primary.main}`,
            '&:hover': { backgroundColor: theme.palette.grey[1600] },
            '&:active': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              '& svg > path': {
                fill: theme.palette.primary.contrastText,
              },
            },
            '&.Mui-disabled': {
              '& svg > path': {
                fill: theme.palette.grey[500],
              },
            },
          },
        },

        // Text Button
        {
          props: { variant: 'text', color: 'inherit' },
          style: {
            '&:hover': {
              backgroundColor: theme.palette.grey[500_8],
            },
          },
        },

        // Size
        {
          props: { size: 'large' },
          style: { height: 48 },
        },
        {
          props: { size: 'medium' },
          style: { minWidth: 80 },
        },
        {
          props: { size: 'small' },
          style: { minWidth: 80 },
        },
      ],

      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          border: `solid 1px ${alpha(theme.palette.primary.main, 0.48)}`,
        },
      },
    },
  };
}
