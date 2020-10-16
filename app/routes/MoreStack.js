import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MoreScreen from "../screens/MoreScreen";
import SettingScreen from "../screens/SettingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PaymentSettingsScreen from "../screens/PaymentSettingsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import LanguageSettingsScreen from "../screens/LanguageSettingsScreen";
import VehicleSettingsScreen from "../screens/VehicleSettingsScreen";

const Stack = createStackNavigator();

class MoreStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen
          name="Payment Settings"
          component={PaymentSettingsScreen}
        />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen
          name="Language Settings"
          component={LanguageSettingsScreen}
        />
        <Stack.Screen
          name="Vehicle Settings"
          component={VehicleSettingsScreen}
        />
      </Stack.Navigator>
    );
  }
}

export default MoreStack;
