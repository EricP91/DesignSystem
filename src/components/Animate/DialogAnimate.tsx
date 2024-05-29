import { Dialog, PaperProps as MuiPaperProps } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { MTheme } from '../../theme';
import { varFadeInUp } from './variants';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {},
  paper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface DialogAnimateProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

function DialogAnimate({ open = false, onClose, children, className, ...other }: DialogAnimateProps): JSX.Element {
  const classes = useStyles();
  const PaperComponent = motion.div;
  const PaperProps = { ...varFadeInUp };
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={PaperComponent as React.JSXElementConstructor<MuiPaperProps>}
          PaperProps={PaperProps as MuiPaperProps}
          classes={{ paper: classes.paper }}
          className={clsx(classes.root, className)}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default DialogAnimate;
