import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  }
});

class ClazzScreen extends React.Component {
  static navigationOptions = {
    title: 'Turma'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      name: state.params ? state.params.name : '',
      id: state.params ? state.params.id : -1,
      periods: [

      ]
    };

    this.fetchSemesterData();
  }

  fetchSemesterData() {
    //TODO: api
  }

  createNewPeriod() {
    const { navigate } = this.props.navigation;

    navigate('NewPeriod', { semesterId: this.state.id });
  }

  navigateToPeriod(period) {
    const { navigate } = this.props.navigation;

    navigate('Period', period);
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
              return (
                <Button
                  key={period.id}
                  title={period.name}
                  onPress={() => this.navigateToPeriod(period)}>
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