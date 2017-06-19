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
  }
});

export default class AllPeriodDaysScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Períodos de Aula'
  };

  constructor(props) {
    super(props);

    this.state = {
      periodDays: []
    };
  }

  get institute() {
    return this.props.navigation.state.params.institute;
  }

  async componentDidMount() {
    const periodDays = await this.services.periodDaysRepository.all({ institute_id: this.institute.id });

    this.setState({ periodDays });
  }

  createNewRegister() {
    this.navigate('NewPeriodDay', { institute: this.institute });
  }

  render() {
    return (
      <View style={styles.base}>
        <View> 
          <Text style={styles.name}>Períodos de Aula de {this.institute.name}</Text>
        </View>
        <ScrollView>
          {
            <Components.PButton title="Novo Período de Aula" onPress={() => this.createNewRegister()}></Components.PButton>
          }
          {
            this.state.periodDays
              .map(periodDay => {
                return (
                  <Components.PButton
                    key={periodDay.id}
                    title={periodDay.name}
                    onPress={() => {}}>
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
