import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  }
});

class SemesterScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Turma'
  };

  get classz() {
    return this.props.navigation.state.params.classz;
  }

  get semester() {
    return this.props.navigation.state.params.semester;
  }

  get course() {
    return this.props.navigation.state.params.course;
  }

  constructor(props) {
    super(props);

    this.state = {
      periods: [ ]
    };
  }

  async componentDidMount() {
    const periods = await this.services.gra
  }

  goToPeriod(period) {
    this.navigate('Period', {
      semester: this.semester,
      period
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>Semestre {this.semester.number}</Text>
        </View>
        <View>
          <Components.PButton title="Criar novo periodo" onPress={() => this.createNewPeriod()}></Components.PButton>
          {
            this.state.periods.map(period => {
              const title = `${period.discipline.name} - ${period.start} - ${period.end}`

              return <Components.PButton key={period.id} title={title} onPress={() => this.goToPeriod(period.id)}></Components.PButton>
            })
          }
        </View>
      </View>
    );
  }
}

export default SemesterScreen;