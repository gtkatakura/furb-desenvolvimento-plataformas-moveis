import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    padding: 24
  },
  name: {
    fontSize: 24
  }
});

class NewCourseScreen extends React.Component {
  static navigationOptions = {
    title: 'Novo curso'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.base}>
        <View>
        </View>
      </View>
    );
  }
}

export default NewCourseScreen