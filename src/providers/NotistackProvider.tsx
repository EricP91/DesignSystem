import React from 'react';
import { SnackbarOrigin, SnackbarProvider } from 'notistack';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../theme';

const useStyles = makeStyles((theme: MTheme) => {
  const isLight = theme.palette.mode === 'light';

  const createStyle = (): Record<string, unknown> => ({
    color: `${theme.palette.grey[isLight ? 800 : 0]} !important`,
  });

  return {
    root: {
      '& .SnackbarItem-contentRoot': {
        boxShadow: theme.shadows[25].z8,
        borderRadius: 8,
        color: theme.palette.grey[isLight ? 0 : 800],
        maxWidth: 490,
        minWidth: 100,
        padding: theme.spacing(0.5, 2, 0.5, 1),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      '& .SnackbarItem-action': {
        paddingTop: theme.spacing(1.5),
        alignSelf: 'baseline',
        '& svg': {
          width: 20,
          height: 20,
          opacity: 0.48,
          '&:hover': { opacity: 1 },
        },
      },
      '& .SnackbarItem-message': {
        maxWidth: `calc(100% - 30px - ${theme.spacing(1)})`,
        padding: 0,
        flex: 1,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    icon: {
      paddingRight: theme.spacing(1),
      marginRight: 0,
    },
    info: {
      ...createStyle(),
      backgroundColor: `${theme.palette.blue[100]} !important`,
    },
    success: { ...createStyle(), backgroundColor: `${theme.palette.green[100]} !important` },
    warning: { ...createStyle(), backgroundColor: `${theme.palette.orange[800]} !important` },
    error: { ...createStyle(), backgroundColor: `${theme.palette.red[700]} !important` },
  };
});

// ----------------------------------------------------------------------

interface NotistackProviderProps {
  children: React.ReactNode;
  maxSnack?: number;
  autoHideDuration?: number;
  snackbarOrigin?: SnackbarOrigin;
}

interface NotistackClasses {
  root: string;
  variantInfo: string;
  variantSuccess: string;
  variantWarning: string;
  variantError: string;
}

function NotistackProvider({
  children,
  maxSnack = 5,
  autoHideDuration = 8000,
  snackbarOrigin = { vertical: 'bottom', horizontal: 'right' },
}: NotistackProviderProps): JSX.Element {
  const classes = useStyles();
  const snackProviderClasses: NotistackClasses = {
    root: classes.root,
    variantInfo: classes.info,
    variantSuccess: classes.success,
    variantWarning: classes.warning,
    variantError: classes.error,
  };

  return (
    <SnackbarProvider
      maxSnack={maxSnack}
      preventDuplicate
      autoHideDuration={autoHideDuration}
      anchorOrigin={snackbarOrigin}
      hideIconVariant
      classes={snackProviderClasses}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotistackProvider;
