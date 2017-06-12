import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
  }

  get services() {
    return this.props.navigation.state.params.services;
  }

  navigateTo(where) {
    this.props.navigation.navigate(where, { services: this.services });
  }

  defaultOptions() {
    return (
      <View>
        <Button title="Criar nova instituição" onPress={() => this.navigateTo('NewInstitute')}></Button>
        <Button title="Vincular-se a uma instituição" onPress={() => this.navigateTo('BindInstitute')}></Button>
      </View>
    );
  }

  maintainerOptions() {
    return (
      <View>
        <Button title="Criar novo curso" onPress={() => this.navigateTo('NewCourse')}></Button>
        <Button title="Criar nova disciplina" onPress={() => this.navigateTo('NewDiscipline')}></Button>
      </View>
    );
  }

  studentOptions() {
    return (
      <View>
        <Button title="Ver curso" onPress={() => this.navigateTo('Course')}></Button>
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