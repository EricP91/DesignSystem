export const chartHitsFormatter = (hits: number): string => {
  if (hits > 1000000000) {
    return `${(hits / 1000000000).toString()}B`;
  }
  if (hits > 1000000) {
    return `${(hits / 1000000).toString()}M`;
  }
  if (hits > 1000) {
    return `${(hits / 1000).toString()}K`;
  }
  return hits.toString();
};
