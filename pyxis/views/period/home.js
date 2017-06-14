import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24
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
    const discipline = await this.services.disciplinesRepository.find(this.periodDiscipline.discipline.id);

    this.setState({
      discipline
    });
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
        <View>
          <Components.PButton title="Verificar frequência" onPress={() => this.checkFrequency()}></Components.PButton>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default PeriodScreen;