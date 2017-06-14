import React from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const styles = new StyleSheet.create({
});

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.id,
    };
  }

  onChange(value, index) {
    this.setState({
      value
    });

    this.props.onValueChange && this.props.onValueChange(value, index);
  }

  render() {
    const display = this.props.displayField;
    const value = this.props.valueField;

    const items = this.props.items.map(item => {
      return { name: item[display], value: item[value] };
    });

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.value}
          onValueChange={this.onChange.bind(this)}
        >
          {
            items.map(item => {
              return <Picker.Item key={item.value} label={item.name} value={item.value}/>
            })
          }
        </Picker>
      </View>
    );
  }
}

export default Select;