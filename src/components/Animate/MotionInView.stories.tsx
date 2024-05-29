import { Typography } from '@mui/material';
import React from 'react';
import MotionInView from './MotionInView';
import { varFadeInDown, varFadeInRight, varFadeInUp, varZoomInOut } from './variants';

export default {
  title: 'Components/Animate',
};

const TypographyToAnimate = ({ text }: { text: string }): JSX.Element => (
  <Typography variant="h3" paragraph>
    Animated text with - {text}
  </Typography>
);

export const MotionInViewAnimation = (): JSX.Element => (
  <>
    <MotionInView variants={varFadeInDown}>
      <TypographyToAnimate text="varFadeInDown" />
    </MotionInView>
    <MotionInView variants={varFadeInUp}>
      <TypographyToAnimate text="varFadeInUp" />
    </MotionInView>
    <MotionInView variants={varFadeInRight}>
      <TypographyToAnimate text="varFadeInRight" />
    </MotionInView>
    <MotionInView variants={varZoomInOut}>
      <TypographyToAnimate text="varZoomInOut" />
    </MotionInView>
  </>
);
