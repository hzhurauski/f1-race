import {
  setPage,
  setPaginationData,
  resetPagination,
} from 'features/pagination/model/slice';
import {
  getCurrentPage,
  getLimit,
  getTotal,
  getTotalPages,
  canGoNext,
  canGoPrev,
} from 'features/pagination/model/selectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';

export const usePagination = (sliceName: string) => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(getCurrentPage(sliceName));
  const limit = useAppSelector(getLimit(sliceName));
  const total = useAppSelector(getTotal(sliceName));
  const totalPages = useAppSelector(getTotalPages(sliceName));
  const canNext = useAppSelector(canGoNext(sliceName));
  const canPrev = useAppSelector(canGoPrev(sliceName));

  const nextPage = () => {
    if (canNext) {
      dispatch(setPage({ sliceName, page: page + 1 }));
    }
  };

  const prevPage = () => {
    if (canPrev) {
      dispatch(setPage({ sliceName, page: page - 1 }));
    }
  };

  const setLimitPerPage = (newLimit: number) => {
    dispatch(setPaginationData({ sliceName, limit: newLimit, total }));
  };

  const reset = () => {
    dispatch(resetPagination(sliceName));
  };

  return {
    page,
    limit,
    total,
    totalPages,
    nextPage,
    prevPage,
    setLimitPerPage,
    reset,
    canNext,
    canPrev,
    offset: page * limit,
  };
};
