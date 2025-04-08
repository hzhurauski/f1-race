import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDrivers } from './thunk';
import { DriverState } from './types';

const initialState: DriverState = {
  data: [],
  loading: false,
  error: null,
  page: 0,
  limit: 30,
  total: 0,
  hasMore: true,
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.page = 0; // Сброс страницы при изменении лимита
    },
    resetDrivers(state) {
      state.data = [];
      state.page = 0;
      state.total = 0;
      state.hasMore = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrivers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.drivers;
        state.total = action.payload.total;
        state.hasMore = (state.page + 1) * state.limit < action.payload.total;
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setLimit, resetDrivers } = driverSlice.actions;
export const driverReducer = driverSlice.reducer;
