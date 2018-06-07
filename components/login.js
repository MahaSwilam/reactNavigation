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
  View,
  Button
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

export default class LoginComponent extends Component {

  static navigationOptions = { // to make header not appear in first page which is "login"
    header: null
  }

  render() {
    return (
      <View>
          <Text>login</Text>
          <Button title="Go to home" onPress={ ()=> this.props.navigation.navigate('home') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
