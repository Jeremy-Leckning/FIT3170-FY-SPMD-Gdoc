import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import MoreStack from "./MoreStack";
import ParkStack from "./ParkStack";
import ProfileStack from "./ProfileStack";
import DetailStack from "./DetailStack";
import MyTabs from "./BottomTabNavigator";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

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
      <Stack.Screen name="Park" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default MainStack;
