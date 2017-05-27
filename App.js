import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Views from './views';

const Pyxis = DrawerNavigator({
  Login: { screen: Views.Login },
  Home: { screen: Views.Home },
  // Institute: { },
  // Course: { },
  // Subject: { },
  // User: { }  
});

AppRegistry.registerComponent('pyxis', () => Pyxis);
