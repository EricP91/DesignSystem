import { Story } from '@storybook/react';
import React from 'react';
import { Avatar } from '@mui/material';
import LocationPopupContent, { LocationPopupContentProps } from './LocationPopupContent';
import AvatarBadge from '../../Avatar/AvatarBadge';
import { LocationIcon } from '../../../assets/icons';
import TagCheckboxList from '../Tags/TagCheckboxList';

export default {
  title: 'Features/Locations/LocationPopup',
};

const Template: Story<LocationPopupContentProps> = (args) => <LocationPopupContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  locationData: {
    category: 'Wireless Networks',
    location: {
      latitude: 40.42,
      longitude: -104.7099999,
    },
    classification: 'Other',
    locationGroup: 'Points of interest',
    tags: [
      { name: 'Completed', color: '#009E5D' },
      { name: 'Verified', color: '#AC64E4' },
      { name: 'Custom', color: '#910775' },
      { name: 'Custom2', color: '#69c52c' },
    ],
  },
  geoAddress: '1905 12th With A Kind Of Longer Name Street, Greeley, Colorado 80631, United States',
  formattedDate: '04:02 ,12/02/2020 PM (UTC)',
  shouldShowTags: true,
  locationSubgroup: 'GPS',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...Default.args,
  avatarChild: (
    <AvatarBadge secondaryBadgeContent={<LocationIcon fill="white" />} primaryBadgeContent={<LocationIcon />}>
      <Avatar sx={{ height: 40, width: 40 }} />
    </AvatarBadge>
  ),
};

export const WithTagsEdit = Template.bind({});
WithTagsEdit.args = {
  ...WithAvatar.args,
  tagEditChild: (
    <TagCheckboxList
      errors={{
        empty: 'Empty tag name',
        duplicate: 'Duplicate tag name',
        maxLength: 'Too many tag characters',
        maxCount: 'Too many tags',
      }}
      colorList={[]}
      onClick={() => null}
      unassignedTags={[]}
      assignedTags={[]}
      onAssignTag={() => null}
      onUnassignTag={() => null}
      onAddTag={() => null}
      onEditTag={() => null}
      onDeleteTag={() => null}
      id="test"
    />
  ),
};
