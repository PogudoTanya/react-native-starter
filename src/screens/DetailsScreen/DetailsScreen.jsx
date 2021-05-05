import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DetailsScreen.styles';

function DetailsScreen({ navigation, route }) {
  const { id, data } = route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{id ? id : 'Ничего не пришло'}</Text>
      <Text>{data ? data : 'Ничего не пришло'}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', { id: '393x', data: '25.01.20000' })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

DetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      data: PropTypes.string,
    }),
  }),
};

export default DetailsScreen;
