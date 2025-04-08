import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { setPage } from 'entities/driver/model/slice';
import { fetchDrivers } from 'entities/driver/model/thunk.ts';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DriversTable } from 'features/drivers/ui/DriversTable/DriversTable.tsx';
import {
  getDrivers,
  getDriversError,
  getDriversLoading,
  getDriversPage,
} from 'entities/driver/model/selectors.ts';
import { useAppSelector } from 'shared/hooks/useAppSelector';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/navigation/types';

import { styles } from './styles';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DriversList'
>;

export const DriversListScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const drivers = useAppSelector(getDrivers);
  const isLoading = useAppSelector(getDriversLoading);
  const error = useAppSelector(getDriversError);
  const page = useAppSelector(getDriversPage);

  useEffect(() => {
    dispatch(fetchDrivers(page));
  }, [dispatch, page]);

  const nextPage = () => dispatch(setPage(page + 1));
  const prevPage = () => dispatch(setPage(Math.max(page - 1, 0)));

  const handleSelectDriver = (id: string) => {
    const driver = drivers.find((d) => d.driverId === id);
    if (driver) {
      navigation.navigate('DriverDetails', { driver });
    }
  };

  const handleViewResults = (driverId: string) => {
    navigation.navigate('DriverResults', { driverId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading && <ActivityIndicator size="large" />}
        {error && <Text style={styles.error}>{error}</Text>}

        {!isLoading && (
          <DriversTable
            onViewResults={handleViewResults}
            data={drivers}
            onSelect={handleSelectDriver}
          />
        )}

        <View style={styles.pagination}>
          <TouchableOpacity
            style={styles.button}
            onPress={prevPage}
            disabled={page === 0}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          <Text style={styles.pageText}>Page {page + 1}</Text>

          <TouchableOpacity style={styles.button} onPress={nextPage}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
