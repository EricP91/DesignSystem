import React, { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import Tile, { TileProps } from './Tile';

export interface CounterTileProps extends TileProps {
  header: string | ReactNode;
  count: number | ReactNode;
}

const StackStyled = styled(Stack)(() => ({
  height: '100%',
}));

const CounterContainerStyled = styled('div')(() => ({
  marginTop: 'auto',
}));

const CounterTypographyStyled = styled(Typography)(({ theme, color }) => ({
  ...(color === 'error' ? { color: theme.palette.ui.negativeLight } : {}),
}));

const CounterTile = ({ header, count, color, ...props }: CounterTileProps): JSX.Element => (
  <Tile color={color} {...props}>
    <StackStyled>
      {isString(header) ? <Typography variant="largeMedium">{header}</Typography> : header}
      <CounterContainerStyled>
        {isNumber(count) ? (
          <CounterTypographyStyled color={color} variant="xxxLargeBold">
            {count}
          </CounterTypographyStyled>
        ) : (
          count
        )}
      </CounterContainerStyled>
    </StackStyled>
  </Tile>
);

export default CounterTile;
