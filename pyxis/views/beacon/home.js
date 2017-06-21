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
  },
  header: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

class BeaconScreen extends Components.PyxisComponent {
  constructor(props) {
    super(props);
  }

  get beacon() {
    return this.props.navigation.state.params.beacon;
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.beacon.name}</Text>
          <View style={styles.header_actions}>
            {
              // <Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
            }
          </View>
        </View>
        <ScrollView>
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default BeaconScreen;
