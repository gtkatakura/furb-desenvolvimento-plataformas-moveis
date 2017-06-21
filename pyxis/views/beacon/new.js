
import React from 'react';
import { Alert, Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24,
    flex: 1
  },
  header: {
    marginBottom: 16
  },
  title: {
    fontSize: 24
  }
});

class NewBeaconScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Novo beacon'
  };

  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      uuid: ''
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createBeacon() {
    try {
      const beacon = await this.services.beaconsRepository.save({
        name: this.state.name
      });

      Alert.alert('Beacon criado com sucesso!');
       
      this.navigate('AllBeacons');
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Text style={styles.title}>Novo beacon</Text>
        </View>
        <ScrollView>
          <Components.TextField  name="name" placeholder="UUID" value={this.state.name} onChange={e => this.onFieldChange(e)}></Components.TextField>
          <Components.PButton title="Salvar" onPress={() => this.createBeacon()}></Components.PButton>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default NewBeaconScreen