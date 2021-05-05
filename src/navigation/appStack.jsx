import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';
import DetailsScreen from 'screens/DetailsScreen';

import MoreStack from './moreStack';

const AppStack = createStackNavigator();

function AppScreens() {
  return (
    <AppStack.Navigator initialRouteName="More">
      <AppStack.Screen name="More" component={MoreStack} />
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Details" component={DetailsScreen} />
    </AppStack.Navigator>
  );
}

export default AppScreens;
