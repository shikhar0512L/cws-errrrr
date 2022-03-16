import React, { Component } from 'react';
import {Text,View,StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Code With Shikhar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#1f1bf7',
  }
})