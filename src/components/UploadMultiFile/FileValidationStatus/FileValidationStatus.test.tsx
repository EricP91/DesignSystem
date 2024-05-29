import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { FileValidation, ValidationStatus } from './types';
import FileValidationStatus from './FileValidationStatus';

describe('FileValidationStatus', () => {
  const validation: FileValidation = {
    actionText: 'Skip',
    onAction: () => {},
    status: ValidationStatus.SUCCEEDED,
    statusText: 'Validating File..',
  };

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should render validation status text', () => {
    render(<FileValidationStatus {...validation} />);
    expect(screen.getByTestId('file-validation-status-text')).toBeInTheDocument();
    expect(screen.getByTestId('file-validation-status-text')).toHaveTextContent(validation.statusText);
    expect(screen.queryByTestId('file-validation-action-btn')).not.toBeInTheDocument();
  });

  it('should render action button if status is in progress', () => {
    const inProgressValidationStatus = { ...validation, status: ValidationStatus.IN_PROGRESS };
    render(<FileValidationStatus {...inProgressValidationStatus} />);
    expect(screen.getByTestId('file-validation-action-btn')).toBeInTheDocument();
  });

  it('should render action button if status is skipped', () => {
    const skippdcValidationStatus = { ...validation, status: ValidationStatus.SKIPPED };
    render(<FileValidationStatus {...skippdcValidationStatus} />);
    expect(screen.getByTestId('file-validation-action-btn')).toBeInTheDocument();
  });

  it('should show error details if exists', async () => {
    const failedValidation = { ...validation, status: ValidationStatus.FAILED, errorDetails: 'errorDetails' };
    render(<FileValidationStatus {...failedValidation} />);
    expect(screen.getByTestId('error-details-icon')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('error-details-icon'));

    expect(screen.getByTestId('error-details-popover')).toBeInTheDocument();
    expect(screen.getByTestId('error-details-popover')).toHaveTextContent(failedValidation.errorDetails);
  });
});
