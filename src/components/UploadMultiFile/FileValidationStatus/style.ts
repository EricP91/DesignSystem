import { Popover, Typography, styled } from '@mui/material';
import MButton from '../../Button/MButton';
import InlineSpinner from '../../Spinners/InlineSpinner';

export const StatusTextStyled = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1, 0, 0.5),
}));

export const ActionButtonStyled = styled(MButton)(() => ({
  minWidth: 'auto',
}));

export const PopoverStyled = styled(Popover)(({ theme }) => ({
  fontSize: theme.typography.text.fontSize,
  lineHeight: theme.typography.text.lineHeight,
  '& .MuiPaper-root': {
    padding: theme.spacing(1),
    marginTop: 0,
  },
}));

export const StyledSpinner = styled(InlineSpinner)(({ theme }) => ({
  padding: theme.spacing(0.75),
}));
