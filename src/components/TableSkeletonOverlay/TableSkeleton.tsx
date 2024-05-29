import React from 'react';

import { useGridApiContext } from '@mui/x-data-grid';
import { Box, Skeleton } from '@mui/material';
import { v4 as uuid } from 'uuid';

export interface LoadingSkeletonProps {
  rowsNumber: number;
}

function TableSkeleton({ rowsNumber }: LoadingSkeletonProps): JSX.Element {
  const apiRef = useGridApiContext();
  const columns = apiRef.current.getVisibleColumns();

  return (
    <Box
      sx={{
        height: 'max-content',
        whiteSpace: 'nowrap',
      }}
    >
      {columns.map((column) => (
        <Box
          key={column.field}
          sx={{
            display: 'inline-block',
            width: column.computedWidth,
          }}
        >
          {[...Array(rowsNumber)].map(() => (
            <Skeleton
              key={uuid()}
              variant="rectangular"
              sx={{ my: 4, mx: 1, width: '90%', justifyContent: column.align }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default TableSkeleton;
