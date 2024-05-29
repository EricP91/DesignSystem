import { DialogActions, DialogContent, IconButton, SxProps, Theme, Typography } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import React from 'react';
import clsx from 'clsx';
import OverflowTooltip from '../Tooltip/OverflowTooltip';
import { CloseIcon } from '../../assets/icons';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  dialogRoot: {
    '& .MuiPaper-root': {
      padding: theme.spacing(4),
    },
  },
  dialogTitle: {
    margin: 0,
    padding: 0,
    width: '90%',
  },
  dialogTitleNoClose: {
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
  },
  dialogContent: {
    margin: `${theme.spacing(2.5)} 0`,
    padding: 0,
  },
  dialogActions: {
    margin: 0,
    padding: 0,
  },
}));

export interface MDialogProps extends Omit<DialogProps, 'title' | 'content'> {
  open: boolean;
  onClose: () => void;
  showClose?: boolean;
  title?: string | React.ReactNode;
  titleElement?: React.ReactNode;
  subtitle?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  className?: string;
  classes?: DialogProps['classes'];
  sx?: SxProps<Theme>;
}

function MDialog({
  open,
  onClose,
  showClose = true,
  title,
  titleElement,
  subtitle,
  content,
  actions,
  maxWidth = false,
  className,
  ...other
}: MDialogProps): JSX.Element {
  const classes = useStyles();
  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={clsx(classes.dialogRoot, className)}
      maxWidth={maxWidth}
      {...other}
      data-testid="dialog"
    >
      <DialogTitle className={clsx(classes.dialogTitle, !showClose && classes.dialogTitleNoClose)}>
        {title && (
          <OverflowTooltip title={title} arrow>
            <Typography variant="h6" noWrap display="inline" data-testid="dialog-title">
              {title}
            </Typography>
          </OverflowTooltip>
        )}
        {titleElement && titleElement}
        {subtitle && (
          <OverflowTooltip title={subtitle} arrow>
            <Typography mt={1.25} noWrap display="inline" data-testid="dialog-subtitle">
              {subtitle}
            </Typography>
          </OverflowTooltip>
        )}
        {showClose && (
          <IconButton onClick={onClose} className={classes.closeButton} data-testid="dialog-close">
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent className={classes.dialogContent} data-testid="dialog-content">
        {content}
      </DialogContent>
      {actions && (
        <DialogActions className={classes.dialogActions} data-testid="dialog-actions">
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default MDialog;
