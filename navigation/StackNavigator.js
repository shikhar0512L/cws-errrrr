import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigatior";
// import PostScreen from "../screens/PostScreen";
// import HomeScreen from "../screens/HomeScreen";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
