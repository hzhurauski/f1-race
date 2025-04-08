import { RootState } from 'app/providers/store';

export const getPaginationState = (sliceName: string) => (state: RootState) =>
  state.pagination[sliceName] || { page: 0, limit: 30, total: 0 };

export const getCurrentPage = (sliceName: string) => (state: RootState) =>
  getPaginationState(sliceName)(state).page;

export const getLimit = (sliceName: string) => (state: RootState) =>
  getPaginationState(sliceName)(state).limit;

export const getTotal = (sliceName: string) => (state: RootState) =>
  getPaginationState(sliceName)(state).total;

export const getTotalPages = (sliceName: string) => (state: RootState) => {
  const { limit, total } = getPaginationState(sliceName)(state);
  return Math.ceil(total / limit);
};

export const canGoNext = (sliceName: string) => (state: RootState) => {
  const { page, limit, total } = getPaginationState(sliceName)(state);
  return page < Math.ceil(total / limit) - 1;
};

export const canGoPrev = (sliceName: string) => (state: RootState) => {
  const { page } = getPaginationState(sliceName)(state);
  return page > 0;
};
