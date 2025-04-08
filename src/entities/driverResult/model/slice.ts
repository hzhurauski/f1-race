import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDriverResults } from 'entities/driverResult/model/thunks.ts';
import { DriverResultState } from 'entities/driverResult/model/types.ts';

const initialState: DriverResultState = {
  results: [],
  loading: false,
  error: null,
  page: 0,
  limit: 30,
  total: 0,
  hasMore: true,
};

const driverResultSlice = createSlice({
  name: 'driverResults',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.page = 0;
    },
    resetResults(state) {
      state.results = [];
      state.page = 0;
      state.total = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDriverResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDriverResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
        state.total = action.payload.total;
        state.hasMore = (state.page + 1) * state.limit < action.payload.total;
      })
      .addCase(fetchDriverResults.rejected, (state, action) => {
        state.error = action.error.message ?? 'Unknown error';
        state.loading = false;
      });
  },
});

export const { setPage, setLimit, resetResults } = driverResultSlice.actions;
export const driverResultReducer = driverResultSlice.reducer;
