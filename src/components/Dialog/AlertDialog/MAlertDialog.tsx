import { Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { MTheme } from 'theme';
import { CheckIcon, DangerIcon, InfoAlertIcon, WarningTriangleIcon } from '../../../assets/icons';
import MDialog, { MDialogProps } from '../MDialog';

const useStyles = makeStyles((theme: MTheme) => ({
  dialogContainer: {
    width: 514,
    height: 224,
    top: 40,
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    '& .MuiDialogContent-root': {
      marginLeft: theme.spacing(4.25),
      marginTop: theme.spacing(),
      fontSize: 14,
    },
    '& .MuiPaper-root': {
      padding: theme.spacing(3),
      margin: 0,
      maxHeight: 'none',
      width: '100%',
      borderRadius: theme.spacing(),
    },
    '& .MuiStack-root': {
      marginLeft: theme.spacing(1.25),
    },
    '& h2': {
      display: 'flex',
      justifyContent: 'left',
      flexDirection: 'row-reverse',
      gap: theme.spacing(1.5),
      alignItems: 'center',
    },
  },
  title: {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxOrient: 'vertical',
    lineClamp: 2,
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    lineHeight: '24px',
  },
}));

export interface MAlertDialogProps extends MDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  content: React.ReactNode | string;
  actions?: React.ReactNode;
  variant: 'error' | 'info' | 'warning' | 'success';
  className?: string;
}

const iconMap = {
  error: <DangerIcon />,
  info: <InfoAlertIcon />,
  warning: <WarningTriangleIcon fill="#FFAE09" />,
  success: <CheckIcon />,
};

function MAlertDialog({
  open,
  onClose,
  title,
  className,
  content,
  actions,
  variant,
  ...other
}: MAlertDialogProps): JSX.Element {
  const classes = useStyles();
  const icon = iconMap[variant] ? iconMap[variant] : iconMap.info;

  return (
    <MDialog
      {...other}
      classes={{ container: classes.dialogContainer, root: className }}
      className={className}
      open={open}
      onClose={onClose}
      title={
        <Stack alignSelf="flex-start" direction="row" spacing={1.25}>
          <Box>{icon}</Box>
          <Box className={classes.title}>{title}</Box>
        </Stack>
      }
      actions={actions}
      content={content}
      data-testid="alert-dialog"
    />
  );
}

export default MAlertDialog;
