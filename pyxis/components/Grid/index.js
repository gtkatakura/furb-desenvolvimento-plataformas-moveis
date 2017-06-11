import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const styles = new StyleSheet.create({
  grid: {
    margin: 20
  },
  header: {
  },
  header_text: {
    fontSize: 32
  },
  header_actions: {
    // flexWrap: 'wrap',
    flexDirection: 'row'
  },
  content: {},
  item: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 8
  },
  identifier: {
    marginRight: 24
  },
  identifier_text: {
    fontSize: 18
  },
  name_text: {
    fontSize: 18
  }
});

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.grid}>
        <View style={styles.header}>
          <Text style={styles.header_text}>{this.props.title}</Text>
          <View style={styles.header_actions}>
            {
              this.props.buttons.map(button => <Button title={button.title} onPress={() => button.action()}></Button>)
            }
          </View>
        </View>
        <View style={styles.content}>
          {
            (this.props.data || []).map(item => {
              return (
                <View key={item.id} style={styles.item}>
                  <View style={styles.identifier}><Text style={styles.identifier_text}>{item.id}</Text></View>
                  <View style={styles.name}><Text style={styles.name_text}>{item.name}</Text></View>
                </View>
              )
            })
          }
        </View>
      </View>

    );
  }
}

export default Grid;