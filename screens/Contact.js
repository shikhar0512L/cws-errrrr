import React, { Component } from 'react';
import {View, TextInput , Button } from 'react-native';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      email:'',
      message:''
    };
  }

  submit(){
    console.warn(this.state)
  }

  render() {
    return (
      <View style={{
        margin:20,
        marginTop:100,
        
      }}>

        <TextInput placeholder="Enter Your Name"
        onChangeText={(text)=>{this.setState({name:text})}}
        style={{
          borderWidth:2,
          borderColor:"skyblue",
          margin:20,
          padding:20
        }}
        />
        <TextInput placeholder="Enter Your Email"
        onChangeText={(text)=>{this.setState({email:text})}}
        style={{
          borderWidth:2,
          borderColor:"skyblue",
          margin:20,
          padding:20
        }}
        />
        <TextInput placeholder="Enter Your Message"
        onChangeText={(text)=>{this.setState({message:text})}}
        style={{
          borderWidth:2,
          borderColor:"skyblue",
          margin:20,
          padding:20
        }}
        />

<Button title="Submit" onPress={()=>{this.submit()}} />

      </View>
    )
  }
}
