import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Components from './../../components';

import TextField from './../../components/TextField';

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

class NewClazzScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Nova turma'
  };

  get course() {
    return this.props.navigation.state.params.course;
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      semesters: 0
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  createClazz() {
    const params = {
      courseId: this.state.courseId,
      name: this.state.name,
      semesters: this.state.semesters
    };

    //TODO API
  }

  goBack() {
    this.navigate('AllClasses', {
      course: this.course
    });
  }

  render() {
    const { state } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova turma</Text>
        </View>
        <View style={style.content}>
          <TextField name="name" placeholder="Nome" value={this.state.name} onChange={e => this.onFieldChange(e)}> </TextField>
          <TextField name="semesters" placeholder="Quantidade de semesters" value={this.state.semesters} onChange={e => this.onFieldChange(e)}> </TextField>
          <Button title="Salvar" onPress={() => this.createClazz()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default NewClazzScreen;