import React, { useCallback, useMemo } from 'react';
import { IconButton, Stack, styled } from '@mui/material';
import { PreviewTopBarProps } from './types';
import {
  ArrowIcon,
  DownloadIcon,
  PrintIcon,
  ExcelFileTypeIcon,
  ZIPFileTypeIcon,
  PDFFileTypeIcon,
  UFDFileTypeIcon,
  PPTFileTypeIcon,
  WordFileTypeIcon,
  UFDRFileTypeIcon,
  VideoFileTypeIcon,
  ImageFileTypeIcon,
} from '../../assets/icons';

const DownloadIconBox = styled(DownloadIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: 40,
  width: 40,
  borderRadius: '50%',
}));

const Title = styled(Stack)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: 'Roboto',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '24px',
  flex: 1,
}));

const TopBar = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

export default function PreviewTopBar(props: PreviewTopBarProps): JSX.Element {
  const {
    onBackClick,
    printContainer,
    disabled,
    onDownloadClick,
    artifactId,
    artifactName,
    artifactExtension,
    onDownloadFailed,
    showPrintButton,
  } = props;
  const canDownload = useMemo(() => !!onDownloadClick, [onDownloadClick]);

  const fileTypeIcon: Record<string, JSX.Element> = useMemo(
    () => ({
      ufdr: <UFDRFileTypeIcon />,
      ppt: <PPTFileTypeIcon />,
      doc: <WordFileTypeIcon />,
      pdf: <PDFFileTypeIcon />,
      ufd: <UFDFileTypeIcon />,
      xls: <ExcelFileTypeIcon />,
      zip: <ZIPFileTypeIcon />,
      mp4: <VideoFileTypeIcon />,
      webm: <VideoFileTypeIcon />,
      jpeg: <ImageFileTypeIcon />,
      jpg: <ImageFileTypeIcon />,
      png: <ImageFileTypeIcon />,
    }),
    []
  );

  const handleDownloadClick = useCallback(async (): Promise<void> => {
    try {
      if (!artifactId || !onDownloadClick) {
        return;
      }
      await onDownloadClick(artifactId as string);
    } catch (err) {
      if (onDownloadFailed) {
        onDownloadFailed(artifactId, err);
      }
    }
  }, [artifactId, onDownloadFailed, onDownloadClick]);

  const onIframeLoad = useCallback((htmlContainer: HTMLElement, iframe: HTMLIFrameElement, tagName: string): void => {
    const body = iframe.contentDocument?.body;
    if (body) {
      if (tagName) {
        const elements = htmlContainer.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i].cloneNode();
          body.appendChild(element);
        }
      } else {
        body.appendChild(htmlContainer);
      }
      setTimeout(() => {
        iframe.contentWindow?.print();
      }, 0);
    }
  }, []);

  const handlePrintClick = useCallback(
    async (htmlContainer): Promise<void> => {
      if (htmlContainer) {
        const tagName = 'img';
        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-testid', 'print-iframe');
        iframe.setAttribute('srcdoc', '<html><body></body></html>');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const onAfterPrint = (): void => {
          iframe.parentNode?.removeChild(iframe);
        };

        iframe.addEventListener('load', () => onIframeLoad(htmlContainer, iframe, tagName));
        iframe.contentWindow?.addEventListener('afterprint', onAfterPrint);
      }
    },
    [onIframeLoad]
  );

  return (
    <TopBar data-testid="preview-top-bar">
      <BackButton onClick={onBackClick} data-testid="close-preview-button">
        <ArrowIcon />
      </BackButton>
      <Stack>{fileTypeIcon[artifactExtension] || <></>}</Stack>
      <Title data-testid="preview-file-name">{artifactName}</Title>
      <Stack>
        {showPrintButton && (
          <IconButton
            onClick={() => handlePrintClick(printContainer)}
            disabled={disabled || !canDownload}
            data-testid="print-file-button"
          >
            <PrintIcon />
          </IconButton>
        )}
      </Stack>
      <Stack>
        <IconButton
          onClick={handleDownloadClick}
          disabled={disabled || !canDownload}
          data-testid="download-file-button"
        >
          <DownloadIconBox />
        </IconButton>
      </Stack>
    </TopBar>
  );
}
