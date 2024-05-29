import React from 'react';
import clsx from 'clsx';
import { Box, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../../theme';
import { MicrophoneIcon, PlayVideoIcon } from '../../../assets/icons';

export interface ReplyMessageProps {
  title: React.ReactNode;
  children: React.ReactNode;
  imageSrc?: string;
  showImageLoader?: boolean;
  shouldUseRootStyle?: boolean;
  onClick?: () => void;
  type?: 'image' | 'video' | 'audio' | 'file';
  audioTextFallback?: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    backgroundColor: theme.palette.grey[500_12],
    width: '100%',
    padding: theme.spacing(0.75),
    borderRadius: theme.spacing(1),
    borderLeft: `4px solid ${theme.palette.grey[500]}`,
    cursor: 'pointer',
    '&.imageContainer': {
      minHeight: 119,
    },
  },
  italic: {
    ...theme.typography.italic2,
  },
  imageContainer: {
    height: 100,
    width: 100,
    float: 'right',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  audioContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  audioIcon: {
    marginRight: theme.spacing(0.5),
  },
}));

function ReplyMessage({
  title,
  children,
  imageSrc,
  showImageLoader = false,
  onClick,
  shouldUseRootStyle = true,
  type,
  audioTextFallback,
}: ReplyMessageProps): JSX.Element {
  const classes = useStyles();
  const showImageContainer = (imageSrc || showImageLoader) && (type === 'image' || type === 'video');
  return (
    <Box
      className={clsx(shouldUseRootStyle && classes.root, showImageContainer && 'imageContainer')}
      data-testid="reply-message"
      onClick={onClick}
    >
      {showImageContainer ? (
        <Box className={classes.imageContainer}>
          {imageSrc && <img data-testid="reply-image" className={classes.image} src={imageSrc} alt="thumbnail" />}
          {showImageLoader && !imageSrc && (
            <Box data-testid="spinner" className={classes.spinner}>
              <CircularProgress />
            </Box>
          )}
          {imageSrc && type === 'video' ? (
            <div className={classes.videoOverlay}>
              <PlayVideoIcon fontSize="large" data-testid="video-play-button" />
            </div>
          ) : null}
        </Box>
      ) : null}
      <Typography display="inline" className={classes.italic}>
        {title}
      </Typography>
      <br />
      <Typography variant="body2">{children}</Typography>
      {type === 'audio' ? (
        <div className={classes.audioContainer}>
          <MicrophoneIcon className={classes.audioIcon} />
          <Typography variant="body2">{audioTextFallback}</Typography>
        </div>
      ) : null}
    </Box>
  );
}

export default ReplyMessage;
