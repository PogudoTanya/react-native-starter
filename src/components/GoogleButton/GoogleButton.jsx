import React from 'react';

import Button from 'components/Button';

import GoogleIcon from '../../../assets/icons/google.svg';

import styles from './GoogleButton.styles';

function GoogleButton() {
  return (
    <Button
      style={styles.googleButton}
      icon={GoogleIcon}
      type="social"
      onPress={() => {}}
    />
  );
}

export default GoogleButton;
