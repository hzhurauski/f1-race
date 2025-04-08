import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DriverDetailsScreen } from 'screens/driverDetailsScreen';
import { DriversListScreen } from 'screens/driversListScreen';
import { RootStackParamList } from './types';
import DriverResultsScreen from '@screens/driverResultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="DriversList">
      <Stack.Screen name="DriversList" component={DriversListScreen} />
      <Stack.Screen name="DriverDetails" component={DriverDetailsScreen} />
      <Stack.Screen name="DriverResults" component={DriverResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
