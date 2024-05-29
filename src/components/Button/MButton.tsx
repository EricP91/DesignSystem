import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { makeStyles } from '@mui/styles';
import { capitalize } from '@mui/material/utils';
import { alpha, Button, ButtonProps, ButtonPropsVariantOverrides } from '@mui/material';
import { ClassNameMap } from '@mui/styles';
import { OverridableStringUnion } from '@mui/types';
import { MTheme } from '../../theme';
import { ButtonPropsColorOverrides } from '@mui/material/Button/Button';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: MTheme) => {
  const styleContained = (color: string) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color].dark,
    },
  });

  const styleOutlined = (color: string) => ({
    color: theme.palette[color].main,
    border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
    '&:hover': {
      border: `1px solid ${theme.palette[color].main}`,
      backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
    },
    '&:active': {
      backgroundColor: theme.palette[color].dark,
      color: theme.palette[color].contrastText,
    },
  });

  const textOutlined = (color: string) => ({
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
    },
  });
  return {
    // Contained
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    containedWhite: {
      color: theme.palette.getContrastText(theme.palette.common.white),
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[300],
      },
    },
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Text
    textInfo: textOutlined('info'),
    textSuccess: textOutlined('success'),
    textWarning: textOutlined('warning'),
    textError: textOutlined('error'),
  };
});

// ----------------------------------------------------------------------

export interface MButtonProps extends Omit<ButtonProps, 'color' | 'variant' | 'css'> {
  color: OverridableStringUnion<
    'primary' | 'info' | 'warning' | 'inherit' | 'success' | 'secondary' | 'error',
    ButtonPropsColorOverrides
  >;
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>;
}

const MButton = forwardRef<HTMLButtonElement, Partial<MButtonProps>>(
  ({ color = 'primary', variant = 'text', children, className, ...other }, ref) => {
    const classes: ClassNameMap<
      | 'textError'
      | 'outlinedInfo'
      | 'outlinedError'
      | 'containedWhite'
      | 'outlinedSuccess'
      | 'textSuccess'
      | 'containedInfo'
      | 'textInfo'
      | 'containedSuccess'
      | 'containedError'
      | 'outlinedWarning'
      | 'textWarning'
      | 'containedWarning'
    > & { [key: string]: string } = useStyles();

    if (color === 'inherit' || color === 'primary' || color === 'secondary') {
      return (
        <Button ref={ref} color={color} variant={variant} className={clsx(classes[variant], className)} {...other}>
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        className={clsx(
          classes[variant],
          {
            [classes[`${variant}${capitalize(color)}`]]: color,
          },
          className
        )}
        {...other}
      >
        {children}
      </Button>
    );
  }
);

export default MButton;
