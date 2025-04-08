import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { setPage, setLimit } from 'entities/driver/model/slice';
import { fetchDrivers } from 'entities/driver/model/thunk.ts';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { DriversTable } from 'features/drivers/ui/DriversTable/DriversTable.tsx';
import {
  selectDrivers,
  selectDriversError,
  selectDriversLoading,
  selectDriversPage,
  selectDriversLimit,
  selectDriversTotal,
  selectDriversHasMore,
} from 'entities/driver/model/selectors.ts';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'app/navigation/types';
import { PaginationControls } from 'shared/components/PaginationControls/PaginationControls';
import { styles } from './styles';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DriversList'
>;

export const DriversListScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  const drivers = useAppSelector(selectDrivers);
  const isLoading = useAppSelector(selectDriversLoading);
  const error = useAppSelector(selectDriversError);
  const page = useAppSelector(selectDriversPage);
  const limit = useAppSelector(selectDriversLimit);
  const total = useAppSelector(selectDriversTotal);
  const hasMore = useAppSelector(selectDriversHasMore);

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(fetchDrivers({ page, limit }));
  }, [dispatch, page, limit]);

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
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <>
            <DriversTable
              onViewResults={handleViewResults}
              data={drivers}
              onSelect={handleSelectDriver}
            />

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
