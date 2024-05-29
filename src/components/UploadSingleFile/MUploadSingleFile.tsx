import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import filesize from 'filesize';
import React, { useCallback } from 'react';
import { useDropzone, DropzoneProps } from 'react-dropzone';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  root: { width: '100%' },
  dropZone: {
    outline: 'none',
    display: 'flex',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4, 0),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('padding'),
    backgroundColor: theme.palette.grey[200],
    border: `1px dashed ${theme.palette.grey[500_32]}`,
    '&:hover': {
      opacity: 0.72,
      cursor: 'pointer',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      flexDirection: 'row',
    },
  },
  hasFile: {
    padding: '4% 0',
  },
  isDragActive: {
    opacity: 0.72,
  },
  isDragReject: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.lighter,
  },
  isDragAccept: {},
}));

export interface UploadSingleFileProps {
  title: string;
  subtitle?: string;
  dropTexts: {
    pre?: string;
    post?: string;
    selected?: string;
    unselected?: string;
  };
  icon: string;
  error?: boolean;
  file?: File;
  setFile: (number: File) => void;
  className?: string;
  dropzoneProps?: DropzoneProps;
}

function UploadSingleFile({
  title,
  subtitle,
  dropTexts,
  icon,
  error = false,
  file,
  setFile,
  className,
  dropzoneProps,
  ...other
}: UploadSingleFileProps): JSX.Element {
  const classes = useStyles();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const acceptedFile = acceptedFiles[0];

      if (acceptedFile) {
        setFile(acceptedFile);
      }
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept } = useDropzone({
    onDrop: handleDrop,
    multiple: false,
    ...dropzoneProps,
  });

  const fileNameShortened = (name: string): string => (name.length > 25 ? `${name.substring(0, 25)}...` : name);

  return (
    <div className={clsx(classes.root, className)} {...other}>
      <div
        className={clsx(classes.dropZone, {
          [classes.isDragActive]: isDragActive,
          [classes.isDragAccept]: isDragAccept,
          [classes.isDragReject]: isDragReject || error,
          [classes.hasFile]: file,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} data-testid="drag-input" />

        <Box component="img" src={icon} sx={{ height: 160 }} />

        <Box sx={{ ml: { sm: 10 } }}>
          <Typography gutterBottom variant="h5">
            {file ? `${fileNameShortened(file.name)} (${filesize(file.size)})` : title}
          </Typography>

          {subtitle && (
            <Typography mb={2} color="textSecondary" variant="body2">
              {subtitle}
            </Typography>
          )}

          <Typography color="textSecondary" variant="body2">
            {dropTexts.pre}&nbsp;
            <Typography color="primary" variant="body2" component="span">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link>{file ? dropTexts.selected : dropTexts.unselected}</Link>
            </Typography>
            &nbsp;{dropTexts.post}
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default UploadSingleFile;
