import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './DriverResults.styles.ts';
import { DriverResult } from '@entities/driverResult/model/types.ts';

const DriverResultsTable: React.FC<DriverResult[]> = (props) => {
  if (!props || props.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No results available for this driver</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={props}
      keyExtractor={(item) => `${item.season}-${item.round}`}
      renderItem={({ item }) => (
        <View style={styles.raceContainer}>
          <View style={styles.raceHeader}>
            <Text style={styles.seasonText}>{item.season}</Text>
            <Text style={styles.raceNameText}>{item.raceName}</Text>
            <Text style={styles.roundText}>Round {item.round}</Text>
          </View>

          {item.Results.map((result, index) => (
            <View key={index} style={styles.resultRow}>
              <View style={styles.resultCell}>
                <Text style={styles.resultLabel}>Position:</Text>
                <Text style={styles.resultValue}>{result.position}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    />
  );
};

export default DriverResultsTable;
