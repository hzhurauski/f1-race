export interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

export interface PaginationSliceState {
  [key: string]: PaginationState;
}
