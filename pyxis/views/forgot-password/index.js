import React from 'react';
import { Image, View, Text, Button, StyleSheet } from 'react-native';

import Components from './../../components';

const logo = require('./../../assets/images/logo.png');

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
  logo: {
    transform: [
      { scaleX: 1.25 },
      { scaleY: 1.25 }
    ]
  },
  forgot: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40
  }
});

class ForgotPasswordScreen extends React.Component {
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
    const { navigate } = this.props.navigation;

    navigate('Login');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.separator}></View>
          <Text style={styles.header_text}>Esqueceu sua senha? Sem problemas!</Text>
          <Text style={styles.header_text}>Informe seu email para um link para recuperar seu acesso</Text>
        </View>
        <View style={styles.forgot}>
          <Components.TextField value={this.state.email} name="email" placeholder="Email" onChange={e => this.onFieldChange(e)}></Components.TextField>
        </View>
        <View>
          <Button title="Enviar" onPress={e => this.onConfirm()} />
          <Button title="Cancelar" onPress={e => this.onCancel()} />
        </View>
      </View>
    );
  }
}

export default ForgotPasswordScreen;