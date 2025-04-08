import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDriverResults } from 'entities/driverResult/api/getDriverResult.ts';

export const fetchDriverResults = createAsyncThunk(
  'driverResults/fetch',
  async (driverId: string) => {
    return await getDriverResults(driverId);
  },
);
