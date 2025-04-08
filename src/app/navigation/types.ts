import { Driver } from '@entities/driver/model/types';

import { ScreenNames } from 'shared/const';

export type RootStackParamList = {
  [ScreenNames.DRIVERS_LIST]: undefined;
  [ScreenNames.DRIVER_DETAILS]: { driver: Driver };
  [ScreenNames.DRIVER_RESULTS]: { driverId: string };
};
