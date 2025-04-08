import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationSliceState } from './types.ts';

const initialState: PaginationSliceState = {};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<{ sliceName: string; page: number }>) {
      const { sliceName, page } = action.payload;
      if (!state[sliceName]) {
        state[sliceName] = { page: 0, limit: 30, total: 0 };
      }
      state[sliceName].page = page;
    },
    setPaginationData(
      state,
      action: PayloadAction<{
        sliceName: string;
        total: number;
        limit?: number;
      }>,
    ) {
      const { sliceName, total, limit } = action.payload;
      if (!state[sliceName]) {
        state[sliceName] = { page: 0, limit: limit || 30, total: 0 };
      }
      state[sliceName].total = total;
      if (limit !== undefined) {
        state[sliceName].limit = limit;
      }
    },
    resetPagination(state, action: PayloadAction<string>) {
      const sliceName = action.payload;
      if (state[sliceName]) {
        state[sliceName] = { page: 0, limit: 30, total: 0 };
      }
    },
  },
});

export const { setPage, setPaginationData, resetPagination } =
  paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
