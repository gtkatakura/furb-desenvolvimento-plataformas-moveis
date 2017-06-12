import React from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';

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

  get services() {
    return this.props.navigation.state.params.services;
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async createInstitute() {
    try {
      const maintainer = await this.services.maintainersRepository.save({
        user_id: this.services.currentUser.id
      });

      const institute = await this.services.institutesRepository.save({
        name: this.state.name,
        maintainer_id: maintainer.id
      });

      Alert.alert('Sucesso!');
    } catch (err) {
      Alert.alert('Problema!', err.message);
    }
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