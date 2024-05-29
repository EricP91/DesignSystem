import { Typography, TypographyProps } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import escapeRegExp from 'lodash/escapeRegExp';
import { v4 as uuid } from 'uuid';

export interface HighlightedTextProps extends TypographyProps {
  highlight?: string;
  highlightClass?: string;
  children: string | null;
  highlightComponent?: React.FC;
}
interface HighlightComponentProps {
  className: string;
  children: React.ReactNode;
}

const DefaultHighlightComponent = (props: HighlightComponentProps): JSX.Element => <span {...props} />;

function HighlightedText({
  highlight,
  highlightClass,
  children,
  highlightComponent: HighlightComponent,
  ...otherProps
}: HighlightedTextProps): JSX.Element | null {
  if (!children) {
    return null;
  }
  const matches = children.split(new RegExp(`(${escapeRegExp(highlight ?? '')})`, 'gi'));
  const Component = HighlightComponent ?? DefaultHighlightComponent;

  return (
    <Typography {...otherProps}>
      {highlight
        ? matches.map((match) => (
            <Component
              key={uuid()}
              className={clsx(otherProps.className, match.toLowerCase() === highlight.toLowerCase() && highlightClass)}
            >
              {match}
            </Component>
          ))
        : children}
    </Typography>
  );
}

export default HighlightedText;
