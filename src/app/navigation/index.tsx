import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DriversListScreen from '@screens/driversListScreen';

export type RootStackParamList = {
  DriversList: undefined;
  DriverDetails: { driverId: string };
  DriverRaces: { driverId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DriversList">
        <Stack.Screen name="DriversList" component={DriversListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
