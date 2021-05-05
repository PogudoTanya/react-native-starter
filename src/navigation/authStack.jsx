import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import DetailsScreen from 'screens/DetailsScreen';
import HomeScreen from 'screens/HomeScreen';

function AppNavigation({token}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{title: 'Обзор'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        options={{title: 'Детали'}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

AppNavigation.propTypes = {
  token: PropTypes.string,
};

AppNavigation.defaultProps = {
  token: null,
};

export default AppNavigation;
