import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.logo} 
          source={{uri: 'http://mobilelegends-pc.com/wp-content/uploads/2017/07/mobile_legends3.png'}} 
        />
        <Text style={styles.instructions}>Learn To Mobile Legend</Text>
        <TouchableOpacity style={styles.button}
          accessible={true}
          onPress={() => this.props.navigation.navigate('Heroes')}>
          <View>
        <Text style={styles.buttonText}>START</Text></View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    marginTop: 25
  },
  logo: {
    alignItems: 'center',
    margin: 50,
    marginTop: 80,
    marginBottom: 5,
    marginLeft: 55,
    width: 250,
    height: 130
  },
  button: {
    width:150,
    backgroundColor:'blue',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
    marginLeft: 105
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
  }
});