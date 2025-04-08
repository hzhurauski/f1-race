import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'app/navigation/types';
import { DriverDetail } from 'features/drivers/ui/DriverDetail/DriverDetail';
import { ScreenNames } from 'shared/const';

type DriverDetailsRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.DRIVER_DETAILS
>;

export const DriverDetailsScreen = () => {
  const route = useRoute<DriverDetailsRouteProp>();
  const { driver } = route.params;

  return <DriverDetail {...driver} />;
};
