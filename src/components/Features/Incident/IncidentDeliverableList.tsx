import { Alert, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { v4 as uuid } from 'uuid';
import React from 'react';
import { DangerIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { Scrollbars } from '../../index';
import { IconItem, TextItem, IncidentDeliverableCard } from './IncidentDeliverableCard';

const useStyles = makeStyles((theme: MTheme) => ({
  cardContent: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },
  cardContentRow: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 3.75),
  },
  cardContentError: {
    backgroundColor: theme.palette.error.lighter,
  },
  cardContentBody: {
    width: '100%',
    overflow: 'auto',
    padding: theme.spacing(1.25, 3.75),
    height: 378,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: theme.spacing(2),

    '&:after': {
      content: '',
      display: 'block',
      height: 30,
      width: '100%',
    },
  },
  scrollStyle: {
    width: 'calc(100% - 8px)',
    height: 378,
    '& .simplebar-scrollbar': {
      '&:before': {
        background: theme.palette.grey[500],
        width: theme.spacing(1),
      },
    },
  },
  ghostBox: {
    gridColumn: '1 / 3',
    height: 30,
    width: '100%',
  },
}));

export interface IncidentDeliverableListProps {
  itemsType: string;
  listItems: {
    items: TextItem[];
    icons: IconItem[];
    type: string;
  }[];
  isLoading: boolean;
  error?: string;
}

const IncidentDeliverableList = ({
  itemsType,
  listItems,
  isLoading,
  error,
}: IncidentDeliverableListProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContent}>
      <Box className={classes.cardContentRow}>
        <Typography variant="subtitle1" data-testid="incident-deliverable-list-count">
          {itemsType} ({listItems.length})
        </Typography>
      </Box>
      {error && (
        <Box className={classes.cardContentRow}>
          <Alert icon={<DangerIcon />} severity="error" className={classes.cardContentError}>
            <Typography
              variant="body2"
              fontWeight="500"
              color="textPrimary"
              data-testid="incident-deliverable-list-error"
            >
              {error}
            </Typography>
          </Alert>
        </Box>
      )}
      <Scrollbars className={classes.scrollStyle}>
        <Box className={classes.cardContentBody}>
          {isLoading
            ? [...Array(2)].map(() => <IncidentDeliverableCard key={uuid()} type="file" isLoading={isLoading} />)
            : listItems.map((item) => (
                <IncidentDeliverableCard
                  key={uuid()}
                  items={item.items}
                  type={item.type}
                  iconsSet={item.icons}
                  isLoading={isLoading}
                />
              ))}

          <Box className={classes.ghostBox}>&nbsp;</Box>
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default IncidentDeliverableList;
