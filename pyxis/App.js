import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Components from './components';

import Views from './views';

const Pyxis = DrawerNavigator({
  Login: { screen: Views.Login },
  Home: { screen: Views.Home },
  ForgotPassword: { screen: Views.ForgotPassword },
  NewUser: { screen: Views.NewUser },
  NewInstitute: { screen: Views.Institute.NewInstituteScreen },
  Institute: { screen: Views.Institute.InstituteScreen },
  Course: { screen: Views.Course.CourseScreen },
  AllCourses: { screen: Views.Course.AllCoursesScreen },
  NewCourse: { screen: Views.Course.NewCourseScreen },
  Clazz: { screen: Views.Clazz.ClazzScreen },
  AllClasses: { screen: Views.Clazz.AllClasses },
  Frequency: { screen: Views.Frequency.FrequencyScreen },
  NewClass: { screen: Views.Clazz.NewClassScreen },
  Semester: { screen: Views.Semester.SemesterScreen },
  NewPeriod: { screen: Views.Period.NewPeriodScreen },
  Period: { screen: Views.Period.PeriodScreen },
  AllInstitutes: { screen: Views.Institute.AllInstitutesScreen },
  Discipline: { screen: Views.Discipline.DisciplineScreen },
  AllDisciplines: { screen: Views.Discipline.AllDisciplinesScreen },
  NewDiscipline: { screen: Views.Discipline.NewDisciplineScreen },
  AllPeriodDays: { screen: Views.PeriodDay.AllPeriodDaysScreen },
  NewPeriodDay: { screen: Views.PeriodDay.NewPeriodDayScreen },
  Beacon: { screen: Views.Beacon.BeaconScreen },
  AllBeacons: { screen: Views.Beacon.ListBeaconsScreen },
  NewBeacon: { screen: Views.Beacon.NewBeaconScreen }
});

const M = () => {
  return (
    <Pyxis></Pyxis>
  );
};

AppRegistry.registerComponent('pyxis', () => M);
