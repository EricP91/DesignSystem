import React, { useCallback, useState } from 'react';
import { Box, Typography, Link, styled } from '@mui/material';
import { useDropzone, DropzoneProps, FileRejection, FileError } from 'react-dropzone';
import FilesList from './FilesList';
import { DescriptionProps, EditProps } from './types';

const FILE_TOO_LARGE = 'file-too-large';
const FILE_INVALID_TYPE = 'file-invalid-type';

export type DropZoneComponentProps = {
  isDisabled?: boolean;
  isDragActive?: boolean;
  hasError?: boolean;
};

const RootComponent = styled('div')(() => ({
  width: '100%',
  height: '100%',
}));

const DropZoneComponent = styled(Box)<DropZoneComponentProps>(({ theme, isDragActive, isDisabled, hasError }) => ({
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.grey[200],
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  padding: theme.spacing(2),
  '&:hover': {
    opacity: 0.72,
    cursor: 'pointer',
  },
  '& .upload-content': {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: theme.spacing(1),
    },
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
    flexDirection: 'row',
  },
  ...(isDragActive && { opacity: 0.72 }),
  ...(hasError && {
    borderColor: `${theme.palette.red[900]} !important`,
  }),
  ...(isDisabled && {
    cursor: 'not-allowed !important',
    backgroundColor: theme.palette.grey[1900],
    color: theme.palette.grey[500],
    borderColor: theme.palette.grey[2000],
    '& a': {
      color: theme.palette.grey[500],
    },
    '& p': {
      color: theme.palette.grey[500],
    },
  }),
}));

export interface UploadMultiFileProps {
  title: { pre?: string; post?: string; link?: string };
  subtitle?: string;
  noFilesIcon: string;
  error?: boolean;
  errorMessage?: string;
  files?: File[];
  setFiles: (files: File[]) => void;
  className?: string;
  dropZoneClassName?: string;
  fileTypeErrorMessage?: string;
  fileSizeErrorMessage?: string;
  dropzoneProps?: DropzoneProps;
  dropZoneIcon?: string;
  editProps?: EditProps;
  descriptionProps?: DescriptionProps;
}

function UploadMultiFile({
  title,
  subtitle,
  noFilesIcon,
  error = false,
  files,
  setFiles,
  className,
  dropZoneClassName,
  fileTypeErrorMessage,
  fileSizeErrorMessage,
  dropzoneProps,
  dropZoneIcon,
  editProps = { enableEdit: false },
  errorMessage,
  descriptionProps,
  ...other
}: UploadMultiFileProps): JSX.Element {
  const [dragErrorText, setDragErrorText] = useState('');

  const handleRejectedFiles = useCallback(
    (rejectedFiles: FileRejection[]): void => {
      setDragErrorText('');
      rejectedFiles?.forEach((file) => {
        file.errors.forEach((err: FileError) => {
          if (err.code === FILE_TOO_LARGE) {
            setDragErrorText(fileSizeErrorMessage || '');
          }

          if (err.code === FILE_INVALID_TYPE) {
            setDragErrorText(fileTypeErrorMessage || '');
          }
        });
      });
    },
    [fileSizeErrorMessage, fileTypeErrorMessage]
  );

  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      handleRejectedFiles(rejectedFiles);
      if (acceptedFiles) {
        setFiles([...(files || []), ...acceptedFiles]);
      }
    },
    [handleRejectedFiles, setFiles, files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    ...dropzoneProps,
  });

  return (
    <RootComponent className={className} {...other}>
      <DropZoneComponent
        isDragActive={isDragActive}
        isDisabled={!!dropzoneProps?.disabled}
        hasError={!!dragErrorText || error}
        className={dropZoneClassName}
        {...getRootProps()}
      >
        <input {...getInputProps()} data-testid="drag-input" />

        <Box data-testid="title-box" className="upload-content" sx={{ textAlign: 'center' }}>
          {dropZoneIcon && <Box data-testid="drop-zone-icon" component="img" src={dropZoneIcon} />}
          <Box>
            <Typography variant="subtitle1">
              {title.pre}&nbsp;
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link data-testid="title-link">{title.link}</Link>
              &nbsp;{title.post}
            </Typography>

            {subtitle && (
              <Typography color="textSecondary" variant="body2">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      </DropZoneComponent>
      {dragErrorText && (
        <Typography
          sx={{
            mx: 1,
          }}
          color="red.900"
          variant="body2"
        >
          {dragErrorText}!!
        </Typography>
      )}
      {errorMessage && (
        <Typography
          sx={{
            mx: 1,
          }}
          color="red.900"
          variant="body2"
        >
          {errorMessage}
        </Typography>
      )}

      <FilesList
        files={files}
        noFilesIcon={noFilesIcon}
        setFiles={setFiles}
        editProps={editProps}
        descriptionProps={descriptionProps}
      />
    </RootComponent>
  );
}

export default UploadMultiFile;
