import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { Button, Typography } from '@mui/material';
import MAlertDialog, { MAlertDialogProps } from './MAlertDialog';

const MAlertDialogWrapper = ({ variant }: Pick<MAlertDialogProps, 'variant'>): JSX.Element => (
  <MAlertDialog
    variant={variant}
    open
    onClose={() => {}}
    content={
      <Typography>
        If you are deleting the long text long text long text long text user, the action cannot be undone.
      </Typography>
    }
    actions={
      <div>
        <Button variant="contained" color="primary" data-testid="alert-dialog-actions" onClick={() => {}}>
          Got it
        </Button>
      </div>
    }
  />
);

it('should display danger icon', async () => {
  render(MAlertDialogWrapper({ variant: 'error' }));
  expect(screen.getAllByTestId('alert-dialog-actions')[0]).toBeInTheDocument();
  expect(screen.getAllByTestId('danger-icon')[0]).toBeInTheDocument();
});

it('should display info icon if got non supported variant', async () => {
  render(MAlertDialogWrapper({ variant: undefined }));
  expect(screen.getByTestId('alert-dialog-actions')).toBeInTheDocument();
  expect(screen.getByTestId('info-alert-icon')).toBeInTheDocument();
});

it('should display warning icon', async () => {
  render(MAlertDialogWrapper({ variant: 'warning' }));
  expect(screen.getAllByTestId('alert-dialog-actions')[0]).toBeInTheDocument();
  expect(screen.getAllByTestId('warning-icon')[0]).toBeInTheDocument();
});
