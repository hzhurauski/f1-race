import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Driver } from 'entities/driver/model/types';
import { styles } from './DriverDetail.styles';

export const DriverDetail: FC<Driver> = (props) => {
  const { givenName, familyName, url, nationality, dateOfBirth } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {givenName} {familyName}
      </Text>
      <Text>Nationality: {nationality}</Text>
      <Text>Date of Birth: {dateOfBirth}</Text>
      <Text>More: {url}</Text>
    </View>
  );
};
