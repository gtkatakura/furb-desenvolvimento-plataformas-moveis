import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Components from './../../components';

class HomeScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
  }

  defaultOptions() {
    return (
      <View>
        <Components.PButton title="Instituições" onPress={() => this.navigate('AllInstitutes')}></Components.PButton>
      </View>
    );
  }

  maintainerOptions() {
    return (
      <View>
        <Components.PButton title="Criar novo curso" onPress={() => this.navigate('NewCourse')}></Components.PButton>
        <Components.PButton title="Criar nova disciplina" onPress={() => this.navigate('NewDiscipline')}></Components.PButton>
      </View>
    );
  }

  studentOptions() {
    return (
      <View>
        <Components.PButton title="Ver curso" onPress={() => this.navigate('Course')}></Components.PButton>
      </View>
    );
  }

  render() {
    return (
      <View>
        { this.defaultOptions() }
        { this.maintainerOptions() }
        { this.studentOptions() }
      </View>
    );
  }
}

export default HomeScreen;