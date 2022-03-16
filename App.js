import * as React from 'react';
import {
createSwitchNavigator,
} from "react-navigation";

import firebase from 'firebase/compat/app';
import {firebaseConfig} from "./firebase"
import LoginScreen from './screens/LoginScreen.js';
import LoadingScreen from './screens/LoadingScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
});

export default function App() {
  return (
<AppSwitchNavigator/>
  );
}