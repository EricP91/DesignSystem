import { render, screen } from 'test-utils';
import React from 'react';
import { List as IncidentDeliverableList } from './IncidentDeliverableList.stories';
import { IncidentDeliverableListProps } from './IncidentDeliverableList';

describe('IncidentDeliverableList', () => {
  test('should render incident deliverable list', () => {
    render(<IncidentDeliverableList {...(IncidentDeliverableList.args as IncidentDeliverableListProps)} />);
    const { itemsType, listItems } = IncidentDeliverableList.args as IncidentDeliverableListProps;
    expect(screen.getByTestId('incident-deliverable-list-count').textContent).toContain(itemsType);
    expect(screen.getByTestId('incident-deliverable-list-count').textContent).toContain(listItems.length);
  });

  test('should render incident deliverable card skeletons', () => {
    render(<IncidentDeliverableList {...(IncidentDeliverableList.args as IncidentDeliverableListProps)} isLoading />);
    expect(screen.getAllByTestId('incident-deliverable-card-icon-skeleton').length).toBe(2);
  });

  test('should render incident deliverable list error', () => {
    const error = 'Communication error - unable to fetch the deliverables';
    render(
      <IncidentDeliverableList {...(IncidentDeliverableList.args as IncidentDeliverableListProps)} error={error} />
    );
    expect(screen.getByTestId('incident-deliverable-list-error').textContent).toContain(error);
  });
});
