import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';
import DialogAnimate from './DialogAnimate';

export default {
  title: 'Components/Animate',
};

export const DialogAnimation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Start animation
      </Button>
      <DialogAnimate open={isOpen}>
        <DialogTitle>
          <Typography>Animated dialog title</Typography>
        </DialogTitle>
        <DialogContent>Animated dialog content</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close animation
          </Button>
        </DialogActions>
      </DialogAnimate>
    </>
  );
};
