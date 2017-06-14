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

class AllDisciplinesScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Disciplinas'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      course_id: state.params.institute_id,
      disciplines: [ ]
    };
  }

  componentDidMount() {
    //FAZER REQUEST API AQUI PARA PEGAR MATÉRIAS

    this.setState({
      disciplines: [
      ]
    })
  }

  goBack() {
    this.navigate('Course', { course_id: this.state.course_id });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Disciplinas</Text>
        </View>
        <View style={style.content}>
          {
            this.state.disciplines.map(discipline => {
              return <Text key={discipline.id}>{discipline.name}</Text>
            })
          }
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default AllDisciplinesScreen;