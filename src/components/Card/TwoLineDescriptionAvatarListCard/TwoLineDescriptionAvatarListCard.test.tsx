import React from 'react';
import { render, screen } from 'test-utils';
import { MagnifyingGlassIcon } from '../../../assets/icons';
import ReadMoreOrLessText from '../../Text/ReadMoreOrLessText';
import TwoLineDescriptionAvatarListCard from './TwoLineDescriptionAvatarListCard';

const props = {
  title: 'Additional info',
  twoLineDescriptionAvatarList: [
    {
      icon: '',
      src: '',
      children: <MagnifyingGlassIcon />,
      primaryText: 'User tags',
      secondaryText: 'Friend, Co-worker',
    },
    {
      icon: '',
      src: '',
      children: <MagnifyingGlassIcon />,
      primaryText: 'Organization',
      secondaryText: 'Cellebrite',
    },
    {
      icon: '',
      src: '',
      children: <MagnifyingGlassIcon />,
      primaryText: 'Groups',
      secondaryText: '0527255214',
    },
    {
      icon: '',
      src: '',
      children: <MagnifyingGlassIcon />,
      primaryText: 'Notes',
      secondaryText: (
        <ReadMoreOrLessText
          maxLetters={200}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niOrjeequia quis nostrud exercitation ullamco laboris niOrjeequia quis nostrud exercitation ullamco laboris niOrjeequia"
        />
      ),
      disableSecondaryTextOverflow: true,
    },
  ],
};

test('should show list and avatar', () => {
  render(
    <TwoLineDescriptionAvatarListCard
      title={props.title}
      twoLineDescriptionAvatarList={props.twoLineDescriptionAvatarList}
    />
  );
  props.twoLineDescriptionAvatarList.forEach(({ primaryText }) => {
    expect(screen.getByText(primaryText)).toBeInTheDocument();
  });
  expect(screen.queryAllByTestId('avatar').length).toEqual(props.twoLineDescriptionAvatarList.length);
});

test('should highlight correctly', () => {
  const highlightedText = props.twoLineDescriptionAvatarList[1].secondaryText as string;
  render(
    <TwoLineDescriptionAvatarListCard
      title={props.title}
      twoLineDescriptionAvatarList={props.twoLineDescriptionAvatarList}
      highlight={highlightedText}
    />
  );
  expect(screen.getByText(highlightedText)).toHaveStyle('background-color: rgb(255, 225, 106)');
});
