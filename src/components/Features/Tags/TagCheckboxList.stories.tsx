import { ListItem, ListItemText } from '@mui/material';
import { Story } from '@storybook/react';
import React, { useState } from 'react';

import TagCheckboxList, { TagCheckboxListProps } from './TagCheckboxList';
import { Tag } from './TagItem';

export default {
  title: 'Features/Tags/TagCheckboxList',
};

const addTag = (tags: Tag[], tag: Tag): Tag[] => [...tags, { ...tag, id: `${Date.now()}` }];
const getTagIndex = (tags: Tag[], tag: Tag): number => tags.findIndex(({ id }) => tag?.id === id);
const getOtherTags = (tags: Tag[], tag: Tag): Tag[] => tags.filter(({ name }) => tag?.name !== name);

const loggedUser = { userId: '1', firstName: 'Storybook', lastName: 'User' };
const otherUser = { userId: '2', firstName: 'John', lastName: 'Doe' };

const Template: Story<TagCheckboxListProps> = (args) => {
  const {
    unassignedTags: initalTags = [],
    assignedTags: initialAssignedTags = [],
    onClick = () => {},
    ...props
  } = args;
  const [unassignedTags, setUnassignedTags] = useState(initalTags);
  const [assignedTags, setAssignedTags] = useState(initialAssignedTags);

  const onAssignTag = (tag: Tag): void => {
    setAssignedTags([...assignedTags, { ...tag, userId: loggedUser.userId, user: loggedUser }]);
    setUnassignedTags(getOtherTags(unassignedTags, tag));
  };

  const onUnassignTag = (tag: Tag): void => {
    setAssignedTags(getOtherTags(assignedTags, tag));
    setUnassignedTags([...unassignedTags, tag]);
  };

  const onAddTag = (tag: Tag): void => {
    setUnassignedTags(addTag(unassignedTags, tag));
  };

  const onEditTag = (tag: Tag): void => {
    const index = getTagIndex(unassignedTags, tag);
    unassignedTags[index] = tag;
    setUnassignedTags(unassignedTags);
  };

  const onDeleteTag = (tag: Tag): void => {
    setUnassignedTags(getOtherTags(unassignedTags, tag));
  };

  return (
    <TagCheckboxList
      {...props}
      onClick={onClick}
      unassignedTags={unassignedTags}
      assignedTags={assignedTags}
      onAssignTag={onAssignTag}
      onUnassignTag={onUnassignTag}
      onAddTag={onAddTag}
      onEditTag={onEditTag}
      onDeleteTag={onDeleteTag}
      id="test"
    />
  );
};

const TemplateWithContainer: Story<TagCheckboxListProps> = (args) => {
  const { assignedTags, unassignedTags } = args;
  const parentRef = React.useRef<HTMLLIElement>(null);
  return (
    <ListItem
      sx={{ width: 200, backgroundColor: '#F1F4F6', borderRadius: '8px' }}
      ref={parentRef}
      secondaryAction={<Template {...args} parentRef={parentRef} />}
    >
      <ListItemText
        primary={`${assignedTags?.length} assigned tags`}
        secondary={`${unassignedTags?.length} unassigned tags`}
      />
    </ListItem>
  );
};

export const Default = Template.bind({});
Default.args = {
  unassignedTags: [
    { name: 'Tag 1', color: 'red', isPredefined: true },
    { name: 'Tag 2', color: 'blue', isPredefined: true },
    { id: '6', name: 'Tag 6', color: 'green' },
  ],
  assignedTags: [
    { id: '5', name: 'Tag 5', color: 'yellow', userId: '123' },
    { id: '4', name: 'Tag 4', color: 'purple', userId: '1234' },
  ],
  assignedTagsState: [
    { name: 'Tag 5', isDisabled: true, showUserDetails: false },
    { name: 'Tag 4', isDisabled: false, showUserDetails: false },
  ],
  errors: {
    empty: 'Empty tag name',
    duplicate: 'Duplicate tag name',
    maxLength: 'Too many tag characters',
    maxCount: 'Too many tags',
  },
  colorList: [
    '#9B7EEF',
    '#E97BA9',
    '#F39C6B',
    '#56445D',
    '#C5E99B',
    '#7FDBDB',
    '#44AF69',
    '#DBC17F',
    '#54F2F2',
    '#5B869F',
    '#B59890',
    '#363457',
    '#98A886',
    '#735290',
    '#9ACAE7',
    '#EDAEF8',
    '#BF98A0',
    '#638475',
    '#90E39A',
    '#F6D0B1',
  ],
  disabledTagTooltipText: 'Only the person who assigned this tag can unassign it.',
};

export const WithContainer = TemplateWithContainer.bind({});
WithContainer.args = {
  ...Default.args,
};

export const LongList = Template.bind({});
LongList.args = {
  ...Default.args,
  unassignedTags: [
    { name: 'Tag 1', color: 'red', isPredefined: true },
    { name: 'Tag 2', color: 'blue', isPredefined: true },
    { name: 'Tag 3', color: 'green', isPredefined: true },
    { id: '4', name: 'Tag 4', color: 'purple' },
    { id: '5', name: 'Tag 5', color: 'yellow' },
    { id: '6', name: 'Tag 6', color: 'pink' },
    { name: 'Tag 7', color: 'black', sourceId: '123' },
    { name: 'Tag 8', color: 'orange', sourceId: '123' },
  ],
  assignedTags: [{ id: '9', name: 'Tag 9', color: 'brown' }],
};

export const WhileLoading = Template.bind({});
WhileLoading.args = {
  ...Default.args,
  isLoading: true,
};

export const WithUsers = Template.bind({});
WithUsers.args = {
  ...Default.args,
  assignedTags: [
    { name: 'From_PA1', color: 'red' },
    { name: 'From_PA2', color: 'yellow' },
    {
      name: 'Important',
      color: '#D43B29',
      isPredefined: true,
      userId: loggedUser.userId,
      user: loggedUser,
    },
    {
      name: 'Evidence',
      color: '#FFBC31',
      isPredefined: true,
      userId: otherUser.userId,
      user: otherUser,
    },
    {
      name: 'Pending',
      color: '#1EB1FE',
      isPredefined: true,
      userId: otherUser.userId,
    },
    { id: '1', name: 'Custom_Tag1', color: 'purple', userId: loggedUser.userId, user: loggedUser },
    { id: '2', name: 'Custom_Tag2', color: 'pink', userId: otherUser.userId, user: otherUser },
    { id: '3', name: 'Custom_Tag3', color: 'black', userId: otherUser.userId },
  ],
  assignedTagsState: [
    { name: 'From_PA1', isDisabled: false, showUserDetails: true },
    { name: 'From_PA2', isDisabled: true, showUserDetails: true },
    { name: 'Important', isDisabled: false, showUserDetails: true },
    { name: 'Evidence', isDisabled: true, showUserDetails: true },
    { name: 'Pending', isDisabled: false, showUserDetails: true },
    { name: 'Custom_Tag1', isDisabled: false, showUserDetails: true },
    { name: 'Custom_Tag2', isDisabled: true, showUserDetails: true },
    { name: 'Custom_Tag3', isDisabled: true, showUserDetails: true },
  ],
  unassignedTags: [
    {
      name: 'Completed',
      color: '#009E5D',
      isPredefined: true,
    },
    { name: 'From_PA3', color: 'blue' },
    { id: '4', name: 'Custom_Tag4', color: 'orange' },
  ],
};
