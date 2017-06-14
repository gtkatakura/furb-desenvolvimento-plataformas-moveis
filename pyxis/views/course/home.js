import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Components from './../../components';

import CourseService from './../../services/course';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  }
});

class CourseScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Curso'
  };

  get course() {
    return this.props.navigation.state.params.course;
  }

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  constructor(props) {
    super(props);

    this.state = {
      name: this.course.name
    };
  }

  goToClasses() {
    this.navigate('AllClasses', {
      course: this.course
    });
  }

  goToDisciplines() {
    this.navigate('AllDisciplines', {
      course: this.course
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          <Components.PButton title="Turmas" onPress={() => this.goToClasses()}></Components.PButton>
          <Components.PButton title="Disciplinas" onPress={() => this.goToDisciplines()}></Components.PButton>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default CourseScreen;