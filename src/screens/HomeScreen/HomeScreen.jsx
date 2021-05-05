import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './HomeScreen.styles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Press on"
        onPress={() =>
          navigation.navigate('Details', { id: '1234567', data: '25.01.20000' })
        }
      />
    </View>
  );
}

export default HomeScreen;
