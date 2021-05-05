import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NAVBAR_ICONS} from 'helpers/constants';

import DashboardScreen from 'screens/DashboardScreen';
import HomeScreen from 'screens/HomeScreen';

import TabBarIcon from 'components/TabBarIcon';
import TabBarLabel from 'components/TabBarLabel';

import MoreIcon from '../../assets/icons/tabBar/more.svg';
import WalletIcon from '../../assets/icons/tabBar/wallet.svg';

import colors from 'themes/colors';

const Tab = createBottomTabNavigator();

function MoreStack() {
  return (
    <Tab.Navigator
      initialRouteName={NAVBAR_ICONS.MORE}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: colors.theme,
        },
      }}>
      <Tab.Screen
        name={NAVBAR_ICONS.MORE}
        component={HomeScreen}
        options={{
          tabBarLabel: label => (
            <TabBarLabel focused={label.focused} text={NAVBAR_ICONS.MORE} />
          ),
          tabBarIcon: icon => (
            <TabBarIcon focused={icon.focused} icon={MoreIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={NAVBAR_ICONS.WALLET}
        component={DashboardScreen}
        options={{
          tabBarLabel: label => (
            <TabBarLabel focused={label.focused} text={NAVBAR_ICONS.WALLET} />
          ),
          tabBarIcon: icon => (
            <TabBarIcon focused={icon.focused} icon={WalletIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MoreStack;
