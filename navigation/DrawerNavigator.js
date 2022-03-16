import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Contact from "../screens/Contact";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;