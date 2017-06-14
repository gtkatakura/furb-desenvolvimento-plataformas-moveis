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

  get period() {
    return this.props.navigation.state.params.period;
  }

  get semester() {
    return this.props.navigation.state.params.semester;
  }

  constructor(props) {
    super(props);

    this.state = {
      discipline: { name: '' }
    }
  }

  async componentDidMount() {
    const discipline = await this.services.disciplinesRepository.find(this.period.discipline_id);

    this.setState({
      discipline
    });
  }

  checkFrequency() {
    this.navigate('Frequency', {
      period: this.period,
      semester: this.semester
    });
  }

  goBack() {
    this.navigate('AllPeriods', {
      semester: this.semester
    });
  }

  render() {
    const periodName = `${this.state.discipline.name} - ${this.period.start} - ${this.state.end}`;

    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{periodName}</Text>
        </View>
        <View>
          <Button title="Verificar frequência" onPress={() => this.checkFrequency()}></Button>
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default PeriodScreen;