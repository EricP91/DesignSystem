import * as React from 'react';
import { isFragment } from 'react-is';
import clsx from 'clsx';
import { deepmerge } from '@mui/utils';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { experimentalStyled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Avatar, Badge, useThemeProps } from '@mui/material';

import avatarGroupClasses, { getAvatarGroupUtilityClass } from '@mui/material/AvatarGroup/avatarGroupClasses';

const SPACINGS = {
  small: -16,
  medium: -8,
};

const overridesResolver = (_props: any, styles: any) =>
  deepmerge(
    {
      [`& .${avatarGroupClasses.avatar}`]: styles.avatar,
    },
    styles.root || {}
  );

const useUtilityClasses = (styleProps: any) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    avatar: ['avatar'],
  };

  return composeClasses(slots, getAvatarGroupUtilityClass, classes);
};

const AvatarGroupRoot = experimentalStyled('div', {
  name: 'MuiAvatarGroup',
  slot: 'Root',
  overridesResolver,
})(({ theme }: any) => ({
  [`& .MuiAvatar-root`]: {
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:last-child': {
      marginLeft: 0,
      borderLeft: 0,
    },
  },
  /* Styles applied to the root element. */
  display: 'flex',
  flexDirection: 'row-reverse',
}));
interface CustomThemeProps {
  className: string;
  max: number;
  spacing: 'small' | 'medium';
  variant: 'square' | 'circular' | 'rounded' | undefined;
  other: unknown;
  children: React.ReactNode;
  handleClickOnExtraAvatars?: () => void;
  numberOfAllContacts?: number;
  badgeContent?: React.ReactNode | number | string;
}

const AvatarGroup = React.forwardRef(function AvatarGroup(
  inProps: Partial<CustomThemeProps>,
  ref: React.Ref<HTMLDivElement> | null
) {
  const props: Partial<CustomThemeProps> = useThemeProps({
    props: inProps,
    name: 'MuiAvatarGroup',
  });
  const {
    children: childrenProp,
    className,
    max = 5,
    spacing = 'medium',
    variant = 'circular',
    badgeContent = 0,
    handleClickOnExtraAvatars,
    numberOfAllContacts,
    ...other
  } = props;

  const GroupAvatar = experimentalStyled(Avatar, {
    name: 'MuiAvatarGroup',
    slot: 'Avatar',
  })(({ theme }: any) => ({
    border: `2px solid ${theme.palette.background.default}`,
    boxSizing: 'content-box',
    marginLeft: -8,
    '&:last-child': {
      marginLeft: 0,
    },
    cursor: handleClickOnExtraAvatars ? 'pointer' : 'default',
  }));

  const clampedMax = max < 2 ? 2 : max;

  const styleProps = {
    ...props,
    max,
    spacing,
    variant,
  };

  const classes = useUtilityClasses(styleProps);

  const children = React.Children.toArray(childrenProp).filter((child) => {
    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(
          [
            "Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n')
        );
      }
    }

    return React.isValidElement(child);
  });

  const numberOfAllContactsAvatar = numberOfAllContacts ?? children.length;

  const extraAvatars = numberOfAllContactsAvatar > clampedMax ? numberOfAllContactsAvatar - clampedMax + 1 : 0;

  const marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;
  const useStyles = makeStyles(() => ({
    leftMargin: { marginLeft },
  }));
  const customClasses = useStyles();

  return (
    <AvatarGroupRoot className={clsx(classes.root, className)} ref={ref} {...other}>
      <Badge
        className={clsx(className, 'avatarBadge')}
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={badgeContent}
        data-testid="avatar-badge"
      >
        {extraAvatars ? (
          <GroupAvatar
            data-testid="group-extra-avatar"
            className={`${classes.avatar} ${customClasses.leftMargin} MuiAvatarGroup-extra-avatar`}
            variant={variant}
            onClick={handleClickOnExtraAvatars}
          >
            {extraAvatars}
          </GroupAvatar>
        ) : (
          children.slice(0, 1).map((child: any) =>
            React.cloneElement(child, {
              className: clsx(child.props.className, classes.avatar),
              style: {
                marginLeft,
                ...child.props.style,
              },
              variant: child.props.variant || variant,
            })
          )
        )}
      </Badge>
      {children
        .slice(extraAvatars ? 0 : 1, numberOfAllContactsAvatar - extraAvatars)
        .reverse()
        .map((child: any) =>
          React.cloneElement(child, {
            className: clsx(child.props.className, classes.avatar),
            style: {
              marginLeft,
              ...child.props.style,
            },
            variant: child.props.variant || variant,
          })
        )}
    </AvatarGroupRoot>
  );
});

export default AvatarGroup;
