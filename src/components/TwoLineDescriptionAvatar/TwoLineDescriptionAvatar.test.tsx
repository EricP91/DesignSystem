import React from 'react';
import { render } from 'test-utils';
import { TwoLineAvatar } from './TwoLinesDescriptionAvatar.stories';
import TwoLineDescriptionAvatar from './index';
import TwoLineDescriptionAvatarFromFile from './TwoLineDescriptionAvatar';
import GuardianIcon from '../../assets/icons/icon.png';

it('should render without errors and displays the correct text', () => {
  const { container } = render(
    <TwoLineAvatar primaryText="primary text" secondaryText="secondary text" icon="">
      EX
    </TwoLineAvatar>
  );

  expect(container).toBeInTheDocument();
});

it('should display the correct text given correct the input', () => {
  const childText = 'EX';
  const { getByText, getByTestId } = render(
    <TwoLineAvatar primaryText="primary text" secondaryText="secondary text" icon="">
      {childText}
    </TwoLineAvatar>
  );

  const primaryTextContent = 'primary text';
  const secondaryTextContent = 'secondary text';

  expect(getByText(childText)).toBeInTheDocument();
  expect(getByTestId('primaryText')).toHaveTextContent(primaryTextContent);
  expect(getByTestId('secondaryText')).toHaveTextContent(secondaryTextContent);
});

it('should display the correct avatar and text given correct the input', () => {
  const { getByTestId } = render(
    <TwoLineAvatar icon={GuardianIcon} primaryText="primary text" secondaryText="secondary text" />
  );

  expect(getByTestId('avatar')).toBeInTheDocument();
});

it('should display the correct avatar highlight given correct the input', () => {
  const { getByTestId } = render(
    <TwoLineAvatar icon={GuardianIcon} primaryText="primary text" secondaryText="secondary text" highlight="text" />
  );

  expect(getByTestId('primaryText')).toHaveTextContent('text');
  expect(getByTestId('secondaryText')).toHaveTextContent('text');
});

it('should display the correct avatar style', () => {
  const bgColor = 'red';
  const { getByTestId } = render(
    <TwoLineAvatar
      primaryText="primary text"
      secondaryText="secondary text"
      avatarStyle={{ backgroundColor: bgColor }}
      icon=""
    >
      EX
    </TwoLineAvatar>
  );

  expect(getByTestId('avatar')).toHaveStyle(`background-color: ${bgColor}`);
});

it('index file exports correctly', () => {
  expect(TwoLineDescriptionAvatar).toBe(TwoLineDescriptionAvatarFromFile);
});
