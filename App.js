/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, StackNavigator, TabNavigator ,createBottomTabNavigator } from 'react-navigation';
import LoginComponent from './components/login';
import HomeComponent from './components/home';
import ListComponent from './components/list';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  login: { screen: LoginComponent},
  home: { 
    screen: createBottomTabNavigator({
      home: {
        screen: HomeComponent,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
        }),
      },
      list: {
        screen: ListComponent,
        navigationOptions: ({ navigation }) => ({
          title: 'List',
        }),
      }

    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
