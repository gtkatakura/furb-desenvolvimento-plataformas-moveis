import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Components from './../../components';

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
      course_id: this.course.id,
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
      const discipline = await this.services.disciplinesRepository.save(this.state);

      Alert.alert('Registro efetuado com sucesso!');
      this.goBack();
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova disciplina</Text>
        </View>
        <ScrollView>
          <Components.TextField name="name" placeholder="Nome" value={this.state.name} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.PButton title="Salvar" onPress={() => this.createDiscipline()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default NewDisciplineScreen;