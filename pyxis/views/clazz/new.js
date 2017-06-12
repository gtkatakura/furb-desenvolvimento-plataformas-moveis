import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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

class NewClazzScreen extends React.Component {
  static navigationOptions = {
    title: 'Nova turma'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      courseId: state.params ? state.params.courseId : -1,
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

    //TODO api
  }

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova turma</Text>
        </View>
        <View style={style.content}>
          <TextField name="name" placeholder="Nome" value={this.state.name} onChange={e => this.onFieldChange(e)}> </TextField>
          <TextField name="semesters" placeholder="Quantidade de semesters" value={this.state.semesters} onChange={e => this.onFieldChange(e)}> </TextField>
          <Button title="Salvar" onPress={() => this.createClazz()}></Button>
          <Button title="Voltar" onPress={() => navigate('Course', { id: state.params ? state.params.courseId : -1})}></Button>
        </View>
      </View>
    );
  }
}

export default NewClazzScreen;