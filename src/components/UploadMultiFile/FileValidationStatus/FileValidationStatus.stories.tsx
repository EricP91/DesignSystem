import { Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import FileValidationStatus from './FileValidationStatus';
import { FileValidation, ValidationStatus } from './types';

export default {
  title: 'Components/Upload',
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: [
          ValidationStatus.FAILED,
          ValidationStatus.IN_PROGRESS,
          ValidationStatus.SKIPPED,
          ValidationStatus.SUCCEEDED,
        ],
      },
    },
  },
};

const Template: Story<FileValidation> = (args) => (
  <div>
    <FileValidationStatus {...args} />
  </div>
);

export const UploadFileValidationStatus = Template.bind({});
UploadFileValidationStatus.args = {
  actionText: 'Action',
  status: ValidationStatus.FAILED,
  statusText: 'Validation failed',
  errorDetails: <Typography variant="body1">error</Typography>,
  onAction: () => {},
};
