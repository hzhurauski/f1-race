import { api } from 'shared/api';
import { Driver } from '../model/types';

export const getDrivers = async (
  page: number = 0,
  limit: number = 30,
): Promise<Driver[]> => {
  const response = await api.get(
    `/drivers.json?limit=${limit}&offset=${page * limit}`,
  );
  return response.data.MRData.DriverTable.Drivers;
};
