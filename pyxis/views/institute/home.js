import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
  },
  name: {
    fontSize: 24
  },
  header: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

export default class InstituteScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Instituto'
  };

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  constructor(props) {
    super(props);
  }

  goToCourses() {
    this.navigate('AllCourses', {
      institute: this.institute
    });
  }

  goToPeriodDays() {
    this.navigate('AllPeriodDays', {
      institute: this.institute
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.institute.name}</Text>
        </View>
        <ScrollView>
          <Components.PButton title="Cursos" onPress={() => this.goToCourses()}></Components.PButton>
          <Components.PButton title="Períodos de Aula" onPress={() => this.goToPeriodDays()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}
