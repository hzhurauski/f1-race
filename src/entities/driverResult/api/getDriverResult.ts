import { api } from 'shared/api';
import { DriverResult } from 'entities/driverResult/model/types.ts';

export const getDriverResults = async (
  driverId: string,
  page: number = 0,
  limit: number = 0,
): Promise<DriverResult[]> => {
  const response = await api.get(
    `/drivers/${driverId}/results.json?limit=${limit}&offset=${page * limit}`,
  );
  const races = response.data.MRData.RaceTable.Races;

  return races.map((race: any) => {
    const result = race.Results?.[0];
    return {
      season: race.season,
      round: race.round,
      raceName: race.raceName,
      number: result?.number ?? 'N/A',
      position: result?.position ?? 'N/A',
    };
  });
};
