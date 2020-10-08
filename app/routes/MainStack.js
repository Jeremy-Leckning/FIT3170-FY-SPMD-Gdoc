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

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="ParkStack"
        component={ParkStack}
        options={{
          tabBarLabel: "Park",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="parking" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="DetailStack"
        component={DetailStack}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
