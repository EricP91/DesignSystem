import React, { useEffect, useMemo } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MAlertDialog from '../../Dialog/AlertDialog/MAlertDialog';
import { MTheme } from '../../../theme';
import MButton from '../../Button/MButton';

export type PromptDialogProps = {
  handleKeepAlive: () => void;
  getRemainingTime?: () => number;
  dialogTitle?: string;
  dialogContent?: string;
  keepAliveText?: string;
};

const useStyles = makeStyles((theme: MTheme) => ({
  dialogContainer: {
    zIndex: '99999 !important',
    '& .MuiDialogContent-root': {
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

    '& h2': {
      height: 24,
      display: 'flex',
      justifyContent: 'left',
      flexDirection: 'row-reverse',
      gap: theme.spacing(1.5),
      alignItems: 'center',
    },
  },
  cancelButton: {
    marginRight: 8,
  },
}));

const COUNTING_INTERVAL = 500;

export default function PromptDialog(props: PromptDialogProps): JSX.Element {
  const { handleKeepAlive, dialogTitle, dialogContent, keepAliveText, getRemainingTime } = props;

  const classes = useStyles();
  const [remaining, setRemaining] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = getRemainingTime ? Math.ceil(getRemainingTime() / 1000) : 0;
      setRemaining(val);
    }, COUNTING_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  });

  const dialogContentElement = useMemo((): JSX.Element => {
    const remainingTime = new Date(remaining * 1000).toISOString().slice(14, 19);
    return (
      <Typography component="div" variant="body1" display="inline">
        {dialogContent || `If not , we’ll close this session in :`}
        <Typography component="span" variant="body1" display="inline" sx={{ fontWeight: 'bold' }}>
          {` ${remainingTime}`}
        </Typography>
      </Typography>
    );
  }, [dialogContent, remaining]);
  return (
    <MAlertDialog
      variant="warning"
      data-testid="idle-prompt"
      className={classes.dialogContainer}
      open
      title={dialogTitle || 'Are you still there?'}
      onClose={() => {}}
      content={dialogContentElement}
      showClose={false}
      actions={
        <div>
          <MButton
            color="primary"
            variant="contained"
            data-testid="idle-prompt-keep-button"
            onClick={handleKeepAlive}
            className={classes.cancelButton}
          >
            {keepAliveText || 'i’m here'}
          </MButton>
        </div>
      }
    />
  );
}
