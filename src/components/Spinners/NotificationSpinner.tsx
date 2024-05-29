import { makeStyles } from '@mui/styles';
import { Box, SnackbarContent, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import { MTheme } from '../../theme';
import MButton from '../Button/MButton';
import InlineSpinner from './InlineSpinner';

const useStyles = makeStyles((theme: MTheme) => ({
  loadingIndicator: {
    display: 'inline-grid',
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[19],
    borderRadius: theme.shape.borderRadiusMd,
    height: 64,
    '&.MuiSnackbarContent-root': {
      color: 'inherit',
      padding: theme.spacing(0, 1.5),
    },
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  loadingText: {
    margin: theme.spacing(0, 1.25, 0, 0),
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  actionButton: {
    marginLeft: 'auto',
  },
  box: {
    marginRight: theme.spacing(1.5),
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(24, 144, 255)',
    backgroundColor: 'rgba(24, 144, 255, 0.16)',
  },
}));

export interface InProgressNotificationProps {
  loadingText?: string;
  actionText?: string;
  onActionClick?: () => void;
  showButton?: boolean;
}

export const NotificationSpinner = forwardRef<HTMLDivElement, InProgressNotificationProps>(
  ({ loadingText, actionText = 'Cancel', onActionClick, showButton = true }, ref) => {
    const classes = useStyles();
    return (
      <SnackbarContent
        ref={ref}
        className={classes.loadingIndicator}
        message={
          <div className={classes.message}>
            <Box className={classes.box} data-testid="notification-spinner">
              <InlineSpinner spinnerSize={18} />
            </Box>
            <Typography className={classes.loadingText} variant="body2" data-testid="notification-text">
              {loadingText}
            </Typography>
            {onActionClick && showButton ? (
              <MButton
                onClick={onActionClick}
                className={classes.actionButton}
                color="primary"
                variant="text"
                data-testid="notification-button"
              >
                {actionText}
              </MButton>
            ) : null}
          </div>
        }
      />
    );
  }
);
