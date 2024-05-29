import { Typography } from '@mui/material';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { MButton } from '../index';

const useStyles = makeStyles(() => ({
  root: {
    '&.MuiButton-root': {
      '&:hover': {
        background: 'none',
      },
    },
  },
}));

interface ClearAllButtonProps {
  clearAllButtonText: string;
  onClearAll: () => void;
  disabled?: boolean;
}

function ClearAllButton({
  onClearAll,
  clearAllButtonText = 'Clear all',
  disabled = false,
  ...other
}: ClearAllButtonProps): JSX.Element {
  const classes = useStyles();

  return (
    <MButton
      disabled={disabled}
      className={classes.root}
      disableRipple
      onClick={onClearAll}
      size="small"
      color="primary"
      variant="text"
      {...other}
    >
      <Typography display="inline" variant="body2">
        {clearAllButtonText}
      </Typography>
    </MButton>
  );
}

export default ClearAllButton;
