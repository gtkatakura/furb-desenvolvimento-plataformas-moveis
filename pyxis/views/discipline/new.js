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

class NewDisciplineScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Nova matéria'
  };

  get course() {
    return this.props.navigation.state.params.course;
  }

  constructor(props) {
    super(props);

    this.state = {
      course: this.course.name,
      name: '',
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createDiscipline() {
    try {
      const discipline = await this.services.disciplinesRepository.save({
        course_id: this.course.id,
        name: this.state.name
      });

      Alert('Sucesso!');

      this.navigate('AllDisciplines', {
        course: this.course
      });
    } catch (err) {
      Alert('Oops', err);
    }
  }

  goBack() {
    this.navigate('AllDisciplines', {
      course: this.course
    });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova disciplina</Text>
        </View>
        <View style={style.content}>
          <Components.TextField name="name" placeholder="Nome" value={this.state.start} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.Select value={this.state.course} displayField="name" valueField="id" items={this.state.courses}></Components.Select>

          <Button title="Salvar" onPress={() => this.createDiscipline()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default NewDisciplineScreen;