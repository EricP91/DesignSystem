import { Box } from '@mui/material';
import { motion, Transition, useAnimation, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface MotionInViewProps {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  transition?: Transition;
  triggerOnce?: boolean;
  threshold?: number | number[];
}

function MotionInView({
  children,
  className,
  variants,
  transition,
  threshold,
  ...other
}: MotionInViewProps): JSX.Element {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold ?? 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <Box
      component={motion.div}
      ref={ref}
      initial={Object.keys(variants)[0]}
      animate={controls}
      variants={variants}
      transition={transition}
      className={className}
      {...other}
    >
      {children}
    </Box>
  );
}

export default MotionInView;
