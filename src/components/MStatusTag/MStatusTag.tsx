import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Box, Chip, ChipProps, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { defaultLabels, UPLOAD_STATUS } from './constants';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  chip: {
    height: 24,
    backgroundColor: 'transparent',
    '& span.MuiChip-label': {
      marginTop: 0,
      '& p': {
        fontWeight: 700,
      },
    },
  },
  error: {
    backgroundColor: theme.palette.red[1100],
    color: theme.palette.common.white,
  },
  cancelled: {
    backgroundColor: theme.palette.grey[1500],
    color: theme.palette.common.white,
  },
  success: {
    backgroundColor: theme.palette.green[800],
    color: theme.palette.common.white,
  },
  progress: {
    marginRight: theme.spacing(1.5),
  },
  paused: {
    backgroundColor: theme.palette.orange[700],
    color: theme.palette.common.white,
  },
}));

export type MStatusTagProps = {
  status?: UPLOAD_STATUS;
  className?: string;
  label?: string;
  progressComponent?: JSX.Element;
  chipProps?: ChipProps;
  progressContainerClassName?: string;
};

export default function MStatusTag({
  status = UPLOAD_STATUS.FAILED,
  label,
  className,
  progressComponent,
  chipProps,
  progressContainerClassName,
}: MStatusTagProps): JSX.Element {
  const classes = useStyles();
  const classNames = {
    [classes.cancelled]: status === UPLOAD_STATUS.CANCELLED,
    [classes.error]: status === UPLOAD_STATUS.FAILED,
    [classes.success]: status === UPLOAD_STATUS.COMPLETED,
    [classes.chip]: true,
    [classes.paused]: status === UPLOAD_STATUS.PAUSED,
    [className as string]: Boolean(className),
  };

  const labelToPrint = useMemo(() => label || defaultLabels[status], [label, status]);

  const showProgress = status === UPLOAD_STATUS.UPLOADING || status === UPLOAD_STATUS.PROCESSING;
  return showProgress ? (
    <Box {...(progressContainerClassName ? { className: progressContainerClassName } : {})}>
      {progressComponent || <CircularProgress size={16} className={classes.progress} data-testid="progress-element" />}
      {labelToPrint}
    </Box>
  ) : (
    <Chip data-testid="status-tag-chip-element" className={clsx(classNames)} label={labelToPrint} {...chipProps} />
  );
}
