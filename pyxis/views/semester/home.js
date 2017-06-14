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

class ClazzScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Turma'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      course_id: this.state.course_id,
      periods: [ ]
    };
  }

  navigateToPeriod(period) {
    this.navigate('Period', {
      period_id: this.state.period_id,
      semester_id: this.state.semester_id
    });
  }

  goToPeriod(period_id) {
    this.navigate('Period', { 
      semester_id: this.state.semester_id,
      period_id
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          <Button
            title="Criar novo periodo"
            onPress={() => this.createNewPeriod()}>
          </Button>
          {
            this.state.periods.map(period => {
              const title = `${period.discipline.name} - ${period.start} - ${period.end}`

              return (
                <Button
                  key={period.id}
                  title={title}
                  onPress={() => this.goToPeriod(period.id)}>
                </Button>
              )
            })
          }
        </View>
      </View>
    );
  }
}

export default ClazzScreen;