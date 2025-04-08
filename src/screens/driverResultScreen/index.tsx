import React, { useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'app/navigation/types';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import {
  getDriversPage,
  selectDriverResults,
  selectDriverResultsError,
  selectDriverResultsLoading,
} from 'entities/driverResult/model/selectors.ts';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { fetchDriverResults } from 'entities/driverResult/model/thunks.ts';
import { setPage } from 'entities/driverResult/model/slice.ts';
import { styles } from './styles.ts';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DriverResultsTable from 'features/drivers/ui/DriverResultsTable/DriverResultsTable.tsx';

type DriverDetailsRouteProp = RouteProp<RootStackParamList, 'DriverResults'>;

const DriverResultsScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<DriverDetailsRouteProp>();
  const { driverId } = route.params;
  const page = useAppSelector(getDriversPage);
  const results = useAppSelector(selectDriverResults);
  const isLoading = useAppSelector(selectDriverResultsLoading);
  const error = useAppSelector(selectDriverResultsError);

  useEffect(() => {
    dispatch(fetchDriverResults(driverId));
  }, [dispatch, driverId]);

  const nextPage = () => dispatch(setPage(page + 1));
  const prevPage = () => dispatch(setPage(Math.max(page - 1, 0)));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading && <ActivityIndicator size="large" />}
        {error && <Text style={styles.error}>{error}</Text>}

        {!isLoading && <DriverResultsTable results={results} />}

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

export default DriverResultsScreen;
