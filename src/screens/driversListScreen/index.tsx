import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { setPage } from 'entities/driver/model/slice';
import { fetchDrivers } from 'entities/driver/model/thunk.ts';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { DriverTable } from '@features/drivers/ui/DriverTable/DriverTable.tsx';
import {
  getDrivers,
  getDriversError,
  getDriversLoading,
  getDriversPage,
} from '@entities/driver/model/selectors.ts';
import { useAppSelector } from '@shared/hooks/useAppSelector';

export const DriversListScreen = () => {
  const dispatch = useAppDispatch();
  const drivers = useAppSelector(getDrivers);
  const isLoading = useAppSelector(getDriversLoading);
  const error = useAppSelector(getDriversError);
  const page = useAppSelector(getDriversPage);

  useEffect(() => {
    dispatch(fetchDrivers(page));
  }, [dispatch, page]);

  const nextPage = () => dispatch(setPage(page + 1));
  const prevPage = () => dispatch(setPage(Math.max(page - 1, 0)));

  return (
    <View>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      <DriverTable data={drivers} onSelect={(id: string) => console.log(id)} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}
      >
        <TouchableOpacity onPress={prevPage}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextPage}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
