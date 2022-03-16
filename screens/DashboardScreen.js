import React, { Component } from 'react';
import DrawerNavigator from"../navigation/DrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default class DashboardScreen extends Component {
  render() {
    return (
      <div>
<NavigationContainer>
    <DrawerNavigator/>
</NavigationContainer>
      </div>
    )
  }
}