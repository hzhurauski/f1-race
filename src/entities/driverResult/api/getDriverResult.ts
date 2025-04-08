import { api } from 'shared/api';
import {
  DriverResult,
  DriverResultsResponse,
} from 'entities/driverResult/model/types.ts';

export const getDriverResults = async (
  driverId: string,
  page: number = 0,
  limit: number = 30,
): Promise<DriverResultsResponse> => {
  const offset = page * limit;
  const response = await api.get(
    `/drivers/${driverId}/results.json?limit=${limit}&offset=${offset}`,
  );

  const { MRData } = response.data;
  const races = MRData.RaceTable.Races;

  const results: DriverResult[] = races.map((race: any) => {
    const result = race.Results?.[0] || {};
    return {
      season: race.season,
      round: race.round,
      raceName: race.raceName,
      circuitId: race.Circuit?.circuitId || 'N/A',
      date: race.date,
      time: race.time,
      number: result.number?.toString() || 'N/A',
      position: result.position?.toString() || 'N/A',
      points: result.points?.toString() || '0',
      grid: result.grid?.toString() || 'N/A',
      laps: result.laps?.toString() || '0',
      status: result.status || 'N/A',
      constructor: result.Constructor?.name || 'N/A',
    };
  });

  return {
    results,
    total: parseInt(MRData.total, 10),
    limit: parseInt(MRData.limit, 10),
    offset: parseInt(MRData.offset, 10),
  };
};
