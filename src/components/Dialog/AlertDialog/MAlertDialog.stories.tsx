import { Button, Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MAlertDialog, { MAlertDialogProps } from './MAlertDialog';

export default {
  title: 'Components/Dialogs/Alerts',
  argTypes: {
    variant: {
      options: ['error', 'info', 'warning', 'success'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<MAlertDialogProps> = (args) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <MAlertDialog
      {...args}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      actions={
        <div>
          <Button
            variant="contained"
            color="primary"
            data-testid="alert-dialog-actions"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Got it
          </Button>
        </div>
      }
    />
  );
};

export const AlertDialog = Template.bind({});

AlertDialog.args = {
  open: true,
  variant: 'error',
  title: 'Are you long text long text long text long text sure?',
  content: (
    <Typography>
      If you are deleting the long text long text long text long text user, the action cannot be undone.
    </Typography>
  ),
};
