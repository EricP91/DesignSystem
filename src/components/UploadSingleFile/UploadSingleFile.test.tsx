import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { UploadSingleFile } from './UploadSingleFile.stories';
import { UploadSingleFileProps } from './MUploadSingleFile';

describe('UploadSingleFile', () => {
  const testFile = new File([''], 'File name');
  const testFileDetails = `${testFile.name} (${testFile.size} B)`;

  it('should render drag and drop input', () => {
    render(<UploadSingleFile {...(UploadSingleFile.args as UploadSingleFileProps)} error={undefined} />);
    expect(screen.getByTestId('drag-input')).toBeInTheDocument();
  });

  it('should drag the file on the input', async () => {
    render(<UploadSingleFile {...(UploadSingleFile.args as UploadSingleFileProps)} />);
    fireEvent.change(screen.getByTestId('drag-input'), { target: { files: [testFile] } });
    await waitFor(() => screen.getByText(testFileDetails));
    expect(screen.getByText(testFileDetails)).toBeInTheDocument();
  });

  it('should not set the file when drag & drop does not receive file', async () => {
    render(<UploadSingleFile {...(UploadSingleFile.args as UploadSingleFileProps)} />);
    fireEvent.change(screen.getByTestId('drag-input'), { target: { files: [] } });
    const title = UploadSingleFile?.args?.title || '';
    await waitFor(() => screen.getByText(title));
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should set the file received on the props', () => {
    render(<UploadSingleFile {...(UploadSingleFile.args as UploadSingleFileProps)} file={testFile} />);
    expect(screen.getByText(testFileDetails)).toBeInTheDocument();
  });

  it('should trucate the file name if is long', () => {
    const testLongFile = new File([''], 'This is a very long file name');
    render(<UploadSingleFile {...(UploadSingleFile.args as UploadSingleFileProps)} file={testLongFile} />);
    expect(screen.getByText(`${testLongFile.name.substring(0, 25)}... (0 B)`)).toBeInTheDocument();
  });
});
