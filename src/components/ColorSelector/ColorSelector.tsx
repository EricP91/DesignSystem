import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import { tagsContainerSize, tagsSize } from '../Features/Tags/TagsConstants';
import { parseColor } from '../../util/colorUtil';

export interface ColorSelectorProps {
  colors: string[];
  columns?: number;
  onSelected: (color: string) => void;
}

interface StyleProps {
  columnsNumber: number;
}

const useStyles = makeStyles((theme: MTheme) => ({
  grid: ({ columnsNumber }: StyleProps) => ({
    width: 'fit-content',
    padding: theme.spacing(1.5),
    display: 'grid',
    gridTemplateColumns: `repeat(${columnsNumber}, ${tagsContainerSize(theme)})`,
    gridAutoRows: tagsContainerSize(theme),
    alignItems: 'center',
    justifyItems: 'center',
    boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 20px 40px -4px rgba(145, 158, 171, 0.24)',
    borderRadius: theme.spacing(1),
  }),
  dot: {
    height: tagsSize(theme),
    width: tagsSize(theme),
    padding: theme.spacing(0.75),
    borderRadius: '50%',
    cursor: 'pointer',
  },
}));

function ColorSelector({ colors, columns = 5, onSelected }: ColorSelectorProps): JSX.Element {
  const classes = useStyles({ columnsNumber: columns });

  return (
    <Box className={classes.grid} data-testid="color-selector-wrapper">
      {colors.map((color) => (
        <Box
          key={color}
          data-testid={`color-selector-${color}`}
          style={{ backgroundColor: parseColor(color) }}
          className={classes.dot}
          onClick={() => onSelected(color)}
        />
      ))}
    </Box>
  );
}

export default ColorSelector;
