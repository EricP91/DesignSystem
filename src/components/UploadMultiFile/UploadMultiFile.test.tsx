import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { UploadMultiFile } from './UploadMultiFile.stories';
import { UploadMultiFileProps } from './MUploadMultiFile';
import { EditableFileWithPath } from './types';
import { ValidationStatus } from './FileValidationStatus/types';

describe('UploadFiles', () => {
  const testFiles = [new File([''], 'File1'), new File([''], 'File2')];
  const testFilesDetails = [
    { name: testFiles[0].name, size: `${testFiles[0].size} B` },
    { name: testFiles[1].name, size: `${testFiles[1].size} B` },
  ];
  const testFileWithValidation = new File([''], 'File1');
  (testFileWithValidation as EditableFileWithPath).validation = {
    actionText: 'Skip',
    onAction: () => {},
    status: ValidationStatus.IN_PROGRESS,
    statusText: 'Validating File..',
  };

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should render drag and drop input', () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} />);
    expect(screen.getByTestId('drag-input')).toBeInTheDocument();
  });

  it('should drag the files on the input', async () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} />);
    fireEvent.change(screen.getByTestId('drag-input'), { target: { files: testFiles } });
    await waitFor(() => screen.getByText(testFilesDetails[1].name));
    expect(screen.getByText(testFilesDetails[0].name)).toBeInTheDocument();
    expect(screen.getByText(testFilesDetails[1].name)).toBeInTheDocument();
    expect(screen.getAllByTestId('file-item-remove').length).toEqual(2);
  });

  it('should append new files to existing on drag the files on the input', async () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} files={testFiles} />);
    fireEvent.change(screen.getByTestId('drag-input'), { target: { files: [new File([''], 'File3')] } });
    await waitFor(() => screen.getByText(testFilesDetails[1].name));
    expect(screen.getByText(testFilesDetails[0].name)).toBeInTheDocument();
    expect(screen.getByText(testFilesDetails[1].name)).toBeInTheDocument();
    expect(screen.getByText('File3')).toBeInTheDocument();
    expect(screen.getAllByTestId('file-item-remove').length).toEqual(3);
  });

  it('should not set the file when drag & drop does not receive file', async () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} files={testFiles} />);
    fireEvent.change(screen.getByTestId('drag-input'), { target: { files: [] } });
    expect(screen.getAllByTestId('file-item-remove').length).toEqual(2);
  });

  it('should set the files received on the props', () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} files={testFiles} />);
    expect(screen.getByText(testFilesDetails[0].name)).toBeInTheDocument();
    expect(screen.getByText(testFilesDetails[1].name)).toBeInTheDocument();
    expect(screen.queryByTestId('no-files-image')).not.toBeInTheDocument();
  });

  test('should remove file when clicking remove button', async () => {
    const setFilesMock = jest.fn(() => {});
    render(
      <UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} files={testFiles} setFiles={setFilesMock} />
    );
    fireEvent.mouseOver(screen.getAllByTestId('file-item-remove')[0]);
    await waitFor(() => screen.getAllByTestId('file-item-remove')[0]);
    fireEvent.click(screen.getAllByTestId('file-item-remove')[0]);
    const expectedFiles: File[] = [testFiles[1]];
    expect(setFilesMock).toHaveBeenCalledWith(expectedFiles);
  });

  test('should display image for empty state', async () => {
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} files={[]} noFilesIcon="image.png" />);
    expect(screen.getByTestId('no-files-image')).toBeInTheDocument();
  });

  test('should display link element for title link ', async () => {
    const title = { link: 'link text' };
    render(<UploadMultiFile {...(UploadMultiFile.args as UploadMultiFileProps)} title={title} />);
    expect(screen.getByTestId('title-link')).toBeInTheDocument();
    expect(screen.getByTestId('title-link')).toHaveTextContent(title.link);
  });

  test('should have icon inside the drop zone', async () => {
    const setFilesMock = jest.fn(() => {});
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
      />
    );
    expect(screen.getByTestId('drop-zone-icon')).toBeInTheDocument();
  });

  test('should have remove & edit buttons when enable edit is on', async () => {
    const setFilesMock = jest.fn(() => {});
    const editProps = {
      enableEdit: true,
    };
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
      />
    );
    expect(screen.getByTestId('file-item-remove')).toBeInTheDocument();
    expect(screen.getByTestId('file-item-edit')).toBeInTheDocument();
  });

  test('should enable edit file name when enable edit is on', async () => {
    const setFilesMock = jest.fn(() => {});
    const editProps = {
      enableEdit: true,
    };
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
      />
    );
    const editButton = screen.getByTestId('file-item-edit');
    expect(editButton).toBeInTheDocument();
    expect(screen.getByText(testFiles[0].name)).toBeInTheDocument();
    fireEvent.mouseOver(editButton);
    await waitFor(() => editButton);
    fireEvent.click(editButton);

    const editInput = screen.getByTestId('edit-file-name').getElementsByTagName('input')[0];
    expect(editInput).toBeInTheDocument();
    editInput.setSelectionRange(0, editInput.value.length);
    userEvent.type(editInput, 'mock');
    fireEvent.focusOut(editInput);
    expect(editButton).not.toHaveFocus();
    expect(screen.getByText('mock')).toBeInTheDocument();
  });

  test('should use validator when enter a value to edit input', async () => {
    const setFilesMock = jest.fn(() => {});
    const validator = jest.fn();
    const editProps = {
      enableEdit: true,
      inputValidator: validator,
    };
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
      />
    );
    const editButton = screen.getByTestId('file-item-edit');
    fireEvent.mouseOver(editButton);
    await waitFor(() => editButton);
    fireEvent.click(editButton);

    const editInput = screen.getByTestId('edit-file-name').getElementsByTagName('input')[0];
    editInput.setSelectionRange(0, editInput.value.length);
    userEvent.type(editInput, 'mock');
    expect(validator).toBeCalled();
  });

  test('should have edit input title', async () => {
    const setFilesMock = jest.fn(() => {});
    const editProps = {
      enableEdit: true,
      inputTitle: 'Mock title',
    };
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
      />
    );
    const editButton = screen.getByTestId('file-item-edit');
    fireEvent.mouseOver(editButton);
    await waitFor(() => editButton);
    fireEvent.click(editButton);

    expect(screen.getAllByText('Mock title')[0]).toBeInTheDocument();
  });

  test('should have error message input', async () => {
    const setFilesMock = jest.fn(() => {});
    const validator = jest.fn(() => false);

    const editProps = {
      enableEdit: true,
      errorMessage: 'Mock message',
      inputValidator: validator,
    };
    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
      />
    );
    const editButton = screen.getByTestId('file-item-edit');
    fireEvent.mouseOver(editButton);
    await waitFor(() => editButton);
    fireEvent.click(editButton);

    const editInput = screen.getByTestId('edit-file-name').getElementsByTagName('input')[0];
    editInput.setSelectionRange(0, editInput.value.length);
    userEvent.type(editInput, 'mock');
    expect(validator).toBeCalled();
    expect(screen.getByText('Mock message')).toBeInTheDocument();
  });
  test('should enable description file when enable description is on', async () => {
    const setFilesMock = jest.fn(() => {});
    const editProps = {
      enableEdit: true,
    };
    const Component = (): JSX.Element => (
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
        descriptionProps={{ enableDescription: true }}
      />
    );
    const { rerender } = render(<Component />);
    const description = screen.getByTestId('file-item-description');
    expect(description).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(description);
    });
    rerender(<Component />);
    const descriptionInput = screen.getByTestId('file-description-input').getElementsByTagName('textarea')[0];
    expect(descriptionInput).toBeInTheDocument();
    delete (testFiles[0] as EditableFileWithPath).description;
  });

  test('should disable edit file name and change icon when description field is open', async () => {
    const setFilesMock = jest.fn(() => {});
    const editProps = {
      enableEdit: true,
    };

    const Component = (): JSX.Element => (
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFiles[0]]}
        setFiles={setFilesMock}
        editProps={editProps}
        descriptionProps={{ enableDescription: true }}
      />
    );
    let rerender: (ui: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>) => void;
    await act(async () => {
      rerender = render(<Component />).rerender;
    });

    const descriptionBtn = screen.getByTestId('file-item-description');
    await expect(screen.queryByTestId('file-item-edit')).not.toBeDisabled();
    await expect(screen.queryByTestId('add-description-icon')).toBeInTheDocument();
    await expect(screen.queryByTestId('remove-description-icon')).not.toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(descriptionBtn);
    });
    await act(async () => {
      rerender(<Component />);
    });
    expect(screen.getByTestId('file-item-edit')).toBeDisabled();
    expect(screen.queryByTestId('add-description-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('remove-description-icon')).toBeInTheDocument();
    delete (testFiles[0] as EditableFileWithPath).description;
  });

  test('should show file validation details if exists', async () => {
    const setFilesMock = jest.fn(() => {});

    render(
      <UploadMultiFile
        {...(UploadMultiFile.args as UploadMultiFileProps)}
        files={[testFileWithValidation]}
        setFiles={setFilesMock}
      />
    );
    expect(screen.getByTestId('file-validation')).toBeInTheDocument();
  });
});
