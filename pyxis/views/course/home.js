import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import CourseService from './../../services/course';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  }
});

class CourseScreen extends React.Component {
  static navigationOptions = {
    title: 'Curso'
  };

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      name: state.params ? state.params.name : '',
      id: state.params ? state.params.id : -1,
      classes: [
        { name: '2010/I', id: 1 },
        { name: '2014/I', id: 2 }
      ]
    };

    this.fetchCourseData();
  }

  fetchCourseData() {
    if (!this.state.id) return;

    CourseService.getCourse(this.state.id)
      .then(response => this.setState(response.data));
  }

  createNewClass() {
    const { navigate } = this.props.navigation;

    navigate('NewClass', { courseId: this.state.id });
  }

  navigateToClass(clazz) {
    const { navigate } = this.props.navigation;

    navigate('Clazz', clazz);
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          <Button title="Criar nova turma" onPress={() => this.createNewClass()}></Button>
          {
            this.state.classes.map(clazz => {
              return (
                <Button
                  key={clazz.id}
                  title={clazz.name}
                  onPress={() => this.navigateToClass(clazz)}>
                </Button>
              )
            })
          }
        </View>
      </View>
    );
  }
}

export default CourseScreen;