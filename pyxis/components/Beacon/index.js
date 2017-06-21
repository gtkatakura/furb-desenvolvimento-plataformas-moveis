import React from 'react';
import { Alert, View, Button, StyleSheet, Platform, DeviceEventEmitter } from 'react-native';
import Beacons from 'react-native-beacons-manager';

class iOSBeacon {
  constructor(services) {
    this.services = services;
  }

  async start() {
    this.beacons = await this.services.beaconsRepository.all();

    this.requestAuthorization();
    this.detectBeacons();
  }

  stop() {
    Beacons.stopMonitoringForRegion();
    Beacons.stopUpdatingLocation();

    DeviceEventEmitter.removeListener('beaconsDidRange');
  }

  requestAuthorization() {
    Beacons.requestWhenInUseAuthorization();
  }

  startMonitoring() {
    const regions = this.beacons.map(beacon => Object.assign({}, { identifier: `beacon_${beacon.id}`, uuid: beacon.name }));

    regions.forEach(region => {
      Beacons.startMonitoringForRegion(region);
      Beacons.startRangingBeaconsInRegion(region);
    });

    Beacons.startUpdatingLocation();
  }

  onBeaconRange(data) {
    if (!this.requestInterval) {
      this.requestInterval = setInterval(() => {
        const beacon = this.beacons.find(beacon => {
          return data.beacons[0] ? data.beacons[0].uuid === beacon.name : false;
        });

        if (beacon < 0) {
          this.clearInterval();
        }

        this.services.beaconPresencesRepository.save({
          beacon_id: beacon.id,
          user_id: this.services.currentUser.id
        });

        console.log('Presença confirmada', data);

        this.clearInterval();
      }, (10000)); //(2 * 60 * 1000)); //two minutes
    }
  }

  clearInterval() {
    window.clearInterval(this.requestInterval);
    delete this.requestInterval;
  }

  registerEvents() {
    DeviceEventEmitter.addListener('beaconsDidRange', data => this.onBeaconRange(data));
  }

  detectBeacons() {
    this.startMonitoring();
    this.registerEvents();
  }
}

class AndroidBeacon {
  constructor(services) {
    this.services = services;
  }

  async start() {
    this.beacons = await this.services.beaconsRepository.all();
     
     Beacons.detectIBeacons();

    try {
      await Beacons.startRangingBeaconsInRegion('REGION1')
    } catch (err) {
      Alert.alert('Ranging failed');
    }

    DeviceEventEmitter.addListener('beaconsDidRange', data => this.onBeaconRange(data));
  }

  onBeaconRange(data) {
    if (!this.requestInterval) {
      this.requestInterval = setInterval(() => {
        const beacon = this.beacons.find(beacon => {
          return data.beacons[0] ? data.beacons[0].uuid === beacon.name : false;
        });

        if (beacon < 0) {
          this.clearInterval();
        }

        this.services.beaconPresencesRepository.save({
          beacon_id: beacon.id,
          user_id: this.services.currentUser.id
        });

        console.log('Presença confirmada', data);

        this.clearInterval();
      }, (10000)); //(2 * 60 * 1000)); //two minutes
    }
  }

  clearInterval() {
    window.clearInterval(this.requestInterval);
    delete this.requestInterval;
  }
}

class Beacon {
  static getService() {
    return Platform.OS === 'ios' ? iOSBeacon : AndroidBeacon;
  }

  static start(services) {
    if (!this.beacon) {
      this.beacon = new (this.getService())(services);
    }

    this.beacon && this.beacon.start();
  }

  static stop() {
    this.beacon && this.beacon.stop();
  }
}

export default Beacon;
