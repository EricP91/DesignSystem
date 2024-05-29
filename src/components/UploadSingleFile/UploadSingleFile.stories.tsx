import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MUploadSingleFile, { UploadSingleFileProps } from './MUploadSingleFile';

export default {
  title: 'Components/Upload',
};

const Template: Story<UploadSingleFileProps> = (args) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [file, setFile] = useState(args.file);
  return (
    <MUploadSingleFile
      {...args}
      file={file}
      setFile={(fileItem: File) => {
        setFile(fileItem);
      }}
    />
  );
};

export const UploadSingleFile = Template.bind({});

UploadSingleFile.args = {
  title: 'Drop or Select file',
  subtitle: 'Drop here',
  dropTexts: {
    pre: 'Drop files here or click',
    selected: 'change',
    unselected: 'browse',
    post: 'thorough your machine',
  },
  icon: 'https://minimals.cc/static/illustrations/illustration_upload.svg',
  error: false,
  className: '',
};
