import React from 'react';
import { Alert, Text, View, Button, StyleSheet, ScrollView } from 'react-native';
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
})

export default class NewPeriodDayScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Novo período de aula'
  };

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  constructor(props) {
    super(props);

    this.state = {
      institute_id: this.institute.id,
      name: '',
      class_time: 0,
      interval_time: 0,
      start_of_class: ''
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createPeriodDay() {
    try {
      await this.services.periodDaysRepository.save(this.state);

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
          <Text style={style.title}>Novo período de aula</Text>
        </View>
        <ScrollView style={style.content}>
          <TextField
            name="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <TextField
            name="class_time"
            placeholder="Tempo de aula"
            value={this.state.class_time}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <TextField
            name="interval_time"
            placeholder="Tempo de intervalo"
            value={this.state.interval_time}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <TextField
            name="start_of_class"
            placeholder="Início da Aula"
            value={this.state.start_of_class}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <Components.PButton title="Salvar" onPress={() => this.createPeriodDay()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}
