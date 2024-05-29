import { makeStyles } from '@mui/styles';
import React, { useRef, useState, useEffect } from 'react';
import { Avatar, Box, PopoverOrigin } from '@mui/material';
import clsx from 'clsx';
import { AddTagIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { Tag } from './TagItem';
import { TagItemEditErrors } from './TagItemEdit';
import TagCheckboxListPopover, { AssignedTagsState } from './TagCheckboxListPopover';
import { TagListItemProps } from './TagListItem';

export interface TagCheckboxListProps {
  className?: string;
  popoverClassName?: string;
  avatarClassName?: string;
  assignedTags?: TagListItemProps[];
  unassignedTags?: TagListItemProps[];
  tagNameLabel?: string;
  tagNamePlaceholder?: string;
  maxTagNameLength?: number;
  maxTagCount?: number;
  saveBtnText?: string;
  errors: TagItemEditErrors;
  onClick: (isOpen: boolean) => void;
  onAssignTag: (tag: Tag) => void;
  onUnassignTag: (tag: Tag) => void;
  onAddTag: (tag: Tag) => void;
  onEditTag: (tag: Tag) => void;
  onDeleteTag: (tag: Tag) => void;
  anchorOrigin?: PopoverOrigin;
  parentRef?: React.RefObject<Element>;
  colorList: string[];
  colorColumns?: number;
  id?: string;
  setTabPopup?: (tabPopup: {
    id?: string;
    renderFn?: (isOpen: boolean, popoverProps: TagCheckboxListProps) => JSX.Element | null;
    props?: TagCheckboxListProps;
  }) => void;
  idOpen?: string;
  onClose?: () => void;
  isLoading?: boolean;
  anchorOffset?: { left?: number; right?: number; top?: number };
  tagToScrollIntoView?: Tag;
  assignedTagsState?: AssignedTagsState[];
  disabledTagTooltipText?: string;
}

export const TAG_BUTTON_POPUP_WIDTH = 3.75;

const useStyles = makeStyles((theme: MTheme) => ({
  avatar: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.grey[1600],
    },
    height: theme.spacing(3.75),
    width: theme.spacing(3.75),
  },
  avatarActive: {
    backgroundColor: `${theme.palette.blue[100]}`,
    '& svg.MuiSvgIcon-root path': {
      fill: '#0152A6',
    },
  },
}));

function TagCheckboxList(props: TagCheckboxListProps): JSX.Element {
  const {
    className = '',
    onClick,
    id,
    setTabPopup,
    idOpen,
    parentRef,
    avatarClassName = '',
    onClose,
    isLoading,
    anchorOffset,
  } = props;
  const classes = useStyles();
  const [openedPopover, setOpenedPopover] = useState(idOpen !== undefined ? idOpen === id : false);
  const idAttr = `tag-popover-${id}`;

  const popoverAnchor = useRef(null);

  const renderMessagePopover = (
    isOpen: boolean,
    popoverProps: TagCheckboxListProps,
    anchorEl?: Element | null | undefined
  ): JSX.Element | null => (
    <TagCheckboxListPopover
      {...popoverProps}
      anchorEl={(anchorEl || document.querySelector(`[data-element-id="${idAttr}"]`)) as Element}
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      onClose={closePopover}
      isOpen={isOpen}
    />
  );

  const setPopoverProps = (isOpen = openedPopover): void => {
    if (setTabPopup) {
      if (isOpen) {
        setTabPopup({});
      } else {
        setTabPopup({
          id,
          renderFn: renderMessagePopover,
          props,
        });
      }
    }
  };

  const closePopover = (): void => {
    setOpenedPopover(false);
    if (onClose) {
      onClose();
    }
    if (setTabPopup) {
      setPopoverProps();
    }
  };

  const togglePopover = (): void => {
    onClick(!openedPopover);
    setOpenedPopover(!openedPopover);
    if (setTabPopup) {
      setPopoverProps();
    }
  };

  useEffect(
    () => () => {
      if (openedPopover) {
        closePopover();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [openedPopover]
  );

  useEffect(() => {
    if (openedPopover) {
      setPopoverProps(false);
    }
  }, [openedPopover, isLoading, anchorOffset]); // eslint-disable-line

  return (
    <Box sx={{ display: 'flex' }} className={className}>
      <Box ref={popoverAnchor} onClick={togglePopover} data-testid="icon-avatar-box" data-element-id={idAttr}>
        <Avatar
          className={clsx(classes.avatar, avatarClassName, { [classes.avatarActive]: openedPopover })}
          data-testid="avatar-icon"
        >
          <AddTagIcon fill="#5E6974" />
        </Avatar>
      </Box>
      {!setTabPopup ? renderMessagePopover(openedPopover, props, parentRef?.current || popoverAnchor?.current) : null}
    </Box>
  );
}

export default TagCheckboxList;
