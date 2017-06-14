import React from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';
import Components from './../../components';

import InstituteServices from './../../services/institute'
import CourseServices from './../../services/course';

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
  goback: {
    position: 'absolute',
    bottom: 0
  }
});

class NewInstituteScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Instituição'
  };

  constructor(props) {
    super(props);

    this.state = {
      name: this.institute.name,
      courses: []
    };
  }

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  async componentDidMount() {
    const courses = await this.services.coursesRepository.all({ institute_id: this.institute.id });
    this.setState({ courses });
  }

  navigateToCourse(course) {
    this.navigate('Course', { course, institute: this.institute })
  }

  createNewCourse() {
    this.navigate('NewCourse', { institute: this.institute });
  }

  async remove() {
    try {
      const institute = await this.services.institutesRepository.destroy(this.institute);

      Alert.alert('Instituição removida com sucesso!');

      this.goBack();
    } catch(err) {
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
          <Components.PButton title="Novo curso" onPress={() => this.createNewCourse()}></Components.PButton>
          {
            this.state.courses
              .map(course => {
                return (
                  <Components.PButton
                    key={course.id}
                    title={course.name}
                    onPress={() => this.navigateToCourse(course)}>
                  </Components.PButton>
                )
              })
          }
          <Components.PButton style={styles.goback} title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default NewInstituteScreen;