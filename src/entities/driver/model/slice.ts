import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DriverState } from './types';
import { fetchDrivers } from './thunk';

const initialState: DriverState = {
  data: [],
  loading: false,
  error: null,
  page: 0,
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrivers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage } = driverSlice.actions;
export const driverReducer = driverSlice.reducer;
