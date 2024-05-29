import React from 'react';
import clsx from 'clsx';
import { Legend } from 'recharts';
import { HorizontalAlignmentType, VerticalAlignmentType } from 'recharts/types/component/DefaultLegendContent';
import { LayoutType } from 'recharts/types/util/types';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ClassNameMap } from '@mui/styles/withStyles';
import { v4 as uuid } from 'uuid';
import { omit } from 'lodash';
import useResizeObserver from 'use-resize-observer';
import { MTheme } from '../../../theme';
import { OverflowTooltip } from '../../index';
import { Category, colors } from '../DonutRechart.types';

// ----------------------------------------------------------------------
interface StyleProps {
  isLoading: boolean;
}

const useStyles = makeStyles((theme: MTheme) => ({
  ulStyle: {
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3, 0, 1.25, 3),
    borderTop: `1px solid ${theme.palette.grey[500]}33`,
    listStyle: 'none',
    display: 'flex',
    flex: '1 1 0px',
    alignItems: 'center',
    flexWrap: 'wrap',
    bottom: 0,
    left: 0,
  },
  liStyle: () => ({
    height: 24,
    position: 'relative',
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
  }),
  liBullet: (props: StyleProps) => ({
    position: 'absolute',
    display: props.isLoading ? 'none' : 'inline-block',
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    background: 'purple',
    borderRadius: theme.spacing(12.5),
    transform: 'translateY(-1.5px)',
    marginRight: theme.spacing(1.125),
  }),
  liText: (props: StyleProps) => ({
    fontSize: theme.spacing(1.75),
    fontStyle: 'normal',
    fontFamily: theme.typography.fontFamily,
    lineHeight: theme.spacing(3),
    color: theme.palette.grey[1300],
    marginLeft: props.isLoading ? 0 : theme.spacing(2.625),
    '&.liTextActive': {
      textShadow: '0px 0px 1px black',
    },
  }),
}));
interface CustomizedLegendProps {
  external: {
    payload: Category[];
    onClick: (index: number) => void;
    onMouseEnter: (index: number) => void;
    onMouseLeave: (index: number) => void;
    activeIndex: number;
    onResize: (width?: number, height?: number) => void;
  };
  classes: ClassNameMap<'ulStyle' | 'liStyle' | 'liBullet' | 'liText'>;
}

const CustomizedLegend = ({ external, classes }: CustomizedLegendProps): JSX.Element => {
  const { payload, onClick, onMouseEnter, onMouseLeave, activeIndex, onResize } = external;
  const { ref } = useResizeObserver<HTMLElement>({
    box: 'border-box',
    onResize: ({ width, height }) => {
      onResize(width, height);
    },
  });

  return (
    <ul ref={ref} className={classes.ulStyle}>
      {payload.map((entry, index) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
        <li
          key={uuid()}
          className={classes.liStyle}
          onClick={() => onClick(index)}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave(index)}
        >
          <div className={classes.liBullet} style={{ backgroundColor: colors[index] }}>
            &nbsp;
          </div>
          <OverflowTooltip title={entry.name} arrow>
            <Typography
              className={clsx(classes.liText, index === activeIndex && 'liTextActive')}
              noWrap
              display="inline"
            >
              {entry.name}
            </Typography>
          </OverflowTooltip>
        </li>
      ))}
    </ul>
  );
};

interface LegendRechartsProps {
  isLoading: boolean;
  payload: Category[];
  onClick: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
  activeIndex: number;
  align?: HorizontalAlignmentType;
  verticalAlign?: VerticalAlignmentType;
  layout?: LayoutType;
  wrapperStyle: Record<string, unknown>;
  onResize: (width?: number, height?: number) => void;
}

function LegendRecharts({ ...other }: LegendRechartsProps): JSX.Element {
  const { isLoading, payload, activeIndex, onClick, onMouseEnter, onMouseLeave, onResize } = other;
  const otherProps = omit(other, ['onClick', 'onMouseEnter', 'onMouseLeave']);
  const classes = useStyles({ isLoading });
  return (
    <Legend
      content={
        <CustomizedLegend
          external={{ payload, activeIndex, onClick, onMouseEnter, onMouseLeave, onResize }}
          classes={classes}
        />
      }
      {...otherProps}
    />
  );
}

export default LegendRecharts;
