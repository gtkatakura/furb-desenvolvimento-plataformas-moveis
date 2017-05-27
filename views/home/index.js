import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>
          Home
        </Text>
      </View>
    );
  }
}

export default HomeScreen;