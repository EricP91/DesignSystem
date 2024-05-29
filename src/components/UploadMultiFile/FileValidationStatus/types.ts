import { ReactElement } from 'react';

export enum ValidationStatus {
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  SKIPPED = 'skipped',
  IN_PROGRESS = 'inProgress',
}

export type FileValidation = {
  actionText?: string;
  status: ValidationStatus;
  statusText: string;
  errorDetails?: string | ReactElement;
  onAction?: () => void;
};
