import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import Heroes from './screens/Heroes';
import Setting from './screens/Setting';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation'

export default createBottomTabNavigator({
  Home :{
    screen: Home,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-home" size={20} />
        )
    }
  },
  Heroes :{
    screen: Heroes,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-person" size={20} />
        )
    }
  },
  Setting :{
    screen: Setting,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>(
        <Icon name="ios-settings" size={20} />
        )
    }
  },
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  }
})