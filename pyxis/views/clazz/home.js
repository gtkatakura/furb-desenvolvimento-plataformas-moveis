import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import ClazzService from './../../services/clazz';

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
      semesters: [
        { name: 'Semestre 1', id: 1 },
        { name: 'Semestre 2', id: 2 },
        { name: 'Semestre 3', id: 3 },
        { name: 'Semestre 4', id: 4 }
      ]
    };

    this.fetchClazzData();
  }

  fetchClazzData() {
    const { state } = this.props.navigation;

    if (!state.params) return;

    //TODO: api get semesters

    ClazzService.getClazz(state.params.id)
      .then(response => this.setState(response.data));
  }

  navigateToSemester(semester) {
    const { navigate } = this.props.navigation;

    navigate('Semester', semester);
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          {
            this.state.semesters.map(semester => {
              return (
                <Button
                  key={semester.id}
                  title={semester.name}
                  onPress={() => this.navigateToSemester(semester)}>
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