import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDriverResults } from 'entities/driverResult/model/thunks.ts';
import { DriverResultState } from 'entities/driverResult/model/types.ts';

const initialState: DriverResultState = {
  results: [],
  loading: false,
  error: null,
  page: 0,
};

const driverResultSlice = createSlice({
  name: 'driverResults',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriverResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDriverResults.fulfilled, (state, action) => {
        state.results = action.payload;
        state.loading = false;
      })
      .addCase(fetchDriverResults.rejected, (state, action) => {
        state.error = action.error.message ?? 'Unknown error';
        state.loading = false;
      });
  },
});

export const { setPage } = driverResultSlice.actions;
export const driverResultReducer = driverResultSlice.reducer;
