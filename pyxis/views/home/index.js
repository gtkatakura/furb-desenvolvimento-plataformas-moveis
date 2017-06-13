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
        <Button title="Criar nova instituição" onPress={() => this.navigate('NewInstitute')}></Button>
        <Button title="Vincular-se a uma instituição" onPress={() => this.navigate('AllInstitutes')}></Button>
      </View>
    );
  }

  maintainerOptions() {
    return (
      <View>
        <Button title="Criar novo curso" onPress={() => this.navigate('NewCourse')}></Button>
        <Button title="Criar nova disciplina" onPress={() => this.navigate('NewDiscipline')}></Button>
      </View>
    );
  }

  studentOptions() {
    return (
      <View>
        <Button title="Ver curso" onPress={() => this.navigate('Course')}></Button>
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