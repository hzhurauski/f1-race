import { RootState } from '@app/providers/store';

export const getDrivers = (state: RootState) => state.driver.data;
export const getDriversLoading = (state: RootState) => state.driver.loading;
export const getDriversError = (state: RootState) => state.driver.error;
export const getDriversPage = (state: RootState) => state.driver.page;
