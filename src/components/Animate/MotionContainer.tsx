import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { varWrapEnter } from './variants';

const useStyles = makeStyles(() => ({
  root: {},
}));

interface MotionContainerProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

function MotionContainer({ open, children, className, ...other }: MotionContainerProps): JSX.Element {
  const classes = useStyles();

  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Box>
  );
}

export default MotionContainer;
