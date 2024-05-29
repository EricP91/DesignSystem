import { Backdrop, Box, CircularProgress, Divider, Grid, Stack, Typography, alpha, styled } from '@mui/material';
import { BottomBarStyledProps, ImageContainerProps, PreviewImageProps } from './types';

export const PageBackdrop = styled(Backdrop)(({ theme }) => ({
  background: alpha(theme.palette.grey[1300], 0.9),
  alignItems: 'baseline',
  color: theme.palette.grey[0],
  opacity: 0.9,
  zIndex: theme.zIndex.drawer + 1,
}));

export const Loading = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '50%',
}));

export const PageContainer = styled(Grid)(() => ({
  height: '100%',
  display: 'block',
}));

export const TopBarRoot = styled(Grid)(({ theme }) => ({
  height: 80,
  width: '100%',
  backgroundColor: theme.palette.grey[1300],
  padding: theme.spacing(2.5, 3),
}));

export const TopBar = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

export const ImageSection = styled(Grid)(() => ({
  height: 'calc(100% - 80px)',
  overflow: 'auto',
}));

export const ImageContainer = styled(Box)<ImageContainerProps>(({ theme, origin, animation }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transformStyle: 'flat',
  transformOrigin: origin,
  animation: `${animation} .3s forwards`,
  '& img': {
    background: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
    width: 765,
  },
}));

export const PreviewImg = styled(Typography)(() => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
}));

export const PreviewImage = styled(Box)<PreviewImageProps>(({ hasError }) => ({
  ...(hasError && { height: 2 }),
}));

export const ErrorImageText = styled(Typography)(({ theme }) => ({
  height: 68,
  fontWeight: 700,
  fontSize: 28,
  lineHeight: '32px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: theme.palette.secondary.main,
}));

export const ErrorIconContainer = styled(Grid)(() => ({
  flexDirection: 'column',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ErrorText = styled(Typography)(() => ({
  fontSize: 24,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '32px',
}));

export const BottomBar = styled(Grid, { shouldForwardProp: (prop) => prop !== 'withRotation' })<BottomBarStyledProps>(
  ({ theme, withRotation }) => ({
    width: 254,
    paddingLeft: theme.spacing(2),
    height: 40,
    alignItems: 'center',
    gap: theme.spacing(2.1),
    position: 'fixed',
    bottom: 20,
    flexDirection: 'row',
    background: '#000',
    borderRadius: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    '& button': {
      padding: 0,
    },
    ...(withRotation ? { width: 325 } : {}),
  })
);

export const BottomBarText = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 500,
}));

export const SectionsDivider = styled(Divider)(({ theme }) => ({
  height: 40,
  background: theme.palette.secondary.main,
}));

export const StyledVideo = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  margin: `${theme.spacing(2)} auto`,
  height: `calc(100vh - 80px - ${theme.spacing(4)})`,
}));
