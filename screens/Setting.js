import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import {StackNavigator} from 'react-navigation'

export class Setting extends Component {
  _onPressB() {
    Alert.alert(
      '',
  'TAMBAH',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)

  }
  render() {
    return (
      <View>
      <Header
        leftComponent=<TouchableOpacity
          accessible={true}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="home" color='#fff' />
        </TouchableOpacity>
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent=<TouchableOpacity
          accessible={true}
          onPress={this._onPressB}>
          <Icon name="add" color='#fff' />
        </TouchableOpacity>
      />
      <Text style={styles.instructions}> Addharuqutni </Text>
      <Text style={styles.instructions}> XI RPL 3 </Text>
      <Text style={styles.instructions}> SMK Telkom Purwoketo </Text>
      </View>
    )
  }
}

export default Setting;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  }
});