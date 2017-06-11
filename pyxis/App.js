import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Views from './views';

const Pyxis = DrawerNavigator({
  Login: { screen: Views.Login },
  Home: { screen: Views.Home },
  ForgotPassword: { screen: Views.ForgotPassword },
  NewUser: { screen: Views.NewUser },
  NewInstitute: { screen: Views.Institute.NewInstituteScreen },
  Institute: { screen: Views.Institute.InstituteScreen },
  NewCourse: { screen: Views.Course.NewCourseScreen },
  Course: { screen: Views.Course.CourseScreen }
});

AppRegistry.registerComponent('pyxis', () => Pyxis);
