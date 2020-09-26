import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoreScreen from "../screens/MoreScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();

class MoreStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    );
  }
}

export default MoreStack;
