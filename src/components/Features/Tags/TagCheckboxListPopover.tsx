import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  List,
  Popover,
  PopoverOrigin,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { DeleteIcon, EditIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import MCheckbox from '../../Checkbox/MCheckbox';
import { SearchInput } from '../../Filters';
import CustomWidthTooltip from '../../Tooltip/CustomWidthTooltip';
import ContactAvatar from '../Contacts/ContactAvatar';
import { Tag, TagItemProps } from './TagItem';
import TagItemEdit, { TagItemEditErrors } from './TagItemEdit';
import TagListItem, { TagListItemProps } from './TagListItem';

const MAX_CUSTOM_TAGS = 20;

export interface AssignedTagsState {
  name: string;
  isDisabled: boolean;
  showUserDetails: boolean;
}

export interface TagCheckboxListPopoverProps {
  className?: string;
  popoverClassName?: string;
  assignedTags?: TagListItemProps[];
  unassignedTags?: TagListItemProps[];
  tagNameLabel?: string;
  tagNamePlaceholder?: string;
  maxTagNameLength?: number;
  maxTagCount?: number;
  saveBtnText?: string;
  errors: TagItemEditErrors;
  onAssignTag: (tag: Tag) => void;
  onUnassignTag: (tag: Tag) => void;
  onAddTag: (tag: Tag) => void;
  onEditTag: (tag: Tag) => void;
  onDeleteTag: (tag: Tag) => void;
  onClose?: () => void;
  anchorOrigin?: PopoverOrigin;
  colorList: string[];
  colorColumns?: number;
  isOpen: boolean;
  anchorEl?: Element | null;
  isLoading?: boolean;
  anchorOffset?: { left?: number; right?: number; top?: number };
  searchPlaceholder?: string;
  noResultsText?: string;
  otherUserText?: string;
  unidentifiedUserText?: string;
  assignedByUserText?: string;
  tagToScrollIntoView?: Tag;
  assignedTagsState?: AssignedTagsState[];
  disabledTagTooltipText?: string;
  maxTagsErrorMessage?: string;
}

const useStyles = makeStyles<MTheme, TagCheckboxListPopoverProps>((theme: MTheme) => ({
  paper: {
    marginLeft: theme.spacing(2),
    marginTop: 0,
    padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
    minWidth: theme.spacing(36),
    maxWidth: theme.spacing(50),
    pointerEvents: 'auto',
  },
  popoverLeftOrigin: {
    marginRight: 0,
    marginLeft: theme.spacing(-2),
  },
  customAnchorOffset: {
    marginRight: (props) => (props.anchorOffset?.right ? `${props.anchorOffset?.right}px` : 'initial'),
    marginLeft: (props) => (props.anchorOffset?.left ? `${props.anchorOffset?.left}px` : 'initial'),
    marginTop: (props) => (props.anchorOffset?.top ? `${props.anchorOffset?.top}px` : 'initial'),
  },
  list: {
    padding: 0,
    position: 'relative',
  },
  listContainer: {
    maxHeight: 225,
    overflow: 'auto',
  },
  tagIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  '@keyframes highlightedTagAnimation': {
    '38%': {
      backgroundColor: theme.palette.grey[300],
    },
    '62%': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  '@keyframes repeatHighlightedTagAnimation': {
    '38%': {
      backgroundColor: theme.palette.grey[300],
    },
    '62%': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  listRow: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1.5),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(1.5),
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(1),
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[1600],
      '& .MuiButtonGroup-root': {
        visibility: 'visible',
      },
    },
    '&.focusAnimated': {
      animation: `$highlightedTagAnimation 1.3s`,
      animationDelay: '0.6s',
    },
    '& .MuiButtonGroup-root': {
      visibility: 'hidden',
    },
  },
  assignedTagListRow: {
    backgroundColor: theme.palette.blue[100],
  },
  tagListItem: {
    width: theme.spacing(20),
    marginLeft: theme.spacing(1.125),
    '& span': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.grey[1300],
    },
  },
  taggedUserContainer: {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
  },
  otherUserText: {
    fontSize: theme.spacing(1.25),
    lineHeight: theme.spacing(2),
    fontWeight: 500,
    color: theme.palette.grey[500],
  },
  taggedUserAvatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  unidentifiedUserAvatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    backgroundColor: theme.palette.grey[0],
    '& .MuiSvgIcon-root': {
      fill: theme.palette.grey[1500],
    },
    '& .MuiSvgIcon-root-MuiAvatar-fallback': {
      width: '100%',
      height: '100%',
    },
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  editRow: {
    marginTop: theme.spacing(2),
  },
  editButton: {
    marginTop: theme.spacing(2),
    fontSize: theme.spacing(2),
    fontWeight: 500,
  },
  maxTagsErrorMessage: {
    fontSize: theme.spacing(1.25),
    color: theme.palette.error.main,
    paddingLeft: theme.spacing(1),
  },
  colorSelectorPosition: {
    backgroundColor: theme.palette.grey[0],
    padding: 0,
    transform: `translate(${theme.spacing(5.5)}, ${theme.spacing(-2)})`,
  },
  loadingOverlay: {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#fff',
    opacity: '.5',
    zIndex: 2,
    top: 0,
    left: 0,
  },
  tagItemSkeleton: {
    height: theme.spacing(4.5),
    display: 'flex',
    alignItems: 'center',
  },
  checkboxSkeleton: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginLeft: theme.spacing(0.75),
    borderRadius: theme.spacing(0.5),
  },
  tagDotSkeleton: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    marginLeft: theme.spacing(1.12),
  },
  tagTitleSkeleton: {
    width: theme.spacing(25.75),
    height: theme.spacing(2.9),
    marginLeft: theme.spacing(0.75),
  },
  tagSearchContainerSkeleton: {
    width: theme.spacing(33.75),
  },
  tagSearchSkeleton: {
    width: `calc(100% - ${theme.spacing(0.75)})`,
    height: theme.spacing(8.5),
    marginTop: `-${theme.spacing(0.75)}`,
    marginBottom: `-${theme.spacing(0.2)}`,
  },
  tagCreateBtnSkeleton: {
    width: theme.spacing(15.5),
    height: theme.spacing(7.75),
    marginTop: theme.spacing(0.2),
    marginBottom: `-${theme.spacing(1.25)}`,
  },
  noResultsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: theme.spacing(1.5),
  },
  searchInputBox: {
    padding: theme.spacing(1, 0.5),
  },
}));

const getTagNames = (tags: Tag[]): string[] => tags.map((tag) => tag.name);

const removeSpecialCharacters = (text: string): string => text.replace(/[^a-zA-Z0-9_-]/g, '');

const createTagId = (tag: Tag): string =>
  tag?.id ? tag?.id : removeSpecialCharacters(tag?.name?.split(' ').join('-'));

const createTagSelectorClass = (tag: Tag): string => removeSpecialCharacters(tag?.name?.split(' ').join('-'));

const filterTagsOnQueryPredicate = (tag: TagListItemProps, currentSearchQuery: string): boolean =>
  tag.name.toLowerCase().includes(currentSearchQuery.toLowerCase().trim());

const sortTags = (tags: TagListItemProps[]): TagListItemProps[] => tags.sort((a, b) => a.name.localeCompare(b.name));

export default function TagCheckboxListPopover(props: TagCheckboxListPopoverProps): JSX.Element {
  const {
    assignedTags = [],
    unassignedTags = [],
    maxTagNameLength,
    maxTagCount,
    tagNameLabel = 'Tag Name',
    tagNamePlaceholder = 'Type name...',
    saveBtnText = 'Create new tag',
    errors,
    onAssignTag,
    onUnassignTag,
    onAddTag,
    onEditTag,
    onDeleteTag,
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    colorList,
    colorColumns,
    anchorEl,
    isOpen,
    onClose,
    isLoading,
    anchorOffset,
    popoverClassName,
    searchPlaceholder = 'Search...',
    noResultsText = 'No tags',
    otherUserText = 'By PA user',
    unidentifiedUserText = 'an unknown user',
    assignedByUserText = 'Assigned by',
    tagToScrollIntoView,
    assignedTagsState,
    disabledTagTooltipText,
    maxTagsErrorMessage = `Unable to add more than ${MAX_CUSTOM_TAGS} tags`,
  } = props;
  const classes = useStyles(props);
  const sortedAssignedTags = sortTags([...assignedTags]);
  const [filteredAssignedTags, setFilteredAssignedTags] = useState(sortedAssignedTags);
  const [filteredUnassignedTags, setFilteredUnassignedTags] = useState(unassignedTags);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedTag, setSelectedTag] = useState<TagItemProps | null>(null);
  const allTags = [...filteredAssignedTags, ...filteredUnassignedTags];
  const currentCustomCount = allTags.filter((tag) => tag.id).length;
  const customTagsOverLimit = currentCustomCount >= MAX_CUSTOM_TAGS;
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(customTagsOverLimit);
  const [searchQuery, setSearchQuery] = useState('');

  const onPopupClose = (): void => {
    if (onClose) {
      onClose();
    }
    setIsAddButtonDisabled(customTagsOverLimit);
    setShowAdd(false);
    setShowEdit(false);
  };

  const disableAdd = (): void => {
    setShowAdd(false);
  };

  const enableEdit = (tag: Tag): void => {
    setSelectedTag(tag);
    setShowEdit(true);
    setIsAddButtonDisabled(customTagsOverLimit);
    disableAdd();
  };

  const disableEdit = (): void => {
    setSelectedTag(null);
    setShowEdit(false);
  };

  const enableAdd = (): void => {
    setShowAdd(true);
    setIsAddButtonDisabled(true);
    disableEdit();
  };

  const onCheckboxClick =
    (tag: TagListItemProps, isAssigned = false) =>
    () => {
      if (isAssigned) {
        onUnassignTag(tag);
      } else {
        onAssignTag(tag);
      }
    };

  const onSearchChange = (currentSearchQuery: string): void => {
    setFilteredAssignedTags(sortedAssignedTags.filter((tag) => filterTagsOnQueryPredicate(tag, currentSearchQuery)));
    setFilteredUnassignedTags(unassignedTags.filter((tag) => filterTagsOnQueryPredicate(tag, currentSearchQuery)));
  };

  useEffect(() => {
    onSearchChange(searchQuery);
  }, [assignedTags, unassignedTags, selectedTag]); // eslint-disable-line

  const scrollTagIntoView = (tag: Tag): void => {
    document
      ?.querySelector(`.tag-list-item-${createTagSelectorClass(tag)}`)
      ?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
  };

  useEffect(() => {
    if (!isLoading && tagToScrollIntoView) {
      scrollTagIntoView(tagToScrollIntoView);
    }
  }, [tagToScrollIntoView, isLoading]);

  const onChangeSearchQuery = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const currentSearchQuery = evt.target.value;
    setSearchQuery(currentSearchQuery);
    onSearchChange(currentSearchQuery);
  };

  const renderTagListItemActions = (tag: Tag): JSX.Element => (
    <ButtonGroup size="small" data-testid="action-buttons">
      <IconButton
        sx={{ padding: 0 }}
        disableRipple
        data-testid="edit-tag-button"
        onClick={() => {
          enableEdit(tag);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        sx={{ marginLeft: 0.5, padding: 0 }}
        disableRipple
        data-testid="delete-tag-button"
        onClick={() => {
          onDeleteTag(tag);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ButtonGroup>
  );

  const renderSkeleton = (): JSX.Element => (
    <Box className={classes.tagItemSkeleton} data-testid="tag-checkbox-list-item-skeleton">
      <Skeleton variant="rectangular" className={classes.checkboxSkeleton} />
      <Skeleton variant="circular" className={classes.tagDotSkeleton} />
      <Skeleton variant="text" className={classes.tagTitleSkeleton} />
    </Box>
  );

  const renderTagListItem = (tag: TagListItemProps, isAssigned = false): JSX.Element => {
    const assignedTagState = assignedTagsState?.find((assignedTag) => assignedTag.name === tag.name);

    const isDisabled = assignedTagState ? assignedTagState?.isDisabled : false;

    const renderCheckbox = (isTagDisabled = false): JSX.Element => (
      <MCheckbox
        size="small"
        data-testid={`tag-list-checkbox-${isAssigned ? 'unassign' : 'assign'}`}
        checked={isAssigned}
        onClick={onCheckboxClick(tag, isAssigned)}
        disabled={!!isTagDisabled}
      />
    );

    const renderOtherUserText = (): JSX.Element => (
      <Typography variant="italic" className={classes.otherUserText} data-testid="other-user-text">
        {otherUserText}
      </Typography>
    );

    const showUserDetails = assignedTagState ? assignedTagState?.showUserDetails : false;

    const renderUserInfoAvatar = (): JSX.Element =>
      tag?.user ? (
        <Tooltip arrow placement="top" title={`${assignedByUserText}: ${tag.user?.firstName} ${tag.user?.lastName}`}>
          <ContactAvatar
            size="small"
            className={classes.taggedUserAvatar}
            name={`${tag.user?.firstName} ${tag.user?.lastName}`}
          />
        </Tooltip>
      ) : (
        <Tooltip arrow placement="top" title={`${assignedByUserText} ${unidentifiedUserText}`}>
          <Avatar className={classes.unidentifiedUserAvatar} data-testid="unidentified-user-avatar" />
        </Tooltip>
      );

    return (
      <>
        {isLoading ? (
          renderSkeleton()
        ) : (
          <Box
            className={clsx(classes.listRow, {
              focusAnimated: tagToScrollIntoView?.name === tag?.name,
              [classes.assignedTagListRow]: isAssigned,
            })}
            key={tag.name}
            data-testid={`${isAssigned ? 'assigned' : 'unassigned'}-tag-row`}
          >
            {isAssigned && isDisabled ? (
              <CustomWidthTooltip
                title={<Box sx={{ textAlign: 'center' }}>{disabledTagTooltipText as string}</Box>}
                tooltipProps={{ width: 140 }}
              >
                <Box sx={{ display: 'flex' }}>{renderCheckbox(isDisabled)}</Box>
              </CustomWidthTooltip>
            ) : (
              renderCheckbox()
            )}

            <TagListItem
              color={tag.color}
              name={tag.name}
              className={classes.tagListItem}
              highlight={searchQuery.trim()}
            />
            {isAssigned && showUserDetails && (
              <Box className={classes.taggedUserContainer} data-testid="tagged-user-container">
                {tag.userId || tag.id || tag.isPredefined ? renderUserInfoAvatar() : renderOtherUserText()}
              </Box>
            )}
            {!isAssigned && tag.id && renderTagListItemActions(tag)}
          </Box>
        )}
      </>
    );
  };

  const getUniqueTagNames = (): string[] => [...new Set(getTagNames(allTags))];

  const onSaveTag = (tag: Tag): void => {
    setIsAddButtonDisabled(customTagsOverLimit);
    if (selectedTag) {
      onEditTag({ ...tag, id: selectedTag.id });
    } else {
      onAddTag(tag);
    }
    disableEdit();
    disableAdd();
  };

  const renderTagItemEdit = (tag?: TagListItemProps): JSX.Element => (
    <TagItemEdit
      key={tag?.name || 'tag-item-edit'}
      className={classes.editRow}
      name={selectedTag?.name}
      nameLabel={tagNameLabel}
      namePlaceholder={tagNamePlaceholder}
      nameList={getUniqueTagNames()}
      currentCustomCount={currentCustomCount}
      nameMaxLength={maxTagNameLength}
      maxCount={maxTagCount}
      errors={errors}
      color={selectedTag?.color}
      colorList={colorList}
      colorColumns={colorColumns}
      colorSelectorClass={classes.colorSelectorPosition}
      onSave={onSaveTag}
    />
  );

  const renderTagListItemOrEdit = (tag: TagListItemProps): JSX.Element => {
    if (tag.name === selectedTag?.name && showEdit) {
      return renderTagItemEdit(tag);
    }
    return renderTagListItem(tag, false);
  };

  const renderAssignedTags = (): JSX.Element => (
    <List data-testid="assigned-tags-list" className={classes.list}>
      {filteredAssignedTags.map((tag: TagListItemProps) => (
        <div
          key={`tag-list-item-${createTagId(tag)}`}
          className={`tag-list-item-${createTagSelectorClass(tag)}`}
          id={`tag-list-item-${createTagId(tag)}`}
        >
          {renderTagListItem(tag, true)}
        </div>
      ))}
    </List>
  );

  const renderUnassignedTags = (): JSX.Element => (
    <List data-testid="unassigned-tags-list" className={classes.list}>
      {filteredUnassignedTags.map((tag) => (
        <div
          key={`tag-list-item-unassigned-${createTagId(tag)}`}
          className={`tag-list-item-${createTagSelectorClass(tag)}`}
          id={`tag-list-item-${createTagId(tag)}`}
        >
          {renderTagListItemOrEdit(tag)}
        </div>
      ))}
    </List>
  );

  return (
    <Popover
      data-testid="mouse-over-popover"
      classes={{
        paper: clsx(classes.paper, popoverClassName, {
          [classes.popoverLeftOrigin]: anchorOrigin?.horizontal === 'left' && !anchorOffset,
          [classes.customAnchorOffset]: anchorOffset,
        }),
      }}
      transformOrigin={{ vertical: 'top', horizontal: anchorOrigin?.horizontal === 'left' ? 'right' : 'left' }}
      open={isOpen}
      onClose={onPopupClose}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
    >
      <Box>
        {isLoading ? (
          <Box className={classes.tagSearchContainerSkeleton}>
            <Skeleton variant="text" className={classes.tagSearchSkeleton} />
          </Box>
        ) : (
          <Box className={classes.searchInputBox}>
            <SearchInput
              placeholder={searchPlaceholder}
              searchQuery={searchQuery}
              onChangeSearchQuery={onChangeSearchQuery}
              data-testid="search-input"
            />
          </Box>
        )}
      </Box>
      <Box className={classes.listContainer}>
        {renderAssignedTags()}
        {filteredAssignedTags?.length !== 0 && filteredUnassignedTags?.length !== 0 ? (
          <Divider data-testid="divider" className={classes.divider} />
        ) : null}
        {renderUnassignedTags()}
        {filteredAssignedTags?.length === 0 && filteredUnassignedTags?.length === 0 ? (
          <Box className={classes.noResultsBox} data-testid="search-list-no-results">
            <Typography align="center" variant="body1">
              {noResultsText}
            </Typography>
          </Box>
        ) : null}
      </Box>
      {showAdd && renderTagItemEdit()}
      {isLoading ? (
        <Skeleton variant="text" className={classes.tagCreateBtnSkeleton} />
      ) : (
        <>
          <Button
            disabled={isAddButtonDisabled}
            className={classes.editButton}
            onClick={enableAdd}
            size="medium"
            color="primary"
            variant="text"
            data-testid="add-tag-button"
          >
            {saveBtnText}
          </Button>
          {isAddButtonDisabled && customTagsOverLimit ? (
            <Typography className={classes.maxTagsErrorMessage}>{maxTagsErrorMessage}</Typography>
          ) : null}
        </>
      )}
    </Popover>
  );
}
