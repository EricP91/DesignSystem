import React, { useCallback, useState } from 'react';
import { Box, List, ListItem, styled } from '@mui/material';
import { FileWithPath } from 'react-dropzone';
import { AnimatePresence, motion } from 'framer-motion';
import MInput from '../Input/MInput';
import { varFadeInRight } from '../Animate';
import { DescriptionProps, EditProps, EditableFileWithPath } from './types';
import EditFileItem from './EditFileItem';
import FileItem from './FileItem';
import FileValidationStatus from './FileValidationStatus/FileValidationStatus';

export interface FilesListProps {
  noFilesIcon: string;
  files?: File[];
  setFiles: (files: File[]) => void;
  editProps: EditProps;
  descriptionProps?: DescriptionProps;
}
export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  minHeight: theme.spacing(11),
  height: 'fit-content',
  alignItems: 'flex-start',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.blue[300],
  flexDirection: 'column',
}));

const NoFileIcon = styled('img')(({ theme }) => ({
  margin: theme.spacing(10, 'auto', 0, 'auto'),
  height: theme.spacing(16.25),
}));

const FilesListStyled = styled(List)(({ theme }) => ({
  overflowY: 'auto',
  height: `calc(100% - ${theme.spacing(11)})`,
  marginTop: theme.spacing(1),
  overflowX: 'hidden',
}));
const FileItemBoxStyled = styled(Box)(({ theme }) => ({ margin: theme.spacing(1, 0), padding: theme.spacing(0, 1) }));
const FileItemDetails = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
}));
const DescriptionInput = styled(MInput)(({ theme }) => ({
  width: '95%',
  height: 72,
  marginBottom: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.ui.light,
  },
}));
const DescriptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: 120,
  flexDirection: 'column',
  alignItems: 'end',
  margin: theme.spacing(4, 1, 0, 0),
}));
const DescriptionCounter = styled(Box)(({ theme }) => ({
  color: theme.palette.ui.mutedHeavy,
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '24px',
  alignSelf: 'end',
  margin: theme.spacing(1, 0),
}));
const ValidationContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.ui.brandLightest,
  height: 40,
  borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
  margin: theme.spacing(1, 0),
  padding: theme.spacing(0, 1),
}));

function FilesList({ files, noFilesIcon, setFiles, editProps, descriptionProps }: FilesListProps): JSX.Element {
  const { enableEdit } = editProps;
  const [editFileIndex, setEditFileIndex] = useState<number>(-1);
  const [editFileValue, setEditFileValue] = useState<string>('');
  const [descriptionError, setDescriptionErrors] = useState<Record<number, string>>({});

  const handleEditFile = useCallback(
    (file: File): void => {
      const editFile = (files || []).indexOf(file);
      setEditFileIndex(editFile);
    },
    [files, setEditFileIndex]
  );

  const setFileName = useCallback(
    (fileName: string): void => {
      if (files) {
        const clonedFile = new File([files[editFileIndex]], fileName, {
          type: files[editFileIndex].type,
          lastModified: files[editFileIndex].lastModified,
        }) as Mutable<FileWithPath>;
        try {
          clonedFile.path = (files[editFileIndex] as FileWithPath).path;
        } catch {
          (clonedFile as EditableFileWithPath).editablePath = (files[editFileIndex] as FileWithPath).path;
        }
        files[editFileIndex] = clonedFile as File;
        setFiles(files);
      }
    },
    [files, setFiles, editFileIndex]
  );

  const handleRemoveFile = useCallback(
    (file: File): void => {
      const newFiles = files ? [...files] : [];
      const idx = newFiles.indexOf(file);
      newFiles.splice(idx, 1);
      setFiles(newFiles);
    },
    [files, setFiles]
  );

  const handleDescriptionChange = useCallback(
    (event: React.SyntheticEvent) => {
      const val = (event.currentTarget as HTMLInputElement).value;
      const index = Number.parseInt((event.currentTarget as HTMLInputElement).dataset.fileIndex as string, 10);
      if (descriptionProps?.maxDescriptionLength && val.length > descriptionProps.maxDescriptionLength) {
        return;
      }
      if (descriptionProps?.descriptionInputValidator) {
        const error = descriptionProps.descriptionInputValidator(val);
        if (error) {
          setDescriptionErrors((prev) => ({ ...prev, [index]: error }));
          return;
        }
      }
      if (Number.isInteger(index)) {
        const newFiles = files ? [...files] : [];
        (newFiles[index] as EditableFileWithPath).description = val;
        setFiles(newFiles);
      }
    },
    [files, setFiles, descriptionProps]
  );

  return (
    <>
      {!!files?.length && (
        <FilesListStyled disablePadding>
          <AnimatePresence>
            {files.map((file, index) => {
              const { validation } = file as EditableFileWithPath;
              return enableEdit && editFileIndex === index ? (
                <ListItemStyled key={`${file.name}_${index + 1}`} {...varFadeInRight}>
                  <EditFileItem
                    file={file}
                    editFileIndex={editFileIndex}
                    setEditFileIndex={setEditFileIndex}
                    editFileValue={editFileValue}
                    setEditFileValue={setEditFileValue}
                    editProps={editProps}
                    setFileName={setFileName}
                  />
                </ListItemStyled>
              ) : (
                <ListItemStyled key={`${file.name}_${index + 1}`} components={{ Root: motion.div }} {...varFadeInRight}>
                  <FileItemBoxStyled>
                    <FileItemDetails>
                      <FileItem
                        setFiles={setFiles}
                        enableDescription={descriptionProps?.enableDescription}
                        files={files}
                        file={file}
                        handleEditFile={handleEditFile}
                        handleRemoveFile={handleRemoveFile}
                        enableEdit={enableEdit}
                        addDescriptionTooltipText={descriptionProps?.addDescriptionTooltipText}
                        removeDescriptionTooltipText={descriptionProps?.removeDescriptionTooltipText}
                      />
                    </FileItemDetails>
                    {(file as EditableFileWithPath).description !== undefined && (
                      <DescriptionContainer
                        {...(descriptionProps?.rootClassName ? { className: descriptionProps.rootClassName } : {})}
                      >
                        <DescriptionInput
                          {...(descriptionError[index] ? { error: true, helperText: descriptionError[index] } : {})}
                          label={descriptionProps?.inputLabelText || 'Enter description'}
                          data-testid="file-description-input"
                          value={(file as EditableFileWithPath).description}
                          onChange={handleDescriptionChange}
                          multiline
                          fullWidth
                          rows={2}
                          variant="outlined"
                          inputProps={{
                            'data-testid': 'file-description-text-area',
                            'data-file-index': index,
                          }}
                        />
                        {descriptionProps?.maxDescriptionLength && (
                          <DescriptionCounter>
                            {(file as EditableFileWithPath).description?.length || 0}/
                            {descriptionProps.maxDescriptionLength}
                          </DescriptionCounter>
                        )}
                      </DescriptionContainer>
                    )}
                  </FileItemBoxStyled>
                  {validation && (
                    <ValidationContainer data-testid="file-validation">
                      <FileValidationStatus {...validation} />
                    </ValidationContainer>
                  )}
                </ListItemStyled>
              );
            })}
          </AnimatePresence>
        </FilesListStyled>
      )}
      {!files?.length && noFilesIcon && <NoFileIcon data-testid="no-files-image" src={noFilesIcon} />}
    </>
  );
}

export default FilesList;
