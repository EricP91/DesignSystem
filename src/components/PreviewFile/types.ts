import { Keyframes } from '@emotion/react';
import { PreviewErrorCodes, PreviewType } from './enums';

export type PreviewTopBarProps = {
  onBackClick: () => void;
  artifactId: string;
  artifactName: string;
  artifactExtension: string;
  onDownloadClick?: (artifactId: string) => void;
  printContainer?: HTMLElement;
  disabled?: boolean;
  onDownloadFailed?: (artifactId: string, error: unknown) => void;
  showPrintButton?: boolean;
};

export type PreviewBottomBarProps = {
  currentPage: number;
  totalPages: number;
  onZoomClick: (zoom: number) => void;
  onRotateClick?: () => void;
  labels: Record<string, string>;
};

export type RotateData = {
  index: number;
  rotation: number;
};

export type VideoPreview = {
  type: PreviewType.VIDEO;
  data: string;
  mediaType: string;
  autoPlay?: boolean;
};

export type Base64ImagesPreview = {
  type: PreviewType.BASE_64_IMAGE;
  data: string[];
};

export type ImagePreview = {
  type: PreviewType.IMAGE_URL;
  data: string;
};
export type PreviewData = Base64ImagesPreview | ImagePreview | VideoPreview;

export type PreviewFileProps = {
  artifactId: string;
  artifactName: string;
  previewData: PreviewData;
  artifactExtension: string;
  totalPages: number;
  onPreviewImageScrolled: (index: number) => void;
  errorCode?: PreviewErrorCodes;
  onDownloadClick?: (artifactId: string) => Promise<void>;
  onDownloadFailed?: (artifactId: string, err: unknown) => void;
  labels?: Partial<Record<LabelsKeys, string>>;
  onClose?: () => void;
  supportedRotationExtensions?: string[];
};

export type ImagePreviewProps = {
  previewData: Base64ImagesPreview | ImagePreview;
  totalPages: number;
  errorCode?: PreviewErrorCodes;
  labels?: Partial<Record<LabelsKeys, string>>;
  supportedRotationExtensions?: string[];
  artifactExtension: string;
  onPreviewImageScrolled: (index: number) => void;
};

export type BottomBarStyledProps = {
  withRotation: boolean;
};

export type PreviewImageProps = {
  hasError?: boolean;
  src: string;
};

export type ImageContainerProps = {
  origin: string;
  animation: Keyframes | undefined;
};

export type LabelsKeys =
  | 'errorLoadingPage'
  | 'page'
  | 'downloadFailedMsg'
  | 'couldNotGeneratePreview'
  | 'noPreviewAvailable'
  | 'previewPasswordProtected'
  | 'corruptedFile';

export type ImageLabelRecord = Partial<Record<PreviewErrorCodes, { image: JSX.Element; label: string }>>;
