import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const style = StyleSheet.create({
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

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      period_id: state.params.period_id,
      semester_id: state.params.semester_id,
      start: '',
      end: '',
      discipline: ''
    };
  }

  async fetchPeriod() {
    // PEGAR PERIODO AQUI
  }

  goBack() {
    this.navigate('AllPeriods', { semester: { semester_id: this.state.semester_id }});
  }

  componentDidMount() {
    const period = this.fetchPeriod();

    this.setState({
      start: period.start,
      end: period.end,
      discipline: discipline.name
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>Periodo</Text>
        </View>
        <View>
          <Text>{this.state.start}</Text>
          <Text>{this.state.end}</Text>
          <Text>{this.state.discipline}</Text>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default PeriodScreen;