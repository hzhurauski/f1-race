import { api } from 'shared/api';
import { DriversResponse } from '../model/types';

export const getDrivers = async (
  limit: number,
  offset: number,
): Promise<DriversResponse> => {
  const response = await api.get(
    `/drivers.json?limit=${limit}&offset=${offset}`,
  );
  const drivers = response.data.MRData.DriverTable.Drivers;

  return {
    drivers: drivers.map((driver: any) => ({
      driverId: driver.driverId,
      givenName: driver.givenName,
      familyName: driver.familyName,
      dateOfBirth: driver.dateOfBirth,
      nationality: driver.nationality,
      url: driver.url,
    })),
    total: parseInt(response.data.MRData.total, 10),
    limit: parseInt(response.data.MRData.limit, 10),
    offset: parseInt(response.data.MRData.offset, 10),
  };
};
