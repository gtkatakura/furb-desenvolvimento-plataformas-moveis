import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
  },
  name: {
    fontSize: 24
  }
});

class SemesterScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Turma'
  };

  get graduationSemester() {
    return this.props.navigation.state.params.graduationSemester;
  }

  get graduationClass() {
    return this.props.navigation.state.params.graduationClass;
  }

  constructor(props) {
    super(props);

    this.state = {
      periodDisciplines: []
    };
  }

  async componentDidMount() {
    const periodDisciplines = await this.services.periodDisciplinesRepository.all({
      graduation_semester_id: this.graduationSemester.id
    });

    this.setState({ periodDisciplines })
  }

  goToPeriod(periodDiscipline) {
    this.navigate('Period', {
      graduationSemester: this.graduationSemester,
      periodDiscipline
    });
  }

  createNewPeriod() {
    this.navigate('NewPeriod', { graduationSemester: this.graduationSemester })
  }

  formatDate(dateAsString) {
    const date = new Date(dateAsString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [day, month, year].join('/');
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>Turma {this.graduationClass.year} - Semestre {this.graduationSemester.number}</Text>
        </View>
        <ScrollView>
          {
            this.isMaintainer() && <Components.PButton title="Criar novo periodo" onPress={() => this.createNewPeriod()}></Components.PButton>
          } 
          {
            this.state.periodDisciplines.map(periodDiscipline => {
              const title = `${periodDiscipline.discipline.name}: ${this.formatDate(periodDiscipline.period_start)} - ${this.formatDate(periodDiscipline.period_end)}`
              return <Components.PButton key={periodDiscipline.id} title={title} onPress={() => this.goToPeriod(periodDiscipline)}></Components.PButton>
            })
          }
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default SemesterScreen;