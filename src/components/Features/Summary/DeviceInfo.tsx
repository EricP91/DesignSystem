import React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import { NoDeviceInfoIcon, NoResultsIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { NO_VALUE_TEXT } from '../../constants';
// eslint-disable-next-line import/no-cycle
import { OverflowTooltip } from '../../index';

const ROW_SIZE = 3;

interface Item {
  key: string;
  value: string;
}

interface StyleProps {
  isLoading: boolean;
}

export interface DeviceInfoCategory {
  name: string | null;
  items: Item[];
}

export interface DeviceInfoProps {
  categories: DeviceInfoCategory[];
  noDevicesInfoText?: string;
  noValueText?: string;
  defaultCategoryName?: string;
  isLoading: boolean;
  sortedCategories?: DeviceInfoCategory[];
  categoriesClassName?: string;
  isTallerSkeleton?: boolean;
}

export interface DeviceInfoSkeletonProps {
  noValueText: string;
  categoriesClassName?: string;
  isTallerSkeleton?: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  '@global': {
    '* .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    },
  },
  table: (props: StyleProps) => ({
    width: '100%',
    tableLayout: 'fixed',
    '& .MuiTableCell-root': {
      width: '33.33%',
      padding: theme.spacing(1.25),

      '&:first-of-type': {
        paddingLeft: 0,
      },
      '&:last-child': {
        paddingRight: 0,
      },

      '& h6.MuiTypography-root': {
        fontWeight: 500,
        fontSize: theme.spacing(1.5),
        marginBottom: props.isLoading ? theme.spacing(0.5) : 0,
      },
      '& p.MuiTypography-root': {
        fontWeight: 400,
        fontSize: theme.spacing(2),
        color: theme.palette.grey[800],
      },
    },
    '& .MuiTableRow-root:not(:last-child)': {
      '& p.MuiTypography-root': {
        marginBottom: props.isLoading ? theme.spacing(2.5) : 0,
      },
    },
    '& .MuiTableRow-root:last-child': {
      '& .MuiTableCell-root': {
        paddingBottom: 0,
      },
    },
    '& .MuiTableRow-root:first-child': {
      '& .MuiTableCell-root': {
        paddingTop: 0,
      },
    },
  }),
  tableHeader: (props: StyleProps) => ({
    padding: theme.spacing(2, 2.125),
    backgroundColor: props.isLoading ? theme.palette.grey[1100] : `${theme.palette.grey[500]}1E`,
    marginTop: theme.spacing(4),
    marginBottom: props.isLoading ? theme.spacing(3.875) : theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(1),

    '&:first-of-type': {
      marginTop: 0,
    },
    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1200],
    },

    '& p.MuiTypography-root': {
      fontSize: theme.spacing(1.75),
      color: theme.palette.grey[600],
      fontWeight: 700,
    },
  }),
  flexContainer: {
    margin: 'auto',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& h6.MuiTypography-root': {
      fontSize: theme.spacing(2),
      marginTop: theme.spacing(4.25),
    },
  },
  titleWrapper: {
    width: 'auto',
    height: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.spacing(2.25),
  },
  categoryContainer: {
    width: '100%',
    marginTop: theme.spacing(4),
    overflow: 'auto',
    height: theme.spacing(50),
  },
  anotherSkeleton: {
    margin: theme.spacing(3, 0, 3, 0),
  },
}));

const renderItemValue = (item: { value: string }, noValueText: string): string =>
  item?.value ? item?.value : noValueText;

const renderRowBox = (items: Item[], isLoading: boolean, noValueText: string): JSX.Element[] => {
  let itemChunks: Item[][] = [];

  for (let i = 0; i < items.length; i += ROW_SIZE) {
    itemChunks = [...itemChunks, items.slice(i, i + ROW_SIZE)];
  }

  return itemChunks.map((chunk: Item[]) => (
    <TableRow key={uuid()}>
      {chunk.map((item: Item) => (
        <TableCell key={`${item.key}${item.value}`}>
          <Typography variant="subtitle2" color="textSecondary">
            {isLoading ? <Skeleton variant="text" width="86px" height="11.7px" /> : item.key}
          </Typography>
          <OverflowTooltip title={item.value} arrow followCursor>
            <Typography display="inline" variant="body1" color="textPrimary">
              {isLoading ? (
                <Skeleton variant="text" width="106px" height="11.7px" />
              ) : (
                renderItemValue(item, noValueText)
              )}
            </Typography>
          </OverflowTooltip>
        </TableCell>
      ))}
    </TableRow>
  ));
};

const DeviceInfoSkeleton = ({
  noValueText,
  categoriesClassName,
  isTallerSkeleton,
}: DeviceInfoSkeletonProps): JSX.Element => {
  const classes = useStyles({ isLoading: true });
  const items = [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' },
    { key: 'key3', value: 'value3' },
  ];

  const skeleton = (key: string): JSX.Element => (
    <Box key={key}>
      <Box
        data-testid="device-table-header"
        className={clsx(categoriesClassName && categoriesClassName, classes.tableHeader)}
      >
        <Typography variant="body2">
          <Skeleton data-testid="device-header-skeleton" variant="text" width="86px" height="11.7px" />
        </Typography>
      </Box>
      <Table className={classes.table}>
        <TableBody>
          {renderRowBox(items, true, noValueText)}
          {renderRowBox(items, true, noValueText)}
          {renderRowBox(items, true, noValueText)}
        </TableBody>
      </Table>
      <Box data-testid="device-table-header" className={classes.tableHeader}>
        <Typography variant="body2">
          <Skeleton data-testid="device-header-skeleton" variant="text" width="86px" height="11.7px" />
        </Typography>
      </Box>
      <Table className={classes.table}>
        <TableBody>{renderRowBox(items, true, noValueText)}</TableBody>
      </Table>
    </Box>
  );

  return (
    <>
      {skeleton('1')}
      {isTallerSkeleton ? (
        <>
          <Box className={classes.anotherSkeleton}>{skeleton('2')}</Box>
          <Box className={classes.anotherSkeleton}>{skeleton('3')}</Box>
        </>
      ) : null}
    </>
  );
};

const Categories = ({
  categories,
  isLoading = false,
  noDevicesInfoText,
  defaultCategoryName,
  noValueText = NO_VALUE_TEXT,
  sortedCategories = [],
  categoriesClassName,
}: Partial<DeviceInfoProps>): JSX.Element => {
  const classes = useStyles({ isLoading });
  return sortedCategories?.length > 0 ? (
    <Box className={clsx(categoriesClassName && categoriesClassName, classes.categoryContainer)}>
      {sortedCategories?.map((category) => (
        <React.Fragment key={category.name}>
          <Box data-testid="device-table-header" className={classes.tableHeader}>
            <Typography variant="body2">{category.name === null ? defaultCategoryName : category.name}</Typography>
          </Box>
          <Table className={classes.table}>
            {category.items.length > 0 && (
              <TableBody key={category.name}>{renderRowBox(category.items, isLoading, noValueText)}</TableBody>
            )}
          </Table>
        </React.Fragment>
      ))}
    </Box>
  ) : (
    <Box className={classes.flexContainer}>
      <Box className={classes.innerBox}>
        {categories?.length === 0 ? <NoResultsIcon /> : <NoDeviceInfoIcon />}
        <Typography variant="subtitle2">{noDevicesInfoText}</Typography>
      </Box>
    </Box>
  );
};

export function DeviceInfo({
  categories,
  isLoading,
  noDevicesInfoText = 'Device info is not available',
  defaultCategoryName = 'General info',
  noValueText = NO_VALUE_TEXT,
  categoriesClassName,
  isTallerSkeleton,
}: DeviceInfoProps): JSX.Element {
  const generalInfoCategory = categories.filter((category) => category.name === null);
  const allCategoriesWithoutGeneralInfo = categories.filter((category) => category.name !== null);
  const sortedCategories = [...generalInfoCategory, ...allCategoriesWithoutGeneralInfo];

  return (
    <Box>
      {isLoading ? (
        <DeviceInfoSkeleton
          noValueText={noValueText}
          categoriesClassName={categoriesClassName}
          isTallerSkeleton={isTallerSkeleton}
        />
      ) : (
        <Categories
          {...{
            categories,
            isLoading,
            noDevicesInfoText,
            defaultCategoryName,
            noValueText,
            sortedCategories,
            categoriesClassName,
          }}
        />
      )}
    </Box>
  );
}
