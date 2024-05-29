import React, { useCallback } from 'react';
import { Grid, IconButton } from '@mui/material';
import { PreviewBottomBarProps } from './types';
import { MinusIcon, PlusIcon, RotateRightIcon, ZoomInIcon } from '../../assets/icons';

import { BottomBar, BottomBarText, SectionsDivider } from './PreviewStyled';

const ZOOM_IN = 'zoom-in';
const ZOOM_OUT = 'zoom-out';
const PREVIEW_ZOOM_STEP = 0.1;

export default function PreviewBottomBar(props: PreviewBottomBarProps): JSX.Element {
  const { currentPage, totalPages, onRotateClick, onZoomClick, labels } = props;

  const handleZoomClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const targetId = event.currentTarget.id;
      if (!targetId) {
        onZoomClick(0);
      }
      onZoomClick(targetId === ZOOM_IN ? PREVIEW_ZOOM_STEP : -PREVIEW_ZOOM_STEP);
    },
    [onZoomClick]
  );

  return (
    <BottomBar
      onClick={(e) => e.stopPropagation()}
      container
      withRotation={!!onRotateClick}
      data-testid="preview-bottom-bar"
    >
      <Grid item>
        <BottomBarText>{labels.page}</BottomBarText>
      </Grid>
      <Grid item>
        <BottomBarText>{currentPage}</BottomBarText>
      </Grid>
      <Grid item>
        <BottomBarText>/</BottomBarText>
      </Grid>
      <Grid item>
        <BottomBarText>{totalPages}</BottomBarText>
      </Grid>
      {!!onRotateClick && (
        <>
          <Grid item>
            <SectionsDivider orientation="vertical" light />
          </Grid>
          <Grid item>
            <IconButton onClick={onRotateClick} data-testid="rotate-image-button">
              <RotateRightIcon />
            </IconButton>
          </Grid>
        </>
      )}
      <Grid item>
        <SectionsDivider orientation="vertical" light />
      </Grid>
      <Grid item>
        <IconButton id={ZOOM_OUT} onClick={handleZoomClick} data-testid="zoom-image-out">
          <MinusIcon />
        </IconButton>
        <IconButton onClick={handleZoomClick} data-testid="zoom-image-reset">
          <ZoomInIcon />
        </IconButton>
        <IconButton id={ZOOM_IN} onClick={handleZoomClick} data-testid="zoom-image-in">
          <PlusIcon fill="white" />
        </IconButton>
      </Grid>
    </BottomBar>
  );
}
