// eslint-disable-next-line import/no-cycle
import { MultiSelectFilterItem } from './MultiSelectFilter';

const hasItemSearchFieldMatches = (item: MultiSelectFilterItem, query: string): boolean =>
  item.value.toLowerCase().includes(query.toLowerCase());

export const searchItemsByQuery = (items: MultiSelectFilterItem[], query: string): MultiSelectFilterItem[] =>
  items.filter((item) => hasItemSearchFieldMatches(item, query));
