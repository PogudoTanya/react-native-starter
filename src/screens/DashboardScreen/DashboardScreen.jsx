import React from 'react';
import { View, Text } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import GoogleButton from 'components/GoogleButton';

import styles from './DashboardScreen.styles';

GoogleSignin.configure({
  scopes: [],
  webClientId:
    '572495857979-6v78unh72ra02pvb4d5tms8upfiv4iqq.apps.googleusercontent.com',
  offlineAccess: true,
  iosClientId:
    '572495857979-8ducl687hv7qkabpufpfqdjvemibl1f3.apps.googleusercontent.com',
});

const handlePress = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <GoogleButton handlePress={handlePress} />
    </View>
  );
}

export default DashboardScreen;
