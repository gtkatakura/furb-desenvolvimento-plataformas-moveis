import _ from 'lodash';
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

  get periodDiscipline() {
    return this.props.navigation.state.params.periodDiscipline;
  }

  constructor(props) {
    super(props);

    this.state = {
      frequencyDays: []
    }
  }

  async componentDidMount() {
    const frequencyDays = await this.services.frequencyDaysRepository.all({
      period_discipline_id: this.periodDiscipline.id
    });

    this.setState({ frequencyDays });
  }

  formatDate(dateAsString) {
    const date = new Date(dateAsString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const format = _.partial(_.padStart, _, 2, '0');

    return [day, month, year].map(format).join('/') + ' ' + [hours, minutes].map(format).join(':');
  }

  render() {
    const statusMapping = {
      presence: 'Presente',
      absence: 'Ausente'
    };

    const renderItem = ({ item }) => {
      const status = statusMapping[item.status] || '';
      return (
        <View>
          <Text>{this.formatDate(item.class_day.start)}: {status}</Text>
        </View>
      )
    };

    const percentage = this.state.frequencyDays.filter(fr => fr.status === 'absence').length;

    const items = this.state.frequencyDays.filter(fr => !fr.status).map((item, index) => Object.assign(item, { key: `${item.date}_${index}` }));

    return (
      <View style={styles.base}>
        <View>
          <Text style={styles.title}>Frequencia</Text>
          <Text>Faltas: {percentage}</Text>
        </View>
        <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        <ScrollView style={styles.content}>
          <FlatList
            data={this.state.frequencyDays}
            renderItem={renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

export default FrequencyScreen;
