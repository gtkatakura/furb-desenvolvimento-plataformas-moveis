import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Components from './../../components';

const style = StyleSheet.create({
  base: {
    padding: 24
  },
  header: {
    marginBottom: 16
  },
  title: {
    fontSize: 24
  }
});

class HomeScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.base}>
        <View>
          <View style={style.header}>
            <Text style={style.title}>Home</Text>
          </View>
          <View>
            <Components.PButton title="Instituições" onPress={() => this.navigate('AllInstitutes')}></Components.PButton>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;