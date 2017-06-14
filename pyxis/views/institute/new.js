import React from 'react';
import { Alert, Text, View, Button, StyleSheet } from 'react-native';
import Components from './../../components';
import TextField from './../../components/TextField';

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

class NewInstituteScreen extends Components.PyxisComponent {
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

  async createInstitute() {
    try {
      const maintainer = await this.services.maintainersRepository.save({
        user_id: this.services.currentUser.id
      });

      const institute = await this.services.institutesRepository.save({
        name: this.state.name,
        maintainer_id: maintainer.id
      });

      Alert.alert('Registro efetuado com sucesso!');
      this.goBack();
    } catch (err) {
      Alert.alert('Oops', err.message);
    }
  }

  render() {
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
          <Components.PButton title="Salvar" onPress={() => this.createInstitute()}></Components.PButton>
          <Components.PButton title="Voltar" onPress={() => this.goBack()}></Components.PButton>
        </View>
      </View>
    );
  }
}

export default NewInstituteScreen;