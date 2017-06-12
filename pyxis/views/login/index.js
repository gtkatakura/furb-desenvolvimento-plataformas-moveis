import React, { Component } from 'react';
import { Alert, Image, View, Button, StyleSheet } from 'react-native';
import AuthService from './../../services/auth';

const logo = require('./../../assets/images/logo.png');

import Components from './../../components';

const styles = StyleSheet.create({
  header: {
    paddingTop: `50%`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    transform: [
      { scaleX: 1.25 },
      { scaleY: 1.25 }
    ]
  },
  login: {
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40
  }
});

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);

    this.state = { password: '', username: '' };
  }

  onFieldChange(event) {
    const changeObject = {};
    changeObject[event.fieldName] = event.fieldValue;

    this.setState(changeObject);
  }

  async onLogin() {
    const { navigate } = this.props.navigation;

    try {
      const url = 'http://192.168.0.4:3000';

      const services = await AuthService.signIn(url, {
        email: this.state.username,
        password: this.state.password
      });

      navigate('Home', { services });
    } catch (e) {
      Alert.alert('Oops!', e.toString());
    }
  }

  onRegister() {
    const { navigate } = this.props.navigation;

    navigate('NewUser');
  }
  
  onForgetPassword() {
    const { navigate } = this.props.navigation;

    navigate('ForgotPassword');
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.login}>
          <Components.TextField value={this.state.username} name="username" placeholder="Username" onChange={e => this.onFieldChange(e)}></Components.TextField>
          <Components.TextField value={this.state.password} name="password" placeholder="Password" secure={true} onChange={e => this.onFieldChange(e)}></Components.TextField>
          <View style={styles.login_actions}>
            <Button title="Login" onPress={() => this.onLogin()}></Button>
            <Button title="Novo Cadatro" onPress={() => this.onRegister()}></Button>
            <Button title="Esqueci a senha" onPress={() => this.onForgetPassword()}></Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;