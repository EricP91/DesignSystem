import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MUploadMultiFile, { UploadMultiFileProps } from './MUploadMultiFile';
import DropZoneIcon from '../../assets/icons/dropZone.svg';

export default {
  title: 'Components/Upload',
};

const Template: Story<UploadMultiFileProps> = (args) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [files, setFiles] = useState(args.files);
  return (
    <MUploadMultiFile
      {...args}
      files={files}
      setFiles={(filesItems: File[]) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        args.setFiles ? args.setFiles(filesItems) : setFiles(filesItems);
      }}
    />
  );
};

const validator = (fileName: string): boolean => {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,<>/?~]/;
  return !specialChars.test(fileName);
};
export const UploadMultiFile = Template.bind({});

const EditProperties = {
  enableEdit: true,
  inputTitle: 'Edit name',
  errorMessage: 'Error message',
  inputValidator: validator,
};

const DescriptionProperties = {
  enableDescription: true,
  addDescriptionTooltipText: 'Add description',
  maxDescriptionLength: 30,
};

UploadMultiFile.args = {
  title: { pre: 'Drop or Select files', link: 'here' },
  subtitle: 'Drop here',
  noFilesIcon:
    'data:image/png;base64,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',
  error: false,
  className: '',
  dropZoneClassName: '',
  dropZoneIcon: DropZoneIcon,
  editProps: EditProperties,
  descriptionProps: DescriptionProperties,
};
