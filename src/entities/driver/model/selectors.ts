import { RootState } from '@app/providers/store';

export const selectDrivers = (state: RootState) => state.driver.data;
export const selectDriversLoading = (state: RootState) => state.driver.loading;
export const selectDriversError = (state: RootState) => state.driver.error;
export const selectDriversPage = (state: RootState) => state.driver.page;
export const selectDriversLimit = (state: RootState) => state.driver.limit;
export const selectDriversTotal = (state: RootState) => state.driver.total;
export const selectDriversHasMore = (state: RootState) => state.driver.hasMore;
