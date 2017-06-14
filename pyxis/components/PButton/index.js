import React from 'react';
import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginBottom: 8
  }
});

const PButton = ({ title, onPress}) => {
  return <Button style={styles.button} title={title} onPress={onPress}></Button>
};

export default PButton;