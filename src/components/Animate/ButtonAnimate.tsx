import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { varSmallClick } from './variants';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
  },
}));

interface ButtonAnimateProps {
  small?: boolean;
  children: React.ReactNode;
  className?: string;
}

function ButtonAnimate({ children, className, ...other }: ButtonAnimateProps): JSX.Element {
  const classes = useStyles();

  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={varSmallClick}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </Box>
  );
}

export default ButtonAnimate;
