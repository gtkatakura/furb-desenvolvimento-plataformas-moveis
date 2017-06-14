import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, FlatList } from 'react-native';

import Components from './../../components';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  title: {
    fontSize: 24
  },
  content: {
    paddingTop: 24
  },
  status: {
    marginBottom: 8
  }
});

class FrequencyScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Frequencia'
  };

  get period() {
    return this.props.navigation.state.params.period;
  }

  get semester() {
    return this.props.navigation.state.params.semester;
  }

  constructor(props) {
    super(props);

    this.state = {
      frequency: [ ]
    }
  }

  async componentDidMount() {
    const frequency = [ //TODO substituir por API
      { day: '01/01/2017', present: true },
      { day: '07/01/2017', present: true },
      { day: '14/01/2017', present: false },
      { day: '21/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '28/01/2017', present: true },
      { day: '35/01/2017', present: false },
      { day: '42/01/2017', present: true },
      { day: '49/01/2017', present: false }
    ];

    this.setState({
      frequency
    });
  }

  goBack() {
    this.navigate('Period', {
      period: this.period,
      semester: this.semester
    });
  }

  render() {
    const renderItem = ({ item }) => {
      const status = item.present ? 'Presente' : 'Ausente';
      return (
        <View>
          <Text>{item.day}</Text><Text style={styles.status}>{status}</Text>
        </View>
      )
    };

    const percentage = this.state.frequency.filter(fr => !fr.present).length;

    const items = this.state.frequency.map((item, index) => Object.assign(item, { key: `${item.day}_${index}` }));

    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.title}>Frequencia</Text>
          <Text>Faltas: {percentage}</Text>
        </View>
        <Button title="Voltar" onPress={() => this.goBack()}></Button>
        <ScrollView style={styles.content}>
          <FlatList
            data={this.state.frequency}
            renderItem={renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

export default FrequencyScreen;

      //  <FlatList
      //     data={[
      //       {key: 'Devin'},
      //       {key: 'Jackson'},
      //       {key: 'James'},
      //       {key: 'Joel'},
      //       {key: 'John'},
      //       {key: 'Jillian'},
      //       {key: 'Jimmy'},
      //       {key: 'Julie'},
      //     ]}
      //     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      //   />