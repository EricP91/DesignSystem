import { StepContent, Stepper, styled, Typography } from '@mui/material';

export const IconInnerCircleStyled = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'completed',
})<{ active: boolean }>(({ theme, active }) => ({
  height: 32,
  width: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  ...(active && {
    backgroundColor: theme.palette.ui.brand,
    '& svg > path': {
      fill: theme.palette.ui.light,
    },
  }),
}));

export const IconOuterCircleStyled = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'completed',
})<{ active: boolean; completed?: boolean }>(({ theme, active, completed }) => ({
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ADB9BF',
  marginLeft: '-8px',
  borderRadius: '50%',
  ...(active && { borderColor: theme.palette.ui.brand }),
  '& svg > path': {
    fill: theme.palette.ui.mutedDark,
  },
  ...(completed && {
    borderColor: theme.palette.ui.positive,
    backgroundColor: theme.palette.ui.positiveLightest,
    '& svg > path': {
      fill: theme.palette.ui.positive,
    },
  }),
}));

export const StepperStyled = styled(Stepper)(({ theme }) => ({
  width: 256,
  '& .MuiStepConnector-lineVertical': {
    borderColor: theme.palette.ui.mutedLightest,
    minHeight: 64,
  },
  '& .MuiStepContent-root': {
    paddingLeft: theme.spacing(3.5),
  },
}));

export const StepContentStyled = styled(StepContent)(({ theme }) => ({
  ...theme.typography.text,
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.ui.mutedShady,
}));

export const SubTitleStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  color: theme.palette.ui.mutedShady,
  ...(active ? { color: theme.palette.ui.brandDark } : {}),
}));
