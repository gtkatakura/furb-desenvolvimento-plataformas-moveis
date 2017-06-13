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

class NewPeriodScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Novo período'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      semester_id: state.params.semester_id,
      start: '',
      end: '',
      discipline: {
        name: '',
        value: ''
      },
      disciplines: []
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createPeriod() {
    try {

      //FAZER REQUEST API AQUI PARA SALVAR PERIODO

      Alert('Sucesso!');
    } catch (err) {
      Alert('Oops', err);
    }
  }

  componentDidMount() {
    //FAZER REQUEST API AQUI PARA PEGAR MATÉRIAS

    this.setState({
      disciplines: [
      ]
    })
  }

  goBack() {
    this.navigate('Semester', { semester_id: this.state.semester_id });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Novo período</Text>
        </View>
        <View style={style.content}>
          <Components.TextField name="start" placeholder="Inicio de periodo" value={this.state.start} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.TextField name="end" placeholder="Fim de periodo" value={this.state.end} onChange={e => this.onFieldChange(e)}></Components.TextField>

          <Components.Select value={this.state.discipline} displayField="name" valueField="id" items={this.state.disciplines}></Components.Select>
          
          <Button title="Salvar" onPress={() => this.createPeriod()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default NewPeriodScreen;