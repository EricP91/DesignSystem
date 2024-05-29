import { Chip, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { MUIStyled } from 'index';

export interface MChipProps extends ChipProps {
  name: string;
  count?: number | undefined;
  isSelected?: boolean | undefined;
  selected?: boolean | undefined;
  icon?: JSX.Element | undefined;
}

type MChipRootProps = MUIStyled & ChipProps & { selected?: boolean };

const MChipRoot = styled(Chip)<MChipRootProps>(({ theme, selected }) => ({
  '&.MuiChip-root': {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 0.75),
    border: '1px solid',
    color: selected ? theme.palette.primary.main : theme.palette.grey[1700],
    background: selected ? theme.palette.blue[100] : theme.palette.grey[0],
  },
  '& .MuiChip-label': {
    marginTop: 0,
  },
  '& .MuiChip-icon': {
    color: selected ? theme.palette.primary.main : theme.palette.grey[1700],
  },
}));

function MChip(props: MChipProps): JSX.Element {
  const { name, count, isSelected, selected } = props;
  const label = typeof count !== 'undefined' ? `${name} (${count})` : name;
  const testId = `chip-item-${isSelected || selected ? 'selected' : 'unselected'}`;

  return <MChipRoot selected={isSelected || selected || false} label={label} data-testid={testId} {...props} />;
}

export default MChip;
