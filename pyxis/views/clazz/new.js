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
      year: '',
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
      year: this.state.year,
      semesters: this.state.semesters
    };

    //TODO API
  }

  render() {
    const { state } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova turma</Text>
        </View>
        <View style={style.content}>
          <TextField name="year" placeholder="Ano" value={this.state.year} onChange={e => this.onFieldChange(e)}> </TextField>
          <TextField name="semesters" placeholder="Quantidade de semesters" value={this.state.semesters} onChange={e => this.onFieldChange(e)}> </TextField>
          <Components.PButton title="Salvar" onPress={() => this.createClazz()}></Components.PButton>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default NewClazzScreen;