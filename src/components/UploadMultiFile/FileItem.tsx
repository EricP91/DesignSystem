import React, { useCallback, useMemo } from 'react';
import { Box, IconButton, ListItemIcon, ListItemText, Tooltip, Typography, styled } from '@mui/material';
import filesize from 'filesize';
import OverflowTooltip from '../Tooltip/OverflowTooltip';
import { UploadFileIcon, CloseIcon, EditIcon, AddDescriptionIcon, RemoveDescriptionIcon } from '../../assets/icons';
import { EditableFileWithPath } from './types';

export interface FileItemProps {
  setFiles: (files: File[]) => void;
  files: File[];
  file: File;
  handleRemoveFile: (file: File) => void;
  handleEditFile?: (file: File) => void;
  enableEdit?: boolean;
  enableDescription?: boolean;
  addDescriptionTooltipText?: string;
  removeDescriptionTooltipText?: string;
}
const FileDetails = styled(ListItemText)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingTop: theme.spacing(2),
}));
const FileActions = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));
const FileName = styled(Typography)(({ theme }) => ({
  ...theme.typography.body3,
  whiteSpace: 'pre',
  lineHeight: theme.spacing(3),
}));
const ItemIcon = styled(ListItemIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  alignSelf: 'center',
}));
const FileNameWrapper = styled(Box)(() => ({
  width: '80%',
}));

const IconButtonWithHoover = styled(IconButton)(({ theme }) => ({
  '&:disabled path': { fill: theme.palette.ui.mutedShady },
  '&:hover': { backgroundColor: theme.palette.ui.mutedHover },
}));

function FileItem(props: FileItemProps): JSX.Element {
  const {
    file,
    handleEditFile,
    handleRemoveFile,
    enableEdit,
    enableDescription,
    addDescriptionTooltipText,
    removeDescriptionTooltipText,
    setFiles,
    files,
  } = props;

  const hasDescription: boolean = (file as EditableFileWithPath).description !== undefined;

  const handleAddDescriptionClick = useCallback(() => {
    const newFiles = [...files];
    const fileIdx = newFiles.indexOf(file);
    const editableFile = file as EditableFileWithPath;
    if (!hasDescription) {
      editableFile.description = '';
    } else {
      delete editableFile.description;
    }
    newFiles[fileIdx] = editableFile;
    setFiles(newFiles);
  }, [file, files, setFiles, hasDescription]);

  const descriptionTooltip = useMemo(
    () =>
      hasDescription
        ? removeDescriptionTooltipText || 'Remove description'
        : addDescriptionTooltipText || 'Add description',
    [addDescriptionTooltipText, removeDescriptionTooltipText, hasDescription]
  );
  return (
    <>
      <ItemIcon>
        <UploadFileIcon />
      </ItemIcon>
      <FileDetails
        primary={
          <FileNameWrapper>
            <OverflowTooltip title={file.name} isMiddleEllipsis>
              <FileName>{file.name}</FileName>
            </OverflowTooltip>
          </FileNameWrapper>
        }
        secondary={filesize(file.size)}
        secondaryTypographyProps={{ variant: 'body2' }}
      />

      <FileActions>
        {enableDescription && (
          <Tooltip title={descriptionTooltip} arrow placement="top">
            <IconButtonWithHoover
              edge="end"
              size="small"
              onClick={handleAddDescriptionClick}
              data-testid="file-item-description"
            >
              {hasDescription ? (
                <RemoveDescriptionIcon data-testid="remove-description-icon" />
              ) : (
                <AddDescriptionIcon data-testid="add-description-icon" />
              )}
            </IconButtonWithHoover>
          </Tooltip>
        )}
        {enableEdit && (
          <IconButtonWithHoover
            edge="end"
            size="small"
            onClick={() => handleEditFile && handleEditFile(file)}
            data-testid="file-item-edit"
            disabled={hasDescription}
          >
            <EditIcon />
          </IconButtonWithHoover>
        )}
        <IconButtonWithHoover
          edge="end"
          size="small"
          onClick={() => handleRemoveFile(file)}
          data-testid="file-item-remove"
        >
          <CloseIcon />
        </IconButtonWithHoover>
      </FileActions>
    </>
  );
}

export default FileItem;
