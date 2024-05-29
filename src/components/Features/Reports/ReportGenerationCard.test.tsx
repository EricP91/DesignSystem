import React from 'react';
import { render, screen } from 'test-utils';
import { SummaryReportCard, ModelReportCard } from './ReportGenerationCard.stories';
import { buttonWidth, ReportGenerationCardProps } from './ReportGenerationCard';

describe('Device Extractions test', () => {
  it('should render two button report generation card', () => {
    render(<ModelReportCard {...(ModelReportCard.args as ReportGenerationCardProps)} />);
    expect(screen.getByTestId('double-button-report-card')).toHaveTextContent('Chats Report');
    expect(screen.getByTestId('double-button-report-card')).toHaveTextContent('Customize Report');
  });

  it('should render single button report generation card', () => {
    render(<SummaryReportCard {...(SummaryReportCard.args as ReportGenerationCardProps)} />);
    expect(screen.getByTestId('single-button-report-card')).not.toHaveTextContent('Chats Report');
    expect(screen.getByTestId('single-button-report-card')).toHaveTextContent('Customize Report');
  });

  it('should render two buttons with specific width', () => {
    render(<ModelReportCard {...(ModelReportCard.args as ReportGenerationCardProps)} />);
    expect(screen.getByText('Chats Report')).toHaveStyle(`width: ${buttonWidth}px`);
    expect(screen.getByText('Customize Report')).toHaveStyle(`width: ${buttonWidth}px`);
  });

  it('should have beta label with default text when showBetaLabel is true', () => {
    render(<ModelReportCard showBetaLabel primaryButtonText="test" />);
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('should have beta label with selected text when showBetaLabel is true', () => {
    render(<ModelReportCard betaLabelText="bêta" showBetaLabel primaryButtonText="test" />);
    expect(screen.getByText('bêta')).toBeInTheDocument();
  });

  it('should not have beta label by default', () => {
    render(<ModelReportCard primaryButtonText="test" />);
    expect(screen.queryByText('Beta')).not.toBeInTheDocument();
  });

  it('should have primary button with loading indicator when primaryButtonLoading is true', () => {
    render(
      <ModelReportCard primaryButtonLoading primaryButtonText="test-primary" secondaryButtonText="test-secondary" />
    );
    expect(screen.getByTestId('test-primary-button')).toHaveAttribute('disabled');
    expect(screen.getByTestId('test-primary-button')).toContainHTML('svg');
  });
  it('should have secondary button with loading indicator when secondaryButtonLoading is true', () => {
    render(
      <ModelReportCard secondaryButtonLoading primaryButtonText="test-primary" secondaryButtonText="test-secondary" />
    );
    expect(screen.getByTestId('test-secondary-button')).toHaveAttribute('disabled');

    expect(screen.getByTestId('test-secondary-button')).toContainHTML('svg');
  });
  it('should not have loading indicator when primaryButtonLoading is by default', () => {
    render(
      <ModelReportCard
        primaryButtonLoading={false}
        primaryButtonText="test-primary"
        secondaryButtonText="test-secondary"
      />
    );
    expect(screen.getByTestId('test-primary-button')).not.toContainHTML('svg');
    expect(screen.getByTestId('test-secondary-button')).not.toHaveAttribute('disabled');
  });

  it('should not have loading indicator when secondaryButtonLoading is by default', () => {
    render(<ModelReportCard primaryButtonText="test-primary" secondaryButtonText="test-secondary" />);
    expect(screen.getByTestId('test-primary-button')).not.toHaveAttribute('disabled');
    expect(screen.getByTestId('test-secondary-button')).not.toContainHTML('svg');
  });
});
