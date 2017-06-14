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

  get course() {
    return this.props.navigation.state.params.course;
  }

  constructor(props) {
    super(props);

    this.state = {
      name: `Matérias de ${this.course.name}`,
      disciplines: []
    };
  }

  async componentDidMount() {
    const disciplines = await this.services.disciplinesRepository.all({
      course_id: this.course.id
    });

    this.setState({
      disciplines
    });
  }

  goToDiscipline(discipline) {
    this.navigate('Discipline', {
      course: this.course,
      discipline
    });
  }

  createDiscipline() {
    this.navigate('NewDiscipline', {
      course: this.course
    });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Disciplinas de {this.course.name}</Text>
        </View>
        <View style={style.content}>
        <Components.PButton title="Nova disciplina" onPress={() => this.createDiscipline()}></Components.PButton>
          {
            this.state.disciplines.map((discipline, idx) => {
              return <Components.PButton key={`${idx}_${discipline.name}`} title={discipline.name} onPress={() => this.goToDiscipline(discipline)}></Components.PButton>
            })
          }
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default AllDisciplinesScreen;