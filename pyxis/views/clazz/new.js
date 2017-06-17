import React from 'react';
import { Alert, View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Components from './../../components';

import TextField from './../../components/TextField';

const style = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
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
      course_id: this.course.id,
      year: '',
      semesters: 0
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createClazz() {
    try {
      await this.services.graduationClassesRepository.save(this.state);
      this.goBack();
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
    const { state } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova turma</Text>
        </View>
        <ScrollView>
          <TextField name="year" placeholder="Ano" value={this.state.year} onChange={e => this.onFieldChange(e)}> </TextField>
          <TextField name="semesters" placeholder="Quantidade de semesters" value={this.state.semesters} onChange={e => this.onFieldChange(e)}> </TextField>
          <Components.PButton title="Salvar" onPress={() => this.createClazz()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default NewClazzScreen;