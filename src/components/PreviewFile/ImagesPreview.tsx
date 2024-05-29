import React, { useCallback, useMemo, useState } from 'react';
import { Keyframes, keyframes } from '@emotion/react';
import { InView } from 'react-intersection-observer';
import PreviewBottomBar from './PreviewBottomBar';
import { ImagePreviewProps, LabelsKeys, RotateData } from './types';
import { ErrorImageText, ImageContainer, ImageSection, PreviewImage } from './PreviewStyled';
import { PreviewErrorCodes, PreviewType } from './enums';

const DEFAULT_ZOOM = 1;
const SUPPORT_ROTATION: string[] = ['pdf'];
const MAX_PREVIEW_ZOOM = 2;

const LABELS: Record<LabelsKeys, string> = {
  errorLoadingPage: 'There Was an Error Loading This Page',
  page: 'Page',
  downloadFailedMsg: 'The file does not exist',
  couldNotGeneratePreview: 'Could Not Generate Preview',
  noPreviewAvailable: 'No Preview Available',
  previewPasswordProtected: 'Preview Password Protected',
  corruptedFile: 'Corrupted File',
};

const ImagesPreview = React.forwardRef(
  (props: ImagePreviewProps, ref: React.Ref<HTMLDivElement> | null): JSX.Element => {
    const {
      previewData,
      totalPages,
      labels = {},
      supportedRotationExtensions,
      artifactExtension,
      onPreviewImageScrolled,
    } = props;
    const [imgIndex, setImgIndex] = useState<number>(0);
    const [rotate, setRotate] = useState<RotateData[]>([]);
    const [, setZoom] = useState<number>(DEFAULT_ZOOM);
    const [zoomAnimation, setZoomAnimation] = useState<Keyframes>();
    const [intersectionRatio, setIntersectionRatio] = useState<number>(0);

    const unifiedLabels = useMemo(() => ({ ...LABELS, ...labels }), [labels]);

    const handleRotateClick = useCallback(() => {
      setRotate((prev) => {
        const newRotate = [...prev];
        const itemIndex = prev.findIndex((item) => item.index === imgIndex);
        if (itemIndex === -1) {
          newRotate.push({ index: imgIndex, rotation: 90 });
        } else {
          newRotate[itemIndex].rotation = prev[itemIndex].rotation + 90;
        }
        return newRotate;
      });
    }, [imgIndex]);

    const handleImageInView = useCallback(
      (index: number, inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView) {
          const inViewImageChanged = imgIndex !== index && entry.intersectionRatio > intersectionRatio;
          if (inViewImageChanged) {
            if (imgIndex < index) {
              onPreviewImageScrolled(index + 1);
            }
            setImgIndex(index);
            setIntersectionRatio(intersectionRatio);
          }
          setIntersectionRatio(entry.intersectionRatio);
        }
      },
      [imgIndex, onPreviewImageScrolled, intersectionRatio]
    );

    const supportRotation = useMemo(() => {
      const supportedRotations = supportedRotationExtensions || SUPPORT_ROTATION;
      return supportedRotations.includes(artifactExtension);
    }, [artifactExtension, supportedRotationExtensions]);

    const getZoom = useCallback((prev: number, zoom: number) => {
      if (zoom !== 0) {
        const newZoom = prev + zoom;
        if (newZoom >= MAX_PREVIEW_ZOOM) {
          return MAX_PREVIEW_ZOOM;
        }
        if (newZoom <= DEFAULT_ZOOM) {
          return DEFAULT_ZOOM;
        }
        return newZoom;
      }
      return DEFAULT_ZOOM;
    }, []);

    const handleZoomClick = useCallback(
      (zoom: number) => {
        setZoom((prev) => {
          const result = getZoom(prev, zoom);

          setZoomAnimation(keyframes`
       0% {
         transform: scale(${prev});
       }
       100% {
         transform: scale(${result});
       }
     `);

          return result;
        });
      },
      [getZoom]
    );

    const data = Array.isArray(previewData.data) ? previewData.data : [previewData.data];

    return (
      <ImageSection item xs={12} data-testid="preview-scroll-container" ref={ref}>
        <ImageContainer origin="center center" data-testid="preview-image-container" animation={zoomAnimation}>
          {data.map((item, index) => {
            const hasError =
              previewData.type === PreviewType.BASE_64_IMAGE && atob(item) === PreviewErrorCodes.CORRUPTED_FILE;
            return (
              <InView
                key={`${new Date().getTime()}_${Math.random()}`}
                onChange={(inView: boolean, entry: IntersectionObserverEntry) =>
                  handleImageInView(index, inView, entry)
                }
              >
                {(el: { ref: React.Ref<unknown> | undefined }) => (
                  <>
                    <PreviewImage
                      onClick={(e) => e.stopPropagation()}
                      component="img"
                      hasError={hasError}
                      data-index={index}
                      ref={el.ref}
                      sx={{
                        transform: `rotate(${rotate.find((dataItem) => dataItem.index === index)?.rotation || 0}deg)`,
                      }}
                      src={previewData.type === PreviewType.BASE_64_IMAGE ? `data:image/png;base64,${item}` : item}
                    />
                    {hasError && <ErrorImageText>{unifiedLabels.errorLoadingPage}</ErrorImageText>}
                  </>
                )}
              </InView>
            );
          })}
        </ImageContainer>
        <PreviewBottomBar
          currentPage={imgIndex + 1}
          totalPages={totalPages}
          {...(supportRotation ? { onRotateClick: handleRotateClick } : {})}
          onZoomClick={handleZoomClick}
          labels={unifiedLabels}
        />
      </ImageSection>
    );
  }
);
export default ImagesPreview;
