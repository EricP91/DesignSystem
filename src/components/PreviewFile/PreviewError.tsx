import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { PreviewErrorCodes } from './enums';
import CorruptedFile from '../../assets/images/CorruptedFile';
import CouldNotGeneratePreview from '../../assets/images/CouldNotGeneratePreview';
import NoPreviewAvailable from '../../assets/images/NoPreviewAvailable';
import PasswordProtected from '../../assets/images/PasswordProtected';
import { ErrorIconContainer, ErrorText } from './PreviewStyled';
import { ImageLabelRecord, LabelsKeys } from './types';

export type PreviewErrorProps = {
  errorCode: PreviewErrorCodes;
  labels: Record<LabelsKeys, string>;
};

export default function PreviewError(props: PreviewErrorProps): JSX.Element {
  const { errorCode, labels } = props;

  const imageData: ImageLabelRecord = useMemo(
    () => ({
      [PreviewErrorCodes.GENERAL_PREVIEW_ERROR]: {
        image: <CouldNotGeneratePreview />,
        label: labels.couldNotGeneratePreview,
      },

      [PreviewErrorCodes.ARTIFACT_NOT_FOUND]: {
        image: <NoPreviewAvailable />,
        label: labels.noPreviewAvailable,
      },

      [PreviewErrorCodes.ARTIFACT_FILE_NOT_FOUND]: {
        image: <NoPreviewAvailable />,
        label: labels.noPreviewAvailable,
      },

      [PreviewErrorCodes.DOCUMENT_PASSWORD_PROTECTED]: {
        image: <PasswordProtected />,
        label: labels.previewPasswordProtected,
      },

      [PreviewErrorCodes.CORRUPTED_FILE]: {
        image: <CorruptedFile />,
        label: labels.corruptedFile,
      },
    }),
    [labels]
  );

  return (
    <ErrorIconContainer container data-testid="could-not-generate-icon">
      <Grid item>{imageData[errorCode]?.image || <CouldNotGeneratePreview />}</Grid>
      <Grid item>
        <ErrorText>{imageData[errorCode]?.label || labels.couldNotGeneratePreview}</ErrorText>
      </Grid>
    </ErrorIconContainer>
  );
}
