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

class ListBeaconsScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Beacons'
  };

  constructor(props) {
    super(props);

    this.state = {
      beacons: []
    };
  }

  createBeacon() {
    this.navigate('NewBeacon');
  }

  goToBeacon(beacon) {
    this.navigate('Beacon', {
      beacon
    });
  }

  async componentWillMount() {
    const beacons = await this.services.beaconsRepository.all();

    this.setState({ beacons })
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.name}>Beacons</Text>
          <View style={styles.header}>
            {
              //<Components.PButton title="Excluir" onPress={() => this.remove()}></Components.PButton>
            }
          </View>
        </View>
        <ScrollView>
          {
            this.isMaintainer() && <Components.PButton title="Novo beacon" onPress={() => this.createBeacon()}></Components.PButton>
          }
          {
            this.state.beacons.map((beacon, idx) => {
              return <Components.PButton key={`${idx}_${beacon.name}`} title={beacon.name} onPress={() => this.goToBeacon(beacon)}></Components.PButton>
            })
          }
        </ScrollView>
        <Components.BackButton onPress={() => this.goBack()}></Components.BackButton>
      </View>
    );
  }
}

export default ListBeaconsScreen;
