import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Components from './../../components';

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

class AllInstitutesScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Instituições'
  };

  constructor(props) {
    super(props);

    const institutes = this.fetchInstitutes(this);

    this.state = {
      institutes: []
    };

  }

  async fetchInstitutes(that) {
    const institutes = await this.services.nstitutesRepository.all();

    return institutes;
  }

  componentDidMount() {
    const institutes = this.fetchInstitutes();

    this.setState({
      institute
    });
  }

  navigateToInstitute(institute) {
    this.navigate('Institute', { institute })
  }

  createNewInstitute() {
    this.navigate('NewInstitute');
  }

  render() {
    return (
      <View style={styles.base}>
        <View> 
          <Text style={styles.name}>Instituições</Text>
        </View>
        <View>
          <Button title="Nova instituição" onPress={() => this.createNewInstitute()}></Button>
          {
            this.state.institutes
              .map(institute => {
                return (
                  <Button 
                    key={institute.id}
                    title={institute.name}
                    onPress={() => this.navigateToInstitute(institute)}>
                  </Button>
                )
              })
          }
        </View>
      </View>
    );
  }
}

export default AllInstitutesScreen;