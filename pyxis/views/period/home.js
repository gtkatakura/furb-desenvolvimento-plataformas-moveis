import React from 'react';
import { Alert, View, Text, Button, StyleSheet, ScrollView } from 'react-native';

import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
  },
  title: {
    fontSize: 24
  }
});

class PeriodScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Período'
  };

  get periodDiscipline() {
    return this.props.navigation.state.params.periodDiscipline;
  }

  get graduationSemester() {
    return this.props.navigation.state.params.graduationSemester;
  }

  constructor(props) {
    super(props);

    this.state = {
      start: this.periodDiscipline.period_start,
      end: this.periodDiscipline.period_end,
      discipline: this.periodDiscipline.discipline
    }
  }

  async componentDidMount() {
    const periodDisciplines = await this.services.studentsPeriodDisciplinesRepository.all({
      period_discipline_id: this.periodDiscipline.id
    });

    this.setState({
      hasPeriodDisciplines: periodDisciplines.length === 1,
      discipline: this.periodDiscipline.discipline
    });
  }

  async createStudentsPeriodDiscipline() {
    try {
      const user = await this.services.usersRepository.find(this.services.currentUser.id);
      const student = user.student || await this.services.studentsRepository.save({
        user_id: this.services.currentUser.id
      });

      await this.services.studentsPeriodDisciplinesRepository.save({
        student_id: student.id,
        period_discipline_id: this.periodDiscipline.id
      });

      this.setState({
        hasPeriodDisciplines: true
      });
    } catch (err) {
      Alert.alert('Oops!', err.message);
    }
  }

  checkFrequency() {
    this.navigate('Frequency', {
      periodDiscipline: this.periodDiscipline
    });
  }

  formatDate(dateAsString) {
    const date = new Date(dateAsString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [day, month, year].join('/');
  }

  render() {
    const periodName = `${this.state.discipline.name}: ${this.formatDate(this.state.start)} - ${this.formatDate(this.state.end)}`;

    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.title}>{periodName}</Text>
        </View>
        <ScrollView>
          {this.state.hasPeriodDisciplines && <Components.PButton title="Verificar frequência" onPress={() => this.checkFrequency()}></Components.PButton>}
          {!this.state.hasPeriodDisciplines && <Components.PButton title="Inscrever-se" onPress={() => this.createStudentsPeriodDiscipline()} />}
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default PeriodScreen;