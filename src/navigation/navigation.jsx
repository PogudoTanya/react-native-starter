import 'react-native-gesture-handler';

import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

import AuthScreens from './authStack';
import AppScreens from './appStack';

function AppNavigation({ token }) {
  const activeStack = useMemo(() => {
    if (token) {
      return <AppScreens />;
    }
    return <AuthScreens token={token} />;
  }, [token]);

  return <NavigationContainer>{activeStack}</NavigationContainer>;
}

AppNavigation.propTypes = {
  token: PropTypes.string,
};

AppNavigation.defaultProps = {
  token: null,
};

export default AppNavigation;
