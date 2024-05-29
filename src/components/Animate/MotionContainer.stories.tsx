import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import MotionContainer from './MotionContainer';
import { varFadeInRight } from './variants';

export default {
  title: 'Components/Animate',
};

export const MotionContainerAnimation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'Close animation' : 'Start animation'}
      </Button>
      <MotionContainer open={isOpen}>
        <Box mt={1}>
          <motion.div variants={varFadeInRight}>
            <Typography variant="h3" gutterBottom>
              Animated text 1
            </Typography>
          </motion.div>
          <motion.div variants={varFadeInRight}>
            <Typography variant="body2" noWrap gutterBottom>
              Animated text 2
            </Typography>
          </motion.div>
        </Box>
      </MotionContainer>
    </>
  );
};
