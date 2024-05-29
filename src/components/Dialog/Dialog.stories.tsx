import { Button, Typography, Avatar } from '@mui/material';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MDialog, { ConfirmationDialogProps } from './MDialog';
import { DangerIcon } from '../../assets/icons';

export default {
  title: 'Components/Dialogs',
};

const Template: Story<ConfirmationDialogProps> = ({ open, ...args }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <MDialog
      {...args}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      actions={
        <div>
          <Button variant="contained">Yes</Button>
          <Button
            color="primary"
            data-testid="dialog-action-close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            No
          </Button>
        </div>
      }
    />
  );
};

export const ConfirmationDialog = Template.bind({});

ConfirmationDialog.args = {
  open: true,
  title: 'Are you sure?',
  subtitle: 'Asking again...',
  content: <Typography>If you are deleting the user, the action cannot be undone.</Typography>,
};

export const NoCloseConfirmationDialog = Template.bind({});

NoCloseConfirmationDialog.args = {
  open: true,
  showClose: false,
  titleElement: (
    <>
      <Avatar>
        <DangerIcon />
      </Avatar>
      <Typography>Some title</Typography>
    </>
  ),
  content: <Typography>If you are deleting the user, the action cannot be undone.</Typography>,
};
