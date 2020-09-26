import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import MoreScreen from "./app/screens/MoreScreen";
import ParkScreen from "./app/screens/ParkScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import MyTabs from "./app/routes/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}