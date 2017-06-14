import React from 'react';
import {View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginBottom: 8
  }
});

const PButton = ({ title, onPress}) => {
  return (
    <View style={styles.button}>
      <Button title={title} onPress={onPress}></Button>
    </View>
  )
};

export default PButton;