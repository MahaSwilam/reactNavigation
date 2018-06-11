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
  Button,
} from 'react-native';
import { Container } from 'native-base'

import { createStackNavigator, TabNavigator } from 'react-navigation';
import ListComponent from './list';

export default class HomeComponent extends Component {
  render() {
    return (
        <View>
          <Text>Home</Text>
          <Button title="go back to login" onPress={() => this.props.navigation.goBack()} />
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
