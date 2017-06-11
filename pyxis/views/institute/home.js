import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import InstituteServices from './../../services/institute'
import CourseServices from './../../services/course';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: { 
    fontSize: 24
  }
});

class NewInstituteScreen extends React.Component {
  static navigationOptions = {
    title: 'Instituição'
  };

  constructor(props) {
    super(props);

    this.state = {
      name: 'FURB',
      courses: [
        { name: 'Ciência da Computação', id: 1 },
        { name: 'Direito', id: 2 },
        { name: 'Medicina', id: 3 },
        { name: 'Administração', id: 4 },
        { name: 'Fisioterapia', id: 5 },
        { name: 'Comércio Exterior', id: 6 },
        { name: 'Música', id: 7 }
      ]
    };

    this.fetchInstitute();
  }

  fetchInstitute() {
    const { state } = this.props.navigation;

    if (!state.params) return;

    this.setState({
      
    });

    const { institute } = state.params;

    InstituteServices.getInstitute(institute).then(response => {
      this.setState(response.data);
    });

    CourseServices.listCourses(institute).then(response => {
      this.setState(response.data.courses);
    });
  }

  sortByName(a, b) {
    const lowerA = a.name.toLowerCase();
    const lowerB = b.name.toLowerCase();

    if (lowerA < lowerB) return -1;
    if (lowerA > lowerB) return 1;

    return 0;
  }

  navigateToCourse(course) {
    const { navigate } = this.props.navigation;

    navigate('Course', course)
  }

  createNewCourse() {
    const { navigate } = this.props.navigation;

    navigate('NewCourse', { 
      instituteId: this.state.id,
      instituteName: this.state.name,
      //TODO: maintainer user
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <View> 
          <Text style={styles.name}>{this.state.name}</Text>
        </View>
        <View>
          <Button title="Novo curso" onPress={() => this.createNewCourse()}></Button>
          {
            this.state.courses
              .sort((a, b) => this.sortByName(a, b))
              .map(course => {
                return (
                  <Button 
                    key={course.id}
                    title={course.name}
                    onPress={() => this.navigateToCourse(course)}>
                  </Button>
                )
              })
          }
        </View>
      </View>
    );
  }
}

export default NewInstituteScreen;