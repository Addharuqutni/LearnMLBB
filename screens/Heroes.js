import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { Header } from 'react-native-elements';
import TouchableScale from './tc';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation'

export class Heroes extends Component {
  render() {
    return (
    <List>
    <ListItem
    component={TouchableScale}

    friction={90} //
    tension={100} // These props are passed to the parent component (here TouchableScale)
    activeScale={0.95} //

    onPress={() => alert("ASSASSIN")}
    avatar={require('./saber.png')}
    title="Saber"
    titleStyle={{ color: 'black'}}
    chevronColor="black"
    chevron
    />
    <ListItem
    component={TouchableScale}

    friction={90} 
    tension={100} 
    activeScale={0.95} 

    onPress={() => alert("ASSASSIN/MAGE")}
    avatar={require('./karina.png')}
    title="Karina"
    titleStyle={{ color: 'black'}}
    chevronColor="black"
    chevron
    />
    <ListItem
    component={TouchableScale}

    friction={90} 
    tension={100} 
    activeScale={0.95} 

    onPress={() => alert("ASSASSIN")}
    avatar={require('./fanny.png')}
    title="Fanny"
    titleStyle={{ color: 'black'}}
    chevronColor="black"
    chevron
    />
    </List>
    )
  }
}

export default Heroes;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25
  }
});