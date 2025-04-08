import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Driver } from '@entities/driver/model/types.ts';
import { styles } from './DriverTable.styles';

type Props = {
  data: Driver[];
  onSelect: (id: string) => void;
};

export const DriverTable: React.FC<Props> = ({ data, onSelect }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.driverId}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item.driverId)}
          style={styles.row}
        >
          <Text style={styles.cell}>
            {item.givenName} {item.familyName}
          </Text>
          <Text style={styles.cell}>{item.nationality}</Text>
          <Text style={styles.cell}>{item.dateOfBirth}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
