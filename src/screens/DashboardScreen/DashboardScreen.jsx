import React from 'react';
import { View, Text } from 'react-native';

import GoogleButton from 'components/GoogleButton';

import styles from './DashboardScreen.styles';

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <GoogleButton />
    </View>
  );
}

export default DashboardScreen;
