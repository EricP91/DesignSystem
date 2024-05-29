export interface Header {
  id: string;
  label: string;
  width: string;
  maxWidth?: number;
  minWidth?: number;
  sortable?: boolean;
}

export interface Sort {
  order: 'asc' | 'desc';
  orderBy: string;
}
