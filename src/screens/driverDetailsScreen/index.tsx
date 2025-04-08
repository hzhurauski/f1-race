import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@app/navigation/types';
import { DriverDetail } from 'features/drivers/ui/DriverDetail/DriverDetail.tsx';

type DriverDetailsRouteProp = RouteProp<RootStackParamList, 'DriverDetails'>;

export const DriverDetailsScreen = () => {
  const route = useRoute<DriverDetailsRouteProp>();
  const { driver } = route.params;

  return <DriverDetail {...driver} />;
};
