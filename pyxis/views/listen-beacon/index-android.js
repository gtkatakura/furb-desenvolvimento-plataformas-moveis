
import React, { Component } from 'react';
import { Alert, View, Text, Button, StyleSheet } from 'react-native';
import Components from './../../components';
import TextField from './../../components/TextField';

import Beacons from 'react-native-beacons-manager';
import { DeviceEventEmitter } from 'react-native'

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

class BeaconListenerAndroid extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Marcar Presença'  
  };

  constructor(props) {
    super(props);

  this.state = {
    };
  }

  detectBeacons() {
    Beacons.detectIBeacons();

    try {
      await Beacons.startRangingBeaconsInRegion('REGION1')
    } catch (err) {
      Alert.alert('Oops, não encontramos nenhum beacon próximo a sua posição.', err.message);
    }

    DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
        this.setPresence();
    })
  }

  async setPresence() {
      try {
        // TODO: request to set presence
      } catch (err) {
          Alert.alert('Oops', err.message);
      }
  }

  render() {
    const { state } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Marcar Presença</Text>
        </View>
        <View style={style.content}>
          <Components.PButton title="Estou na sala de aula!" onPress={() => this.detectBeacons()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default BeaconListenerAndroid;