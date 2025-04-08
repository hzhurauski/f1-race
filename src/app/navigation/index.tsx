import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DriverDetailsScreen } from 'screens/driverDetailsScreen';
import { DriversListScreen } from 'screens/driversListScreen';
import { RootStackParamList } from './types';
import DriverResultsScreen from 'screens/driverResultScreen';
import { ScreenNames } from 'shared/const';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ScreenNames.DRIVERS_LIST}>
      <Stack.Screen
        name={ScreenNames.DRIVERS_LIST}
        component={DriversListScreen}
        options={{ title: 'Drivers' }}
      />
      <Stack.Screen
        name={ScreenNames.DRIVER_DETAILS}
        component={DriverDetailsScreen}
        options={{ title: 'Driver Details' }}
      />
      <Stack.Screen
        name={ScreenNames.DRIVER_RESULTS}
        component={DriverResultsScreen}
        options={{ title: 'Race Results' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
