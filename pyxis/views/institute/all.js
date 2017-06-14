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

    this.state = {
      institutes: []
    };

  }

  async componentDidMount() {
    const institutes = await this.services.institutesRepository.all();
    this.setState({ institutes });
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
        <View>
          <Button title="Voltar" onPress={() => this.navigate('Home')}></Button>
        </View>
      </View>
    );
  }
}

export default AllInstitutesScreen;