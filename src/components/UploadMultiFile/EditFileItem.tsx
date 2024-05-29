import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { MUIStyled } from '../../theme';
import MInput from '../Input/MInput';
import { EditProps } from './types';

export interface EditFileItemProps {
  file: File;
  setEditFileIndex: (value: number) => void;
  editFileIndex: number;
  setEditFileValue: (value: string) => void;
  editFileValue: string;
  editProps: EditProps;
  setFileName: (value: string) => void;
}

const MEditInput = styled(MInput)<MUIStyled>(({ theme }) => ({
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  '& input': {
    backgroundColor: theme.palette.common.white,
    height: '100%',
    width: '100%',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  '& p': {
    margin: theme.spacing(0, 0, 0, 1),
    lineHeight: theme.spacing(3),
  },
}));

function EditFileItem({
  file,
  editFileIndex,
  setEditFileIndex,
  editFileValue,
  setEditFileValue,
  editProps,
  setFileName,
}: EditFileItemProps): JSX.Element {
  const { inputTitle, inputValidator, errorMessage } = editProps;
  const [helperText, setHelperText] = useState('');

  const handleFileNameValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isValid = !inputValidator || inputValidator(event.target.value);
    const inputText = isValid ? event.target.value : '';
    const inputHelperText = !isValid && errorMessage ? errorMessage : '';
    setEditFileValue(inputText);
    setHelperText(inputHelperText);
  };

  const handleBlur = useCallback((): void => {
    if (editFileValue) {
      setFileName(editFileValue);
      setEditFileValue('');
    }
    setEditFileIndex(-1);
  }, [editFileValue, setEditFileIndex, setEditFileValue, setFileName]);

  useEffect(() => {
    const handleKeyPressed = (event: KeyboardEvent): void => {
      if (event.key === 'Enter' && editFileIndex !== -1) {
        handleBlur();
      }
    };

    document.addEventListener('keydown', handleKeyPressed, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPressed, false);
    };
  }, [editFileIndex, handleBlur]);

  return (
    <MEditInput
      label={inputTitle}
      defaultValue={file.name}
      rows={1}
      fullWidth
      focused
      data-testid="edit-file-name"
      onChange={handleFileNameValueChange}
      onBlur={handleBlur}
      inputRef={(input) => input && input.focus()}
      error={!!helperText}
      helperText={helperText}
    />
  );
}

export default EditFileItem;
