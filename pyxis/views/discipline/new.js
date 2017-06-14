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
    return this.props.navigate.state.params.course;
  }

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      name: '',
      course: { },
      courses: [
        { name: '', id: '' }
      ]
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createDiscipline() {
    try {

      //FAZER REQUEST API AQUI PARA SALVAR DISCIPLINA

      Alert('Sucesso!');
    } catch (err) {
      Alert('Oops', err);
    }
  }

  componentDidMount() {
    //FAZER REQUEST API AQUI PARA PEGAR CURSOS

    this.setState({
      courses: [
      ]
    })
  }

  goBack() {
    this.navigate('Course', {
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