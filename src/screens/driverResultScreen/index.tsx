import React, { useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'app/navigation/types';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import {
  getDriversPage,
  getDriversLimit,
  getDriversTotal,
  selectDriverResults,
  selectDriverResultsError,
  selectDriverResultsLoading,
} from 'entities/driverResult/model/selectors.ts';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { setLimit } from 'entities/driverResult/model/slice';
import { styles } from './styles.ts';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DriverResultsTable from 'features/drivers/ui/DriverResultsTable/DriverResultsTable.tsx';
import { fetchDriverResults } from 'entities/driverResult/model/thunks.ts';
import { setPage } from 'entities/driver/model/slice.ts';
import { PaginationControls } from 'shared/components/PaginationControls/PaginationControls';

type DriverDetailsRouteProp = RouteProp<RootStackParamList, 'DriverResults'>;

const DriverResultsScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<DriverDetailsRouteProp>();
  const { driverId } = route.params;

  const page = useAppSelector(getDriversPage);
  const limit = useAppSelector(getDriversLimit);
  const total = useAppSelector(getDriversTotal);
  const results = useAppSelector(selectDriverResults);
  const isLoading = useAppSelector(selectDriverResultsLoading);
  const error = useAppSelector(selectDriverResultsError);

  const totalPages = Math.ceil(total / limit);
  const hasMore = page < totalPages - 1;

  useEffect(() => {
    dispatch(fetchDriverResults({ driverId, page, limit }));
  }, [dispatch, driverId, page, limit]);

  const nextPage = () => {
    if (hasMore) {
      dispatch(setPage(page + 1));
    }
  };

  const prevPage = () => {
    dispatch(setPage(Math.max(page - 1, 0)));
  };

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
    dispatch(setPage(0));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading && page === 0 ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <>
            <DriverResultsTable results={results} />

            <PaginationControls
              page={page}
              totalPages={totalPages}
              onNext={nextPage}
              onPrev={prevPage}
              canNext={hasMore}
              canPrev={page > 0}
            />

            <View style={styles.limitSelector}>
              <Text>Items per page:</Text>
              {[10, 20, 30].map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => handleLimitChange(item)}
                >
                  <Text
                    style={[
                      styles.limitOption,
                      limit === item && styles.activeLimit,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DriverResultsScreen;
