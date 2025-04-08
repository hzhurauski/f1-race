import { RootState } from '@app/providers/store';

export const selectDriverResults = (state: RootState) =>
  state.driverResults.results;

export const selectDriverResultsLoading = (state: RootState) =>
  state.driverResults.loading;

export const selectDriverResultsError = (state: RootState) =>
  state.driverResults.error;

export const getDriversPage = (state: RootState) => state.driverResults.page;
