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
  },
  header_actions: {
    flexWrap: 'wrap',
    flexDirection: 'row'
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
  async remove() {
    try {
      const institute = await this.services.disciplineRepository.destroy(this.discipline);

      Alert.alert('Disciplina removida com sucesso!');

      this.goBack();
    } catch (err) {
      Alert.alert('Ops..', err);
    }
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>{this.discipline.name}</Text>
          <View style={styles.header_actions}>
            {
              // <Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
            }
          </View>
        </View>
        <View>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default DisciplineScreen;