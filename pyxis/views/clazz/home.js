import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
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
  },
});

class ClazzScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Turma'
  };

  get graduationClass() {
    return this.props.navigation.state.params.graduationClass;
  }

  constructor(props) {
    super(props);

    const { state } = this.props.navigation;

    this.state = {
      name: `Turma ${this.graduationClass.year}`,
      graduationSemesters: []
    };
  }

  async componentDidMount() {
    const graduationSemesters = await this.services.graduationSemestersRepository.all({
      graduation_class_id: this.graduationClass.id
    });

    this.setState({ graduationSemesters });
  }

  navigateToSemester(graduationSemester) {
    this.navigate('Semester', { graduationSemester, graduationClass: this.graduationClass });
  }

  async remove() {
    try {
      const institute = await this.services.graduationClassesRepository.destroy(this.graduationClass);

      Alert.alert('Turma removida com sucesso!');
      this.goBack();
    } catch (err) {
      Alert.alert('Ops..', err.message);
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
          <View style={styles.header}>
            {
              //<Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
            }
          </View>
        </View>
        <ScrollView>
          {
            this.state.graduationSemesters.map(graduationSemester => {
              return (
                <Components.PButton
                  key={graduationSemester.id}
                  title={`Semestre ${graduationSemester.number}`}
                  onPress={() => this.navigateToSemester(graduationSemester)}>
                </Components.PButton>
              )
            })
          }
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default ClazzScreen;