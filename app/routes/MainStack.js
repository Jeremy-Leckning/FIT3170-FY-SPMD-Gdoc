import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import MoreStack from "./MoreStack";
import ParkStack from "./ParkStack";
import BottomTabNavigator from "./BottomTabNavigator";
import SetUpScreen from "../screens/SetUpScreen";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Preference"
        component={PreferenceScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SetUp"
        component={SetUpScreen}
      />
      <Stack.Screen
        name="MyTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
