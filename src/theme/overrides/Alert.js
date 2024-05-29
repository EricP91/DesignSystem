import React from 'react';
import { Icon } from '@iconify/react';
import alertCircleFill from '@iconify-icons/eva/alert-circle-fill';
import alertTriangleFill from '@iconify-icons/eva/alert-triangle-fill';
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';

// ----------------------------------------------------------------------

export default function Alert({ theme }) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color) => ({
    height: 38,
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[1300],
    backgroundColor: theme.palette[color].lighter,
    ...theme.typography.caption,
  });

  const filledStyle = (color) => ({
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    border: `solid 1px ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <ErrorIcon />,
          info: <Icon icon={alertCircleFill} />,
          success: <Icon icon={checkmarkCircle2Fill} />,
          warning: <Icon icon={alertTriangleFill} />,
        },
      },

      styleOverrides: {
        icon: {
          marginRight: 5,
        },
        message: {
          '& .MuiAlertTitle-root': { marginBottom: 4 },
        },
        action: {
          '& button:not(:first-child)': { marginLeft: 8 },
        },
        // Standard
        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        // filled
        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        // Outlined
        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error'),
      },
    },
  };
}
