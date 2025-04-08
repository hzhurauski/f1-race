import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrivers } from 'entities/driver/api/getDrivers.ts';

export const fetchDrivers = createAsyncThunk(
  'driver/fetchDrivers',
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    try {
      const offset = page * limit;
      return await getDrivers(limit, offset);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
