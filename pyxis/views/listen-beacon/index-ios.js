

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

const region = {
    identifier: 'Estimotes',
    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
};

class BeaconListenerIOS extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Marcar Presença'  
  };

  constructor(props) {
    super(props);

  this.state = {
    };
  }

  detectBeacons() {      
    Beacons.requestWhenInUseAuthorization();

    Beacons.startMonitoringForRegion(region);
    Beacons.startRangingBeaconsInRegion(region);

    Beacons.startUpdatingLocation();

    DeviceEventEmitter.addListener('beaconsDidRange',(data) => {
        this.setPresence();

        // data.region - The current region
        // data.region.identifier
        // data.region.uuid

        // data.beacons - Array of all beacons inside a region
        //  in the following structure:
        //    .uuid
        //    .major - The major version of a beacon
        //    .minor - The minor version of a beacon
        //    .rssi - Signal strength: RSSI value (between -100 and 0)
        //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
        //    .accuracy - The accuracy of a beacon
    });
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

export default BeaconListenerIOS;


