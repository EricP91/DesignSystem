import { Story } from '@storybook/react';
import React from 'react';
import ReportGenerationCard, { ReportGenerationCardProps } from './ReportGenerationCard';

export default {
  title: 'Features/Reports/ReportGenerationCard',
};
const Template: Story<ReportGenerationCardProps> = (args) => <ReportGenerationCard {...args} />;

export const ModelReportCard = Template.bind({});
ModelReportCard.args = {
  primaryButtonText: 'Chats Report',
  secondaryButtonText: 'Customize Report',
  showBetaLabel: true,
  primaryButtonLoading: false,
  secondaryButtonLoading: false,
};

export const SummaryReportCard = Template.bind({});
SummaryReportCard.args = {
  primaryButtonText: 'Customize Report',
};
