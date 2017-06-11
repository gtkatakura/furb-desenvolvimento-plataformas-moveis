import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const styles = StyleSheet.create({
  header: {
    paddingTop: `20%`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newuser: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40
  }
});

class NewUserScreen extends React.Component {
  static navigationOptions = {
    title: 'Novo usuário'
  };

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  onConfirm() {
    const { navigate } = this.props.navigation;

    navigate('Home');
  }

  onCancel() {
    const { navigate } = this.props.navigation;

    navigate('Login');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
        </View>
        <View style={styles.newuser}>
          <Components.TextField value={this.state.name} name="name" placeholder="Nome" onChange={e => this.onFieldChange(e)}></Components.TextField>
          <Components.TextField value={this.state.email} name="email" placeholder="Email" onChange={e => this.onFieldChange(e)}></Components.TextField>
          <Components.TextField value={this.state.username} name="username" placeholder="Username" onChange={e => this.onFieldChange(e)}></Components.TextField>
          <Components.TextField value={this.state.password} name="password" placeholder="Password" onChange={e => this.onFieldChange(e)}></Components.TextField>
        </View>
        <View>
          <Button title="Cadastrar" onPress={e => this.onConfirm()} />
          <Button title="Cancelar" onPress={e => this.onCancel()} />
        </View>
      </View>
    );
  }
}

export default NewUserScreen;