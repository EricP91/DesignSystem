import React from 'react';
import { Alert, AlertProps } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import { AlertErrorIcon } from '../../assets/icons/AlertErrorIcon';
import { AlertSuccessIcon } from '../../assets/icons/AlertSuccessIcon';
import { AlertWarningIcon } from '../../assets/icons/AlertWarningIcon';
import { AlertInfoIcon } from '../../assets/icons/AlertInfoIcon';
import { pxToRem } from '../../theme/utils/formatFontSize';

const SEVERITY_OPTIONS = { SUCCESS: 'success', INFO: 'info', WARNING: 'warning', ERROR: 'error' };

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    minHeight: 56,
    height: 'auto',
    fontSize: pxToRem(14),
    lineHeight: pxToRem(24),
    fontWeight: 400,
  },
  alertMessage: {
    width: '100%',
  },
  success: {
    backgroundColor: theme.palette.green[100],
  },
  info: {
    backgroundColor: theme.palette.blue[100],
  },
  warning: {
    backgroundColor: theme.palette.orange[800],
  },
  error: {
    backgroundColor: theme.palette.red[700],
  },
  iconPadding: {
    paddingRight: theme.spacing(1),
    marginRight: 0,
  },
}));

const severityIcon = {
  success: <AlertSuccessIcon />,
  info: <AlertInfoIcon />,
  warning: <AlertWarningIcon />,
  error: <AlertErrorIcon />,
};

export default function MAlert(props: AlertProps): JSX.Element {
  const { className, severity } = props;
  const classes = useStyles();
  const classNames = {
    [classes.root]: true,
    [classes.success]: severity === SEVERITY_OPTIONS.SUCCESS,
    [classes.info]: severity === SEVERITY_OPTIONS.INFO,
    [classes.warning]: severity === SEVERITY_OPTIONS.WARNING,
    [classes.error]: severity === SEVERITY_OPTIONS.ERROR,
    [className as string]: Boolean(className),
  };
  const icon = severityIcon[severity || 'info'];
  return (
    <Alert
      data-testid="alert-element"
      icon={icon}
      classes={{ icon: classes.iconPadding, message: classes.alertMessage }}
      {...props}
      className={clsx(classNames)}
    />
  );
}
