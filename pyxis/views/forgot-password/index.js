import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const styles = StyleSheet.create({
  header: {
    paddingTop: `30%`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    fontSize: 16
  },
  separator: {
    marginTop: 30,
  },
  forgot: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40
  }
});

class ForgotPasswordScreen extends Components.PyxisComponent {
  static navigationOptions = {
    title: 'Resetar senha'
  };

  constructor() {
    super();

    this.state = {
      email: ''
    };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  onConfirm() {

  }

  onCancel() {
    this.navigate('Login');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.separator}></View>
          <Text style={styles.header_text}>Esqueceu sua senha? Sem problemas!</Text>
          <Text style={styles.header_text}>Informe seu email para um link para recuperar seu acesso</Text>
        </View>
        <View style={styles.forgot}>
          <Components.TextField value={this.state.email} name="email" placeholder="Email" onChange={e => this.onFieldChange(e)}></Components.TextField>
        </View>
        <View>
          <Components.PButton title="Enviar" onPress={e => this.onConfirm()} />
          <Components.PButton title="Cancelar" onPress={e => this.onCancel()} />
        </View>
      </View>
    );
  }
}

export default ForgotPasswordScreen;