import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './DriversTable.styles.ts';
import { Props } from './DriversTable.types.ts';

export const DriversTable: React.FC<Props> = ({
  data,
  onSelect,
  onViewResults,
}) => {
  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.iconCell]}>Info</Text>
      <Text style={styles.cell}>Name</Text>
      <Text style={styles.cell}>Nationality</Text>
      <Text style={styles.cell}>Date of Birth</Text>
      <Text style={[styles.cell, styles.iconCell]}>Results</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item) => item.driverId}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => onSelect(item.driverId)}
            style={styles.iconCell}
          >
            <Text>ℹ️</Text>
          </TouchableOpacity>
          <Text style={styles.cell}>
            {item.givenName} {item.familyName}
          </Text>
          <Text style={styles.cell}>{item.nationality}</Text>
          <Text style={styles.cell}>{item.dateOfBirth}</Text>
          <TouchableOpacity
            style={styles.iconCell}
            onPress={() => onViewResults(item.driverId)}
          >
            <Text>📊</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
