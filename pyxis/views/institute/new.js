import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import TextField from './../../components/TextField';

import InstituteServices from './../../services/institute'

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
})

class NewInstituteScreen extends React.Component {
  static navigationOptions = {
    title: 'Nova instituição'
  };

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  createInstitute() {
    const institute = {
      name: this.state.name,
      //TODO: user
    };

    InstituteServices.newInstitute()
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={style.base}>
        <View style={style.header}>
          <Text style={style.title}>Nova instituição</Text>
        </View>
        <View style={style.content}>
          <TextField
            name="name"
            placeholder="Nome"
            value={this.state.name}
            onChange={e => this.onFieldChange(e)}>
          </TextField>
          <Button title="Salvar" onPress={() => this.createInstitute()}></Button>
          <Button title="Voltar" onPress={() => navigate('Home')}></Button>
        </View>
      </View>
    );
  }
}

export default NewInstituteScreen;