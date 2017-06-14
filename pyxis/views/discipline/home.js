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

  goBack() {
    this.navigate('AllDisciplines', {
      course: this.course
    });
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
          <Button title="Excluir" onPress={() => this.remove()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default DisciplineScreen;