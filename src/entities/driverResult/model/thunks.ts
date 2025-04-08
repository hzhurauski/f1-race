import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDriverResults } from 'entities/driverResult/api/getDriverResult.ts';
import { DriverResultsResponse } from 'entities/driverResult/model/types.ts';

export const fetchDriverResults = createAsyncThunk(
  'driverResults/fetch',
  async (params: { driverId: string; page: number; limit: number }) => {
    const { driverId, page, limit } = params;
    return (await getDriverResults(
      driverId,
      page,
      limit,
    )) as DriverResultsResponse;
  },
);
