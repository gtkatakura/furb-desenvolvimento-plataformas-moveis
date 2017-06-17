import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Components from './../../components';

const style = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
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
        <View style={style.header}>
          <Text style={style.title}>Home</Text>
        </View>
        <ScrollView>
          <View>
            <Components.PButton title="Instituições" onPress={() => this.navigate('AllInstitutes')}></Components.PButton>
          </View>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack}></Components.BackButton>
      </View>
    );
  }
}

export default HomeScreen;