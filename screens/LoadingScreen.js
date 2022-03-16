import React, { Component } from 'react';
import { View , ActivityIndicator } from 'react-native';
import firebase from 'firebase/compat/app';



export default class LoadingScreen extends Component {

    componentDidMount() {
            ckeckIfLoggedIn();
    }

    ckeckIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('DashbloardScreen');
            } else {
                this.props.navigation.navigate('LoginScreen');
            }
        });
    }

  render() {
    return (
<View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
}}>

    <ActivityIndicator size="large" />

</View>
    )
  }
}
