import React, { ForwardedRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/material';
import PreviewTopBar from './PreviewTopBar';
import { LabelsKeys, PreviewFileProps } from './types';
import PreviewError from './PreviewError';
import { Loading, PageBackdrop, PageContainer, StyledVideo, TopBarRoot } from './PreviewStyled';
import { PreviewType } from './enums';
import ImagesPreview from './ImagesPreview';

const LABELS: Record<LabelsKeys, string> = {
  errorLoadingPage: 'There Was an Error Loading This Page',
  page: 'Page',
  downloadFailedMsg: 'The file does not exist',
  couldNotGeneratePreview: 'Could Not Generate Preview',
  noPreviewAvailable: 'No Preview Available',
  previewPasswordProtected: 'Preview Password Protected',
  corruptedFile: 'Corrupted File',
};

export default function MPreviewFile(props: PreviewFileProps): JSX.Element {
  const {
    artifactId,
    previewData,
    artifactName,
    artifactExtension,
    totalPages,
    onPreviewImageScrolled,
    onDownloadClick,
    onDownloadFailed,
    onClose,
    errorCode,
    labels = {},
    supportedRotationExtensions,
  } = props;

  const [loading, setLoading] = useState<boolean>(true);

  const imageContainerRef = useRef<HTMLDivElement>();

  const unifiedLabels = useMemo(() => ({ ...LABELS, ...labels }), [labels]);

  useEffect(() => {
    const hasImagesData =
      (previewData?.type === PreviewType.BASE_64_IMAGE && previewData?.data?.length) ||
      (previewData?.type === PreviewType.IMAGE_URL && previewData?.data);
    const hasVideoData = previewData?.type === PreviewType.VIDEO && previewData?.data;
    if (hasImagesData || hasVideoData || errorCode) {
      setLoading(false);
    }
  }, [previewData, setLoading, errorCode]);

  const handleClose = useCallback(() => {
    setLoading(true);
    onClose?.();
  }, [onClose]);

  return (
    <>
      {artifactId && (
        <PageBackdrop open>
          {loading && <Loading color="inherit" />}
          <PageContainer container direction="column" alignItems="center">
            <TopBarRoot item xs={12}>
              <PreviewTopBar
                onBackClick={handleClose}
                printContainer={imageContainerRef?.current}
                disabled={loading}
                showPrintButton={previewData.type !== PreviewType.VIDEO}
                artifactId={artifactId}
                artifactName={artifactName}
                artifactExtension={artifactExtension}
                onDownloadClick={onDownloadClick}
                onDownloadFailed={onDownloadFailed}
              />
            </TopBarRoot>
            <Box sx={{ height: '100%' }} onClick={handleClose}>
              {(errorCode && <PreviewError errorCode={errorCode} labels={unifiedLabels} />) ||
                (previewData.type === PreviewType.VIDEO ? (
                  <StyledVideo onClick={(e) => e.stopPropagation()} data-testid="video-wrapper">
                    <video
                      width="100%"
                      height="100%"
                      playsInline
                      controls
                      autoPlay={previewData.autoPlay || false}
                      controlsList="nodownload"
                    >
                      <source src={previewData.data} type={previewData.mediaType} />
                    </video>
                  </StyledVideo>
                ) : (
                  <ImagesPreview
                    ref={imageContainerRef as ForwardedRef<HTMLDivElement>}
                    previewData={previewData}
                    totalPages={totalPages}
                    artifactExtension={artifactExtension}
                    supportedRotationExtensions={supportedRotationExtensions}
                    onPreviewImageScrolled={onPreviewImageScrolled}
                  />
                ))}
            </Box>
          </PageContainer>
        </PageBackdrop>
      )}
    </>
  );
}
