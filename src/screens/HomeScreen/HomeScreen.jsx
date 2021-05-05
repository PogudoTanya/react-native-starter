import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Press on"
        onPress={() =>
          navigation.navigate('Details', {id: '1234567', data: '25.01.20000'})
        }
      />
    </View>
  );
}

export default HomeScreen;
