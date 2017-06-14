import React from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';
import Components from './../../components';
import TextField from './../../components/TextField'; 

import CourseServices from './../../services/course';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  header: {
    marginBottom: 16
  },
  title: {
    fontSize: 24
  }
});

class NewCourseScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Novo curso'
  };

  constructor(props) {
    super(props);

    this.state = {
      institute_id: this.institute.id,
      name: ''
    };
  }

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createCourse() {
    try {
      const coordinator = await this.services.coordinatorsRepository.save({
        user_id: this.services.currentUser.id
      });

      const course = await this.services.coursesRepository.save({
        name: this.state.name,
        institute_id: this.state.institute_id,
        coordinator_id: coordinator.id
      });

      Alert.alert('Registro efetuado com sucesso!');
      this.navigate('Institute', { institute: this.institute });
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Text style={styles.title}>Novo curso</Text>
        </View>
        <View>
          <TextField 
            name="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <Button title="Salvar" onPress={() => this.createCourse()}></Button>
          <Button title="Voltar" onPress={() => this.navigate('Home')}></Button>
        </View>
      </View>
    );
  }
}

export default NewCourseScreen