import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Components from './../../components';

import ClazzService from './../../services/clazz';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  },
  header: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
});

class ClazzScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Turma'
  };

  get classz() {
    return this.props.navigation.state.params.classz;
  }

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

  }

  navigateToSemester(semester) {
    this.navigate('Semester', semester);
  }

  async remove() {
    try {
      const institute = await this.services.graduationClassesRepository.destroy(this.classz);

      Alert.alert('Turma removida com sucesso!');

      this.goBack();
    } catch (err) {
      Alert.alert('Ops..', err);
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
          <View style={styles.header}>
            <Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
          </View>
        </View>
        <View>
          {
            this.state.semesters.map(semester => {
              return (
                <Components.PButton
                  key={semester.id}
                  title={semester.name}
                  onPress={() => this.navigateToSemester(semester)}>
                </Components.PButton>
              )
            })
          }
        </View>
      </View>
    );
  }
}

export default ClazzScreen;