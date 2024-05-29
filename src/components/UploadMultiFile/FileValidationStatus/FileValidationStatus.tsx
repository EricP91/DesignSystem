import { IconButton, Stack, useTheme } from '@mui/material';
import * as React from 'react';
import { AlertWarningIcon, CheckIcon, DangerIcon, InfoIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { PopoverStyled, ActionButtonStyled, StatusTextStyled, StyledSpinner } from './style';
import { FileValidation, ValidationStatus } from './types';

const FileValidationStatus = ({
  statusText,
  status,
  errorDetails,
  actionText,
  onAction,
}: FileValidation): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme: MTheme = useTheme();

  const IconsByStatus = {
    [ValidationStatus.IN_PROGRESS]: <StyledSpinner spinnerSize={12} />,
    [ValidationStatus.SKIPPED]: <AlertWarningIcon />,
    [ValidationStatus.FAILED]: <DangerIcon />,
    [ValidationStatus.SUCCEEDED]: <CheckIcon />,
  };

  const showErrors = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const showAction =
    (status === ValidationStatus.IN_PROGRESS || status === ValidationStatus.SKIPPED) && actionText && onAction;
  return (
    <Stack height="100%" flexDirection="row" alignItems="center">
      {IconsByStatus[status]}

      <StatusTextStyled variant="text" data-testid="file-validation-status-text">
        {statusText}
      </StatusTextStyled>
      {showAction && (
        <ActionButtonStyled
          data-testid="file-validation-action-btn"
          size="small"
          variant="text"
          color="primary"
          onClick={onAction}
        >
          {actionText}
        </ActionButtonStyled>
      )}
      {status === ValidationStatus.FAILED && errorDetails && (
        <>
          <IconButton sx={{ padding: 0 }} data-testid="error-details-icon" onClick={showErrors}>
            <InfoIcon sx={{ fontSize: 26 }} fill={theme.palette.ui.mutedDark} />
          </IconButton>
          <PopoverStyled
            data-testid="error-details-popover"
            id="errors-popover"
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {errorDetails}
          </PopoverStyled>
        </>
      )}
    </Stack>
  );
};

export default FileValidationStatus;
