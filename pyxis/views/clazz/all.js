import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Components from './../../components';

import TextField from './../../components/TextField';

const style = StyleSheet.create({
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

class AllClassesScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Nova turma'
  };

  get course() {
    return this.props.navigation.state.params.course;
  }

  constructor(props) {
    super(props);

    this.state = {
      name: `Turmas de ${this.course.name} `,
      classes: []
    };
  }

  async componentDidMount() {
    const classes = await this.services.graduationClassesRepository.all({ course_id: this.course.id });

    this.setState({ classes });
  }

  goBack() {
    this.navigate('Course', {
      course: this.course
    });
  }

  goToClass(classz) {
    this.navigate('Clazz', {
      course: this.course,
      classz
    })
  }

  createNewClass() {
    this.navigate('NewClass', {
      course: this.course
    });
  }

  render() {
    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>{this.state.name}</Text>
        </View>
        <View style={style.content}>
          <Button title="Criar nova turma" onPress={() => this.createNewClass()}></Button>
          {
            this.classes.map(classz => {
              return <Button title={`Turma ${classz.year}`} onPress={() => this.goToClass(classz)}></Button>
            })
          }
          <Button title="Voltar" onPress={() => this.goBack()}></Button>
        </View>
      </View>
    );
  }
}

export default AllClassesScreen;