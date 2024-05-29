import React from 'react';
import closeFill from '@iconify-icons/eva/close-fill';
import { Icon } from '@iconify/react';
import { AlertColor, IconButton } from '@mui/material';
import { OptionsObject, SnackbarKey, SnackbarMessage, SnackbarOrigin, VariantType } from 'notistack';
import { MAlert } from '../Alert';
import ReadMoreOrLessText from '../Text/ReadMoreOrLessText';
import MButton from '../Button/MButton';

export interface SnackBar {
  message: string | JSX.Element;
  variant: VariantType;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  persist?: boolean;
  preventDuplicate?: boolean;
  key?: string;
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
  closeSnackbar: (key?: SnackbarKey) => void;
  maxLetters?: number;
  messageDataTestId?: string;
  actionDataTestId?: string;
  iconTestId?: string;
  actionText?: string;
  onAction?: (key: SnackbarKey) => void;
}

const showSnackbar = ({
  message,
  variant = 'info',
  enqueueSnackbar,
  closeSnackbar,
  key,
  anchorOrigin,
  autoHideDuration = 8000,
  persist = false,
  preventDuplicate = false,
  maxLetters = 45,
  messageDataTestId = 'snack-bar-message-text',
  actionDataTestId = 'snack-bar-action-button',
  iconTestId = 'notification-message-icon',
  actionText,
  onAction,
}: SnackBar): SnackbarKey =>
  enqueueSnackbar(
    <MAlert severity={variant as AlertColor}>
      <ReadMoreOrLessText text={message as string} maxLetters={maxLetters} dataTestId={messageDataTestId} />
    </MAlert>,
    {
      variant,
      anchorOrigin,
      autoHideDuration,
      persist,
      preventDuplicate,
      key,
      action: (keyItem) => (
        <>
          {actionText && onAction && (
            <MButton
              variant="text"
              onClick={() => {
                closeSnackbar(keyItem);
                onAction(keyItem);
              }}
              data-testid="action-button"
            >
              {actionText}
            </MButton>
          )}
          <IconButton
            onClick={() => closeSnackbar(keyItem)}
            size="small"
            color="inherit"
            data-testid={actionDataTestId}
          >
            <Icon icon={closeFill} width="24" height="24" data-testid={iconTestId} />
          </IconButton>
        </>
      ),
    }
  );

export default showSnackbar;
