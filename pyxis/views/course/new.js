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

    const { state } = this.props.navigation;

    this.state = {
      instituteId: state.params ? state.params.instituteId : -1,
      name: ''
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createinstitute() {
    try {
      const coordinator = await this.service.coordinatorsRepository.save({
        user_id: this.services.currentuser.id
      });

      const course = await this.services.coursesRepository.save({
        name: this.state.name,
        institute: this.state.instituteId,
        coordinator_id: coordinator.id
      });

      Alert.alert('Sucesso!');
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Novo curso</Text>
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