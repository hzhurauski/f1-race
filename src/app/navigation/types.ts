import { Driver } from '@entities/driver/model/types';

export type RootStackParamList = {
  DriversList: undefined;
  DriverDetails: { driver: Driver };
  DriverResults: { driverId: string };
};
