import { createAsyncThunk } from '@reduxjs/toolkit';
import { Driver } from './types';
import { getDrivers } from '@entities/driver/api/getDrivers.ts';

export const fetchDrivers = createAsyncThunk<Driver[], number>(
  'driver/fetchDrivers',
  async (page, thunkAPI) => {
    try {
      return await getDrivers(page);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
