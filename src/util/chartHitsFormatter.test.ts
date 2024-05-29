import { chartHitsFormatter } from './chartHitsFormatter';

const hundredsHits = {
  hits: 500,
  expected: '500',
};

const overThousandHits = {
  hits: 20000,
  expected: '20K',
};

const overMillionHits = {
  hits: 20000000,
  expected: '20M',
};

const overBillionHits = {
  hits: 20000000000,
  expected: '20B',
};

describe('ChartHitsFormatter', () => {
  it('should return the number as string if its under 1000', () => {
    const formatted = chartHitsFormatter(hundredsHits.hits);
    expect(formatted).toEqual(hundredsHits.expected);
  });

  it('should return the number with K instead of last 3 zeros', () => {
    const formatted = chartHitsFormatter(overThousandHits.hits);
    expect(formatted).toEqual(overThousandHits.expected);
  });

  it('should return the number with K instead of last 3 zeros', () => {
    const formatted = chartHitsFormatter(overMillionHits.hits);
    expect(formatted).toEqual(overMillionHits.expected);
  });

  it('should return the number with K instead of last 3 zeros', () => {
    const formatted = chartHitsFormatter(overBillionHits.hits);
    expect(formatted).toEqual(overBillionHits.expected);
  });
});
