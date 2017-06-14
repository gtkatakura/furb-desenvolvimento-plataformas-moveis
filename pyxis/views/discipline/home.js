//nome, curso

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
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

class DisciplineScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Disciplinas'
  };

  get course() {
    return this.props.navigation.state.params.course;
  }

  get discipline() {
    return this.props.navigation.state.params.discipline;
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  remove() {
    this.services.disciplinesRepository.destroy(this.discipline);
  }
  
  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>{this.discipline.name}</Text>
        </View>
        <View>
          <Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default DisciplineScreen;