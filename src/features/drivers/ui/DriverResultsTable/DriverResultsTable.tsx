import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './DriverResults.styles.ts';
import { DriverResult } from 'entities/driverResult/model/types.ts';

interface DriverResultsTableProps {
  results: DriverResult[];
}

const DriverResultsTable: React.FC<DriverResultsTableProps> = ({ results }) => {
  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={styles.cell}>Season</Text>
      <Text style={styles.cell}>Round</Text>
      <Text style={styles.cell}>Race name</Text>
      <Text style={styles.cell}>Number</Text>
      <Text style={styles.cell}>Position</Text>
    </View>
  );

  return (
    <FlatList
      data={results}
      keyExtractor={(item) => `${item.season}-${item.round}`}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.season}</Text>
          <Text style={styles.cell}>{item.round}</Text>
          <Text style={styles.cell}>{item.raceName}</Text>
          <Text style={styles.cell}>{item.number}</Text>
          <Text style={styles.cell}>{item.position}</Text>
        </View>
      )}
    />
  );
};

export default DriverResultsTable;
